import { rollup } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import setupFileInliner from './rollup-plugin-inline-file.js'
import { dirname, resolve as pathResolve } from 'path'
import { fileURLToPath } from 'url'
import generateMetadata from '../src/meta/metadata.js'
import { copyFile, readFile, writeFile } from 'fs/promises'
import importBase64 from './rollup-plugin-base64.js'
import generateManifestJson from '../src/meta/manifestJson.js'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const buildDir = pathResolve(__dirname, '../builds')
const channel = getChannelFromArgs(process.argv)
const minify = process.argv.includes('-min')

// Function to handle repetitive file name generation
function generateFileName(basePath, channel, minify, extension) {
  return `${basePath}${channel}${minify ? '.min' : ''}${extension}`
}

function getChannelFromArgs(args) {
  if (args.includes('-beta')) {
    return '-beta'
  } else if (args.includes('-noupdate')) {
    return '-noupdate'
  }
  return ''
}

;(async () => {
  try {
    const packageJson = await readJsonFile(
      pathResolve(__dirname, '../package.json')
    )
    const fileName = generateFileName(
      packageJson.meta.path,
      channel,
      minify,
      '.user.js'
    )
    const metaFileName = generateFileName(
      packageJson.meta.path,
      channel,
      minify,
      '.meta.js'
    )
    const metadata = await generateMetadata(
      packageJson,
      channel,
      fileName,
      metaFileName
    )
    const license = await readFile(pathResolve(__dirname, '../LICENSE'), 'utf8')
    const version = JSON.parse(
      await readFile(pathResolve(__dirname, '../version.json'), 'utf-8')
    )
    const inlineFile = await setupFileInliner(packageJson)

    const bundle = await rollup({
      input: pathResolve(__dirname, '../src/main/Main.ts'),
      plugins: [
        typescript(),
        resolve(),
        commonjs(),
        inlineFile({
          include: ['**/*.html'],
        }),
        inlineFile({
          include: ['**/*.css'],
          transformer(css) {
            if (!minify) return css

            return css
              .replace(/^ {2,}([a-z\-]+:) +/gm, '$1')
              .replace(/\r?\n[ \t+]*/g, '')
              .replace(/;\}/g, '}')
              .replace(/ \{/g, '{')
              .replace(/\/\*[^\*]*\*\//g, '')
              .replace(/ ([>+~]) /g, '$1')
          },
        }),
        importBase64({
          include: [
            '**/*.png',
            '**/*.gif',
            '**/*.wav',
            '**/*.woff',
            '**/*.woff2',
          ],
        }),
        inlineFile({
          include: '**/package.json',
          wrap: false,
          transformer(input) {
            const data = JSON.parse(input)
            return `export default ${JSON.stringify(data.meta, undefined, 1)};`
          },
        }),
        inlineFile({
          include: '**/*.json',
          exclude: '**/package.json',
          wrap: false,
          transformer(input) {
            return `export default ${input};`
          },
        }),
      ],
    })

    /** @type {import('rollup').OutputOptions} */
    const sharedBundleOpts = {
      format: 'iife',
      generatedCode: {
        // needed for possible circular dependencies
        constBindings: false,
      },
    }

    // user script
    await bundle.write({
      ...sharedBundleOpts,
      banner: metadata + license,
      // file: '../builds/test/rollupOutput.js',
      file: pathResolve(buildDir, fileName),
      plugins: minify
        ? [
            terser({
              format: {
                max_line_len: 1000,
                comments:
                  /^(?: ==\/?UserScript==| @|!)|license|\bcc\b|copyright/i,
              },
            }),
          ]
        : [],
      sourcemap: minify,
    })

    await writeFile(pathResolve(buildDir, metaFileName), metadata)

    // chrome extension
    const crxDir = pathResolve(buildDir, 'crx')
    await bundle.write({
      ...sharedBundleOpts,
      banner: license,
      file: pathResolve(crxDir, 'script.js'),
    })

    await copyFile(
      pathResolve(__dirname, '../src/meta/eventPage.js'),
      pathResolve(crxDir, 'eventPage.js')
    )

    await writeFile(
      pathResolve(crxDir, 'manifest.json'),
      // There's no auto update for the extension.
      generateManifestJson(packageJson, version, channel || '-noupdate')
    )

    for (const file of ['icon16.png', 'icon48.png', 'icon128.png']) {
      await copyFile(
        pathResolve(__dirname, '../src/meta/', file),
        pathResolve(crxDir, file)
      )
    }
  } catch (error) {
    console.error(error)
  }
})()

// Utility functions
async function readJsonFile(filePath) {
  const fileContent = await readFile(filePath, 'utf-8')
  return JSON.parse(fileContent)
}
