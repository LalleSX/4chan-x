import SettingsPage from './Settings/SettingsHtml.js'
import FilterGuidePage from './Settings/Filter-guide.html'
import SaucePage from './Settings/Sauce.html'
import AdvancedPage from './Settings/Advanced.html'
import KeybindsPage from './Settings/Keybinds.html'
import FilterSelectPage from './Settings/Filter-select.html'
import Redirect from '../Archive/Redirect.js'
import DataBoard from '../classes/DataBoard.js'
import Notice from '../classes/Notice.js'
import Config from '../config/Config.js'
import ImageHost from '../Images/ImageHost.js'
import CustomCSS from '../Miscellaneous/CustomCSS.js'
import FileInfo from '../Miscellaneous/FileInfo.js'
import Keybinds from '../Miscellaneous/Keybinds.js'
import Time from '../Miscellaneous/Time.js'
import Favicon from '../Monitoring/Favicon.js'
import ThreadUpdater from '../Monitoring/ThreadUpdater.js'
import Unread from '../Monitoring/Unread.js'
import $$ from '../platform/$$.js'
import $ from '../platform/$.js'
import { c, Conf, d, doc, E, g } from '../globals/globals.js'
import Header from './Header.js'
import h, { hFragment } from '../globals/jsx.js'
import { dict, platform } from '../platform/helpers.js'
import { meta } from '../globals/globals.js'
const Settings = {
  dialog: null,

  init() {
    // 4chan X settings link
    const link = $.el('a', {
      className: 'settings-link',
      textContent: '🔧︎',
      title: `${meta.name} Settings`,
      href: 'javascript:;',
    })
    $.on(link, 'click', Settings.open)

    Header.addShortcut('settings', link, 820)

    const add = this.addSection

    add('Main', this.main)
    add('Filter', this.filter)
    add('Sauce', this.sauce)
    add('Advanced', this.advanced)
    add('Keybinds', this.keybinds)

    $.on(d, 'AddSettingsSection', (e: CustomEvent) => {
      const { title, open } = e.detail
      return this.addSection(title, open)
    })
    $.on(d, 'OpenSettings', (e: CustomEvent) => {
      Settings.open(e.detail)
    })

    if (g.SITE.software === 'yotsuba' && Conf['Disable Native Extension']) {
      if ($.hasStorage) {
        // Run in page context to handle case where 4chan X has localStorage access but not the page.
        // (e.g. Pale Moon 26.2.2, GM 3.8, cookies disabled for 4chan only)
        return $.global(function () {
          try {
            const settings =
              JSON.parse(localStorage.getItem('4chan-settings')) || {}
            if (settings.disableAll) {
              return
            }
            settings.disableAll = true
            return localStorage.setItem(
              '4chan-settings',
              JSON.stringify(settings)
            )
          } catch (error) {
            return Object.defineProperty(window, 'Config', {
              value: { disableAll: true },
            })
          }
        }, true)
      } else {
        return $.global(
          () =>
            Object.defineProperty(window, 'Config', {
              value: { disableAll: true },
            }),
          true
        )
      }
    }
  },

  open(openSection = 'none') {
    let dialog: HTMLElement, sectionToOpen: HTMLElement
    if (Settings.dialog) {
      return
    }
    $.event('CloseMenu', null)

    Settings.dialog = dialog = $.el('div', { id: 'overlay' }, SettingsPage)

    $.on($('.export', dialog), 'click', Settings.export)
    $.on($('.import', dialog), 'click', Settings.import)
    $.on($('.reset', dialog), 'click', Settings.reset)
    $.on($('input', dialog), 'change', Settings.onImport)

    const links = []
    for (const section of Settings.sections) {
      const link = $.el('a', {
        className: `tab-${section.hyphenatedTitle}`,
        textContent: section.title,
        href: 'javascript:;',
      })
      $.on(link, 'click', Settings.openSection.bind(section))
      links.push(link, $.tn(' | '))
      if (section.title === openSection) {
        sectionToOpen = link
      }
    }
    links.pop()
    $.add($('.sections-list', dialog), links)
    if (openSection !== 'none') {
      ;(sectionToOpen ? sectionToOpen : links[0]).click()
    }

    $.on($('.close', dialog), 'click', Settings.close)
    $.on(window, 'beforeunload', Settings.close)
    $.on(dialog, 'click', () => {
      // Do not close when the mouse ends up outside the modal when selecting text in an input.
      if (
        d.activeElement?.tagName === 'INPUT' ||
        d.activeElement?.tagName === 'TEXTAREA'
      ) {
        return
      }
      Settings.close()
    })
    $.on(dialog.firstElementChild, 'click', e => e.stopPropagation())

    $.add(d.body, dialog)

    return $.event('OpenSettings', null, dialog)
  },

  close() {
    if (!Settings.dialog) {
      return
    }
    $.off(window, 'beforeunload', Settings.close)
    $.off(Settings.dialog, 'click', Settings.close)
    $.off($('.close', Settings.dialog), 'click', Settings.close)
    $.off($('.export', Settings.dialog), 'click', Settings.export)
    $.off($('.import', Settings.dialog), 'click', Settings.import)
    $.off($('.reset', Settings.dialog), 'click', Settings.reset)
    $.off($('input', Settings.dialog), 'change', Settings.onImport)
    $.rm(Settings.dialog)
    Settings.dialog = null
    return $.event('CloseSettings', null)
  },

  sections: [],

  addSection(
    title: string | { detail: { title: string; open: boolean } },
    open: boolean
  ): number {
    if (typeof title !== 'string') {
      ;({ title, open } = title.detail)
    }
    const hyphenatedTitle = title.toLowerCase().replace(/\s+/g, '-')
    return Settings.sections.push({ title, hyphenatedTitle, open })
  },

  openSection() {
    let selected: HTMLElement
    if ((selected = $('.tab-selected', Settings.dialog))) {
      $.rmClass(selected, 'tab-selected')
    }
    $.addClass(
      $(`.tab-${this.hyphenatedTitle}`, Settings.dialog),
      'tab-selected'
    )
    const section = $('section', Settings.dialog)
    $.rmAll(section)
    section.className = `section-${this.hyphenatedTitle}`
    this.open(section, g)
    section.scrollTop = 0
    return $.event('OpenSettings', null, section)
  },

  warnings: {
    localStorage(cb: (arg0: HTMLElement) => any) {
      if ($.cantSync) {
        const why = $.cantSet
          ? 'save your settings'
          : 'synchronize settings between tabs'
        return cb(
          $.el('li', {
            textContent: `\
${meta.name} needs local storage to ${why}.
Enable it on boards.${
              location.hostname.split('.')[1]
            }.org in your browser's privacy settings (may be listed as part of "local data" or "cookies").\
`,
          })
        )
      }
    },
    ads(cb: { (item: any): Notice; (arg0: HTMLElement): void }) {
      return $.onExists(doc, '.adg-rects > .desktop', ad =>
        $.onExists(ad, 'iframe', function () {
          const url = Redirect.to('thread', { boardID: 'qa', threadID: 362590 })
          return cb(
            $.el(
              'li',
              <>
                To protect yourself from{' '}
                <a href={url} target="_blank">
                  malicious ads
                </a>
                , you should{' '}
                <a
                  href="https://github.com/gorhill/uBlock#ublock-origin"
                  target="_blank"
                >
                  block ads
                </a>{' '}
                on 4chan.
              </>
            )
          )
        })
      )
    },
  },

  main(section: HTMLElement) {
    let key: string
    const warnings = $.el(
      'fieldset',
      { hidden: true },
      { innerHTML: '<legend>Warnings</legend><ul></ul>' }
    )
    const addWarning = function (item: any) {
      $.add($('ul', warnings), item)
      return (warnings.hidden = false)
    }
    for (key in Settings.warnings) {
      const warning = Settings.warnings[key]
      warning(addWarning)
    }
    $.add(section, warnings)

    const items = dict()
    const inputs = dict()
    const addCheckboxes = function (
      root: HTMLElement,
      obj: {
        [x: string]: any
        'Index Mode'?: string
        'Previous Index Mode'?: string
        'Index Size'?: string
        'Show Replies'?: (string | boolean)[]
        'Catalog Hover Expand'?: (string | boolean)[]
        'Catalog Hover Toggle'?: (string | boolean)[]
        'Pin Watched Threads'?: (string | boolean)[]
        'Anchor Hidden Threads'?: (string | boolean)[]
        'Refreshed Navigation'?: (string | boolean)[]
      }
    ) {
      const containers = [root]
      return (() => {
        const result = []
        for (key in obj) {
          const arr = obj[key]
          if (arr instanceof Array) {
            const description = arr[1]
            const div = $.el('div', {
              innerHTML: `<label><input type="checkbox" name="${key}">${key}</label><span class="description">: ${description}</span>`,
            })
            div.dataset.name = key
            const input = $('input', div)
            $.on(input, 'change', $.cb.checked)
            $.on(input, 'change', function () {
              return (this.parentNode.parentNode.dataset.checked = this.checked)
            })
            items[key] = Conf[key]
            inputs[key] = input
            const level = arr[2] || 0
            if (containers.length <= level) {
              const container = $.el('div', { className: 'suboption-list' })
              $.add(
                containers[containers.length - 1].lastElementChild,
                container
              )
              containers[level] = container
            } else if (containers.length > level + 1) {
              containers.splice(level + 1, containers.length - (level + 1))
            }
            result.push($.add(containers[level], div))
          }
        }
        return result
      })()
    }

    for (const keyFS in Config.main) {
      const obj = Config.main[keyFS]
      const fs = $.el('fieldset', { innerHTML: `<legend>${keyFS}</legend>` })
      addCheckboxes(fs, obj)
      if (keyFS === 'Posting and Captchas') {
        $.add(
          fs,
          $.el('p', {
            innerHTML:
              'For more info on captcha options and issues, see the <a href="' +
              meta.captchaFAQ +
              '" target="_blank">captcha FAQ</a>.',
          })
        )
      }
      $.add(section, fs)
    }
    addCheckboxes(
      $('div[data-name="JSON Index"] > .suboption-list', section),
      Config.Index
    )

    // Unsupported options
    if ($.engine !== 'gecko') {
      $('div[data-name="Remember QR Size"]', section).hidden = true
    }
    if ($.perProtocolSettings || location.protocol !== 'https:') {
      $('div[data-name="Redirect to HTTPS"]', section).hidden = true
    }
    if (platform !== 'crx') {
      $('div[data-name="Work around CORB Bug"]', section).hidden = true
    }

    $.get(
      items,
      function (items: { [x: string]: any }) {
        for (key in items) {
          const val = items[key]
          inputs[key].checked = val
          inputs[key].parentNode.parentNode.dataset.checked = val
        }
      },
      true
    )

    const div = $.el('div', {
      innerHTML:
        '<button></button><span class="description">: Clear manually-hidden threads and posts on all boards. Reload the page to apply.',
    })
    const button = $('button', div)
    $.get(
      { hiddenThreads: dict(), hiddenPosts: dict() },
      function ({ hiddenThreads, hiddenPosts }) {
        let board: { [x: string]: any },
          ID: string,
          site: { boards: { [x: string]: any } },
          thread: {}
        let hiddenNum = 0
        for (ID in hiddenThreads) {
          site = hiddenThreads[ID]
          if (ID !== 'boards') {
            for (ID in site.boards) {
              board = site.boards[ID]
              hiddenNum += Object.keys(board).length
            }
          }
        }
        for (ID in hiddenThreads.boards) {
          board = hiddenThreads.boards[ID]
          hiddenNum += Object.keys(board).length
        }
        for (ID in hiddenPosts) {
          site = hiddenPosts[ID]
          if (ID !== 'boards') {
            for (ID in site.boards) {
              board = site.boards[ID]
              for (ID in board) {
                thread = board[ID]
                hiddenNum += Object.keys(thread).length
              }
            }
          }
        }
        for (ID in hiddenPosts.boards) {
          board = hiddenPosts.boards[ID]
          for (ID in board) {
            thread = board[ID]
            hiddenNum += Object.keys(thread).length
          }
        }
        return (button.textContent = `Hidden: ${hiddenNum}`)
      },
      true
    )
    $.on(button, 'click', function () {
      this.textContent = 'Hidden: 0'
      return $.get('hiddenThreads', dict(), function ({ hiddenThreads }) {
        if ($.hasStorage && g.SITE.software === 'yotsuba') {
          let boardID: any
          for (boardID in hiddenThreads['4chan.org']?.boards) {
            localStorage.removeItem(`4chan-hide-t-${boardID}`)
          }
          for (boardID in hiddenThreads.boards) {
            localStorage.removeItem(`4chan-hide-t-${boardID}`)
          }
        }
        return $.delete(['hiddenThreads', 'hiddenPosts'], function () {
          return window.location.reload()
        })
      })
    })
    return $.after($('input[name="Stubs"]', section).parentNode.parentNode, div)
  },

  export() {
    // Export the most recent data without overwriting the existing Conf object.
    const updatedConfig = { ...Conf } // Use object spread for cloning
    return $.get(
      updatedConfig,
      (config: { [x: string]: any }) => {
        // Remove the 'boardConfig' property to avoid exporting cached JSON data.
        delete config['boardConfig']

        return Settings.downloadExport({
          version: g.VERSION,
          date: Date.now(),
          config: config,
        })
      },
      true
    )
  },

  downloadExport(data: { version: string; date: number; config: any }) {
    // Create a blob from the JSON stringified data
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    })

    // Create a download URL for the blob
    const url = URL.createObjectURL(blob)

    // Create a download link element
    const downloadLink = $.el('a', {
      download: `${meta.name} v${data.version}-${data.date}.json`,
      href: url,
    })

    // Append the download link to the dialog and trigger download
    const exportResultContainer = $('.imp-exp-result', Settings.dialog)
    $.rmAll(exportResultContainer) // Clear previous results
    $.add(exportResultContainer, downloadLink)

    return downloadLink.click() // Trigger download
  },

  import() {
    return $('input[type=file]', this.parentNode).click()
  },

  onImport() {
    let file: Blob
    if (!(file = this.files[0])) {
      return
    }
    this.value = null
    const output = $('.imp-exp-result')
    if (
      !confirm(
        'Your current settings will be entirely overwritten, are you sure?'
      )
    ) {
      output.textContent = 'Import aborted.'
      return
    }

    const reader = new FileReader()
    reader.onload = function (e) {
      try {
        return Settings.loadSettings(
          dict.json(e.target.result as string),
          function (err: any) {
            if (err) {
              return (output.textContent = 'Import failed due to an error.')
            } else if (confirm('Import successful. Reload now?')) {
              return window.location.reload()
            }
          }
        )
      } catch (error) {
        const err = error
        output.textContent = 'Import failed due to an error.'
        return c.error(err.stack)
      }
    }
    return reader.readAsText(file)
  },

  convertFrom: {
    loadletter(data: {
      Conf: { [x: string]: any; sauces: string }
      WatchedThreads: any[]
    }) {
      const convertSettings = function (
        data: any,
        map: { [key: string]: string }
      ) {
        for (const prevKey in map) {
          const newKey = map[prevKey]
          if (newKey) {
            data.Conf[newKey] = data.Conf[prevKey]
          }
          delete data.Conf[prevKey]
        }
        return data
      }
      data = convertSettings(data, {
        // General confs
        "Disable 4chan's extension": 'Disable Native Extension',
        'Comment Auto-Expansion': '',
        'Remove Slug': '',
        'Always HTTPS': 'Redirect to HTTPS',
        'Check for Updates': '',
        'Recursive Filtering': 'Recursive Hiding',
        'Reply Hiding': 'Reply Hiding Buttons',
        'Thread Hiding': 'Thread Hiding Buttons',
        'Show Stubs': 'Stubs',
        'Image Auto-Gif': 'Replace GIF',
        'Expand All WebM': 'Expand videos',
        'Reveal Spoilers': 'Reveal Spoiler Thumbnails',
        'Expand From Current': 'Expand from here',
        'Current Page': 'Page Count in Stats',
        'Current Page Position': '',
        'Alternative captcha': 'Use Recaptcha v1',
        'Alt index captcha': 'Use Recaptcha v1 on Index',
        'Auto Submit': 'Post on Captcha Completion',
        'Open Reply in New Tab': 'Open Post in New Tab',
        'Remember QR size': 'Remember QR Size',
        'Remember Subject': '',
        'Quote Inline': 'Quote Inlining',
        'Quote Preview': 'Quote Previewing',
        'Indicate OP quote': 'Mark OP Quotes',
        'Indicate You quote': 'Mark Quotes of You',
        'Indicate Cross-thread Quotes': 'Mark Cross-thread Quotes',
        // filter
        'uniqueid': 'uniqueID',
        'mod': 'capcode',
        'email': '',
        'country': 'flag',
        'md5': 'MD5',
        // keybinds
        'openEmptyQR': 'Open empty QR',
        'openQR': 'Open QR',
        'openOptions': 'Open settings',
        'close': 'Close',
        'spoiler': 'Spoiler tags',
        'sageru': 'Toggle sage',
        'code': 'Code tags',
        'sjis': 'SJIS tags',
        'submit': 'Submit QR',
        'watch': 'Watch',
        'update': 'Update',
        'unreadCountTo0': '',
        'expandAllImages': 'Expand images',
        'expandImage': 'Expand image',
        'zero': 'Front page',
        'nextPage': 'Next page',
        'previousPage': 'Previous page',
        'nextThread': 'Next thread',
        'previousThread': 'Previous thread',
        'expandThread': 'Expand thread',
        'openThreadTab': 'Open thread',
        'openThread': 'Open thread tab',
        'nextReply': 'Next reply',
        'previousReply': 'Previous reply',
        'hide': 'Hide',
        // updater
        'Scrolling': 'Auto Scroll',
        'Verbose': '',
      })
      if ('Always CDN' in data.Conf) {
        data.Conf['fourchanImageHost'] = data.Conf['Always CDN']
          ? 'i.4cdn.org'
          : ''
        delete data.Conf['Always CDN']
      }
      data.Conf.sauces = data.Conf.sauces.replace(/\$\d/g, function (c: any) {
        switch (c) {
          case '$1':
            return '%TURL'
          case '$2':
            return '%URL'
          case '$3':
            return '%MD5'
          case '$4':
            return '%board'
          default:
            return c
        }
      })
      for (const key in Config.hotkeys) {
        const hotkey = Config.hotkeys[key]
        if (hotkey) {
          data.Conf[key] = hotkey
        }
      }
      if (data.WatchedThreads) {
        data.WatchedThreads = data.WatchedThreads.map(function (thread: {
          boardID: any
          board: any
        }) {
          thread.boardID = thread.board
          delete thread.board
          return thread
        })
      }
      return data
    },
  },

  upgrade(data, version: string | string[]) {
    let corrupted: boolean, key: string, val: string
    const changes = dict()
    const set = (key: string, value: string | boolean) =>
      (data[key] = changes[key] = value)
    const setD = function (key: string, value: boolean) {
      if (data[key] == null) {
        return set(key, value)
      }
    }
    const addSauces = function (sauces: any[]) {
      if (data['sauces'] != null) {
        sauces = sauces.filter(
          (s: string) => data['sauces'].indexOf(s.match(/[^#;\s]+|$/)[0]) < 0
        )
        if (sauces.length) {
          return set('sauces', data['sauces'] + '\n\n' + sauces.join('\n'))
        }
      }
    }
    const addCSS = function (css: string) {
      if (data['usercss'] == null) {
        set('usercss', Config['usercss'])
      }
      if (data['usercss'].indexOf(css) < 0) {
        return set('usercss', css + '\n\n' + data['usercss'])
      }
    }
    // XXX https://github.com/greasemonkey/greasemonkey/issues/2600
    if ((corrupted = version[0] === '"')) {
      try {
        version = JSON.parse(version as string)
      } catch (error) {}
    }
    const compareString = version
      .replace(/^XT /i, '')
      .replace(/\d+/g, (x: string) => x.padStart(5, '0'))
    if (compareString < '00001.00013.00014.00008') {
      for (key in data) {
        val = data[key]
        if (
          typeof val === 'string' &&
          typeof Conf[key] !== 'string' &&
          ![
            'Index Sort',
            'Last Long Reply Thresholds 0',
            'Last Long Reply Thresholds 1',
          ].includes(key)
        ) {
          corrupted = true
          break
        }
      }
    }
    if (corrupted) {
      for (key in data) {
        val = data[key]
        if (typeof val === 'string') {
          try {
            const val2 = JSON.parse(val)
            set(key, val2)
          } catch (error1) {}
        }
      }
    }
    if (compareString < '00001.00011.00008.00000') {
      if (data['Fixed Thread Watcher'] == null) {
        set('Fixed Thread Watcher', data['Toggleable Thread Watcher'] ?? true)
      }
      if (data['Exempt Archives from Encryption'] == null) {
        set(
          'Exempt Archives from Encryption',
          data['Except Archives from Encryption'] ?? false
        )
      }
    }
    if (compareString < '00001.00011.00010.00001') {
      if (data['selectedArchives'] != null) {
        const uids = {
          'Moe': 0,
          '4plebs Archive': 3,
          'Nyafuu Archive': 4,
          'Love is Over': 5,
          'Rebecca Black Tech': 8,
          'warosu': 10,
          'fgts': 15,
          'not4plebs': 22,
          'DesuStorage': 23,
          'fireden.net': 24,
          'disabled': null,
        }
        for (const boardID in data['selectedArchives']) {
          const record = data['selectedArchives'][boardID]
          for (const type in record) {
            const name = record[type]
            if ($.hasOwn(uids, name)) {
              record[type] = uids[name]
            }
          }
        }
        set('selectedArchives', data['selectedArchives'])
      }
    }
    if (compareString < '00001.00011.00016.00000') {
      let rice: string
      if (
        (rice = Config['usercss'].match(
          /\/\* Board title rice \*\/(?:\n.+)*/
        )[0])
      ) {
        if (data['usercss'] != null && data['usercss'].indexOf(rice) < 0) {
          set('usercss', rice + '\n\n' + data['usercss'])
        }
      }
    }
    if (compareString < '00001.00011.00017.00000') {
      for (key of [
        'Persistent QR',
        'Color User IDs',
        'Fappe Tyme',
        'Werk Tyme',
        'Highlight Posts Quoting You',
        'Highlight Own Posts',
      ]) {
        if (data[key] === null) {
          set(key, key === 'Persistent QR')
        }
      }
    }
    if (compareString < '00001.00011.00017.00006') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces'].replace(
            /^(#?\s*)http:\/\/iqdb\.org\//gm,
            '$1//iqdb.org/'
          )
        )
      }
    }
    if (compareString < '00001.00011.00019.00003' && !Settings.dialog) {
      $.queueTask(() =>
        Settings.warnings.ads(
          (item: string | Node) => new Notice('Warning', item)
        )
      )
    }
    if (compareString < '00001.00011.00020.00003') {
      const object = {
        'Inline Cross-thread Quotes Only': false,
        'Pass Link': true,
      }
      for (key in object) {
        const value = object[key]
        if (data[key] == null) {
          set(key, value)
        }
      }
    }
    if (compareString < '00001.00011.00021.00003') {
      if (data['Remember Your Posts'] == null) {
        set('Remember Your Posts', data['Mark Quotes of You'] ?? true)
      }
    }
    if (compareString < '00001.00011.00022.00000') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces'].replace(
            /^(#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(?:IMG|URL))%3Fs\.jpg/gm,
            '$1'
          )
        )
        set(
          'sauces',
          data['sauces'].replace(
            /^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(?:IMG|T?URL)(?=$|;)/gm,
            '$&&safe=off'
          )
        )
      }
    }
    if (compareString < '00001.00011.00022.00002') {
      if (
        data['Use Recaptcha v1 in Reports'] == null &&
        data['Use Recaptcha v1'] &&
        !data['Use Recaptcha v2 in Reports']
      ) {
        set('Use Recaptcha v1 in Reports', true)
      }
    }
    if (compareString < '00001.00011.00024.00000') {
      if (data['JSON Navigation'] != null && data['JSON Index'] == null) {
        set('JSON Index', data['JSON Navigation'])
      }
    }
    if (compareString < '00001.00011.00026.00000') {
      if (data['Oekaki Links'] != null && data['Edit Link'] == null) {
        set('Edit Link', data['Oekaki Links'])
      }
      if (data['Inline Cross-thread Quotes Only'] == null) {
        set('Inline Cross-thread Quotes Only', true)
      }
    }
    if (compareString < '00001.00011.00030.00000') {
      if (data['Quote Threading'] && data['Thread Quotes'] == null) {
        set('Thread Quotes', true)
      }
    }
    if (compareString < '00001.00011.00032.00000') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces'].replace(
            /^(#?\s*)http:\/\/3d\.iqdb\.org\//gm,
            '$1//3d.iqdb.org/'
          )
        )
      }
      addSauces([
        '#https://desustorage.org/_/search/image/%sMD5/',
        '#https://boards.fireden.net/_/search/image/%sMD5/',
        '#https://foolz.fireden.net/_/search/image/%sMD5/',
        '#//www.gif-explode.com/%URL;types:gif',
      ])
    }
    if (compareString < '00001.00011.00035.00000') {
      addSauces(['https://whatanime.ga/?auto&url=%IMG;text:wait'])
    }
    if (compareString < '00001.00012.00000.00000') {
      if (data['Exempt Archives from Encryption'] == null) {
        set('Exempt Archives from Encryption', false)
      }
      if (data['Show New Thread Option in Threads'] == null) {
        set('Show New Thread Option in Threads', false)
      }
      if (data['Show Name and Subject']) {
        addCSS('#qr .persona .field {display: block !important;}')
      }
      if (data['QR Shortcut'] === false) {
        addCSS('#shortcut-qr {display: none;}')
      }
      if (data['Bottom QR Link'] === false) {
        addCSS('.qr-link-container-bottom {display: none;}')
      }
    }
    if (compareString < '00001.00012.00000.00006') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces'].replace(
            /^(#?\s*)https:\/\/(?:desustorage|cuckchan)\.org\//gm,
            '$1https://desuarchive.org/'
          )
        )
      }
    }
    if (compareString < '00001.00012.00001.00000') {
      if (
        data['Persistent Thread Watcher'] == null &&
        data['Toggleable Thread Watcher'] !== null
      ) {
        set('Persistent Thread Watcher', !data['Toggleable Thread Watcher'])
      }
    }
    if (compareString < '00001.00012.00003.00000') {
      for (key of [
        'Image Hover in Catalog',
        'Auto Watch',
        'Auto Watch Reply',
      ]) {
        setD(key, false)
      }
    }
    if (compareString < '00001.00013.00001.00002') {
      addSauces([
        '#//www.bing.com/images/search?q=imgurl:%IMG&view=detailv2&iss=sbi#enterInsights',
      ])
    }
    if (compareString < '00001.00013.00005.00000') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces'].replace(
            /^(#?\s*)http:\/\/regex\.info\/exif\.cgi/gm,
            '$1http://exif.regex.info/exif.cgi'
          )
        )
      }
      addSauces(
        Config['sauces']
          .match(/# Known filename formats:(?:\n.+)*|$/)[0]
          .split('\n')
      )
    }
    if (compareString < '00001.00013.00007.00002') {
      setD('Require OP Quote Link', true)
    }
    if (compareString < '00001.00013.00008.00000') {
      setD('Download Link', true)
    }
    if (compareString < '00001.00013.00009.00003') {
      if (data['jsWhitelist'] != null) {
        const list = data['jsWhitelist'].split('\n')
        if (
          !list.includes('https://cdnjs.cloudflare.com') &&
          list.includes('https://cdn.mathjax.org')
        ) {
          set(
            'jsWhitelist',
            data['jsWhitelist'] + '\n\nhttps://cdnjs.cloudflare.com'
          )
        }
      }
    }
    if (compareString < '00001.00014.00000.00006') {
      if (data['siteSoftware'] != null) {
        set('siteSoftware', data['siteSoftware'] + '\n4cdn.org yotsuba')
      }
    }
    if (compareString < '00001.00014.00003.00002') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces'].replace(
            /^(#?\s*)https:\/\/whatanime\.ga\//gm,
            '$1https://trace.moe/'
          )
        )
      }
    }
    if (compareString < '00001.00014.00004.00004') {
      if (
        data['siteSoftware'] != null &&
        !/^4channel\.org yotsuba$/m.test(data['siteSoftware'])
      ) {
        set('siteSoftware', data['siteSoftware'] + '\n4channel.org yotsuba')
      }
    }
    if (compareString < '00001.00014.00005.00000') {
      for (const db of DataBoard.keys) {
        if (data[db]?.boards) {
          const { boards, lastChecked } = data[db]
          data[db]['4chan.org'] = { boards, lastChecked }
          delete data[db].boards
          delete data[db].lastChecked
          set(db, data[db])
        }
      }
      if (data['siteSoftware'] != null && data['siteProperties'] == null) {
        const siteProperties = dict()
        for (const line of data['siteSoftware'].split('\n')) {
          const [hostname, software] = line.split(' ')
          siteProperties[hostname] = { software }
        }
        set('siteProperties', siteProperties)
      }
    }
    if (compareString < '00001.00014.00006.00006') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces'].replace(
            /\/\/%\$1\.deviantart\.com\/gallery\/#\/d%\$2;regexp:\/\^\\w\+_by_\(\\w\+\)-d\(\[\\da-z\]\+\)\//g,
            '//www.deviantart.com/gallery/#/d%$1%$2;regexp:/^\\w+_by_\\w+[_-]d([\\da-z]{6})\\b|^d([\\da-z]{6})-[\\da-z]{8}-/'
          )
        )
      }
    }
    if (compareString < '00001.00014.00008.00000') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces'].replace(
            /https:\/\/www\.yandex\.com\/images\/search/g,
            'https://yandex.com/images/search'
          )
        )
      }
    }
    if (compareString < '00001.00014.00009.00000') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces'].replace(
            /^(#?\s*)(?:http:)?\/\/(www\.pixiv\.net|www\.deviantart\.com|imgur\.com|flickr\.com)\//gm,
            '$1https://$2/'
          )
        )
        set(
          'sauces',
          data['sauces'].replace(
            /https:\/\/yandex\.com\/images\/search\?rpt=imageview&img_url=%IMG/g,
            'https://yandex.com/images/search?rpt=imageview&url=%IMG'
          )
        )
      }
    }
    if (compareString < '00001.00014.00009.00001') {
      if (
        data['Use Faster Image Host'] != null &&
        data['fourchanImageHost'] == null
      ) {
        set(
          'fourchanImageHost',
          data['Use Faster Image Host'] ? 'i.4cdn.org' : ''
        )
      }
    }
    if (compareString < '00001.00014.00010.00001') {
      if (data['Filter in Native Catalog'] == null) {
        set('Filter in Native Catalog', false)
      }
    }
    if (compareString < '00001.00014.00012.00008') {
      if (data['boardnav'] == null) {
        set(
          'boardnav',
          `\
[ toggle-all ]
a-replace
c-replace
g-replace
k-replace
v-replace
vg-replace
vr-replace
ck-replace
co-replace
fit-replace
jp-replace
mu-replace
sp-replace
tv-replace
vp-replace
[external-text:"FAQ","${meta.faq}"]\
`
        )
      }
    }
    if (compareString < '00001.00014.00016.00001') {
      if (data['archiveLists'] != null) {
        set(
          'archiveLists',
          data['archiveLists'].replace(
            'https://mayhemydg.github.io/archives.json/archives.json',
            'https://nstepien.github.io/archives.json/archives.json'
          )
        )
      }
    }
    if (compareString < '00001.00014.00016.00007') {
      if (data['sauces'] != null) {
        set(
          'sauces',
          data['sauces']
            .replace(
              /https:\/\/www\.deviantart\.com\/gallery\/#\/d%\$1%\$2;regexp:\/\^\\w\+_by_\\w\+\[_-\]d\(\[\\da-z\]\{6\}\)\\b\|\^d\(\[\\da-z\]\{6\}\)-\[\\da-z\]\{8\}-\//g,
              'javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/'
            )
            .replace(/\/\/imgops\.com\/%URL/g, '//imgops.com/start?url=%URL')
        )
      }
    }
    if (compareString < '00001.00014.00017.00002') {
      if (data['jsWhitelist'] != null) {
        set(
          'jsWhitelist',
          data['jsWhitelist'] +
            '\n\nhttps://hcaptcha.com\nhttps://*.hcaptcha.com'
        )
      }
    }
    if (compareString < '00001.00014.00020.00004') {
      if (data['archiveLists'] != null) {
        set(
          'archiveLists',
          data['archiveLists'].replace(
            'https://nstepien.github.io/archives.json/archives.json',
            'https://4chenz.github.io/archives.json/archives.json'
          )
        )
      }
    }
    if (compareString < '00001.00014.00022.00003') {
      if (data['sauces']) {
        set(
          'sauces',
          data['sauces'].replace(
            /^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(IMG|T?URL)&safe=off(?=$|;)/gm,
            'https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off'
          )
        )
        if (
          compareString === '00001.00014.00022.00002' &&
          !/\bsbisrc=/.test(data['sauces'])
        ) {
          set(
            'sauces',
            data['sauces'].replace(
              /^#?\s*https:\/\/lens\.google\.com\/uploadbyurl\?url=%(IMG|T?URL)(?=$|;)/m,
              'https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off'
            )
          )
        }
      }
    }
    return changes
  },

  loadSettings(
    data: any,
    cb: {
      (err: any): void | 'Import failed due to an error.'
      (arg0: null): any
    }
  ) {
    if (data.version.split('.')[0] === '2') {
      // https://github.com/loadletter/4chan-x
      data = Settings.convertFrom.loadletter(data)
    } else if (data.version !== g.VERSION) {
      Settings.upgrade(data.Conf, data.version)
    }
    return $.clear(function (err: any) {
      if (err) {
        return cb(err)
      }
      return $.set(
        data.Conf,
        function (err: any) {
          if (err) {
            return cb(err)
          }
          return $.set(
            data,
            function (err: any) {
              if (err) {
                return cb(err)
              }
              return cb(null)
            },
            true
          )
        },
        true
      )
    })
  },

  reset() {
    if (
      confirm('Your current settings will be entirely wiped, are you sure?')
    ) {
      return $.clear(function (err: any) {
        if (err) {
          return ($('.imp-exp-result').textContent =
            'Import failed due to an error.')
        } else if (confirm('Reset successful. Reload now?')) {
          return window.location.reload()
        }
      })
    }
  },

  filter(section: HTMLElement) {
    $.extend(section, { innerHTML: FilterSelectPage })
    const select = $('select', section)
    $.on(select, 'change', Settings.selectFilter)
    return Settings.selectFilter.call(select)
  },

  selectFilter() {
    let name: string | number
    const div = this.nextElementSibling as HTMLDivElement
    if ((name = this.value) !== 'guide') {
      if (!$.hasOwn(Config.filter, name)) {
        return
      }
      $.rmAll(div)
      const ta = $.el('textarea', {
        name,
        className: 'field',
        spellcheck: false,
      }) as HTMLTextAreaElement
      $.on(ta, 'change', $.cb.value)
      $.get(name, Conf[name], function (item: { [x: string]: string }) {
        ta.value = item[name]
        return $.add(div, ta)
      })
      return
    }
    const filterTypes = Object.keys(Config.filter)
      .filter(x => x !== 'general')
      .map((x, i) => ({
        innerHTML: (i ? ',' : '') + `<wbr>${E(x)}`,
      }))
    return $.add(div, $.el('p', { innerHTML: 'Filters: ' }, ...filterTypes))
  },

  sauce(section: HTMLElement) {
    $.extend(section, { innerHTML: SaucePage })
    $('.warning', section).hidden = Conf['Sauce']
    const ta = $('textarea', section) as HTMLTextAreaElement
    $.get('sauces', Conf['sauces'], function (item: { [x: string]: string }) {
      ta.value = item['sauces']
      return (ta.hidden = false)
    }) // XXX prevent Firefox from adding initialization to undo queue
    return $.on(ta, 'change', $.cb.value)
  },

  advanced(section: HTMLElement) {
    let input: {
        [x: string]: any
        name?: any
        nodeName?: any
        type?: any
        hidden?: any
        addEventListener?: (
          arg0: string,
          arg1: EventListenerOrEventListenerObject,
          arg2: boolean
        ) => void
      },
      name: string
    $.extend(section, { innerHTML: AdvancedPage })
    for (const warning of $$('.warning', section)) {
      warning.hidden = Conf[warning.dataset.feature]
    }

    const inputs = dict()
    for (input of $$('[name]', section)) {
      inputs[input.name] = input
    }

    $.on(inputs['archiveLists'], 'change', function () {
      $.set('lastarchivecheck', 0, function () {
        return Settings.addArchiveTable(section)
      })
      Conf['lastarchivecheck'] = 0
      return ($.id('lastarchivecheck').textContent = 'never')
    })

    const items = dict()
    for (name in inputs) {
      input = inputs[name]
      if (!['Interval', 'Custom CSS'].includes(name)) {
        items[name] = Conf[name]
        const event =
          input.nodeName === 'SELECT' ||
          ['checkbox', 'radio'].includes(input.type) ||
          (input.nodeName === 'TEXTAREA' && !(name in Settings))
            ? 'change'
            : 'input'
        $.on(
          input,
          event,
          $.cb[input.type === 'checkbox' ? 'checked' : 'value']
        )
        if (name in Settings) {
          $.on(input, event, Settings[name])
        }
      }
    }

    $.get(
      items,
      function (items: { [x: string]: any }) {
        for (const key in items) {
          const val = items[key]
          input = inputs[key]
          input[input.type === 'checkbox' ? 'checked' : 'value'] = val
          input.hidden = false // XXX prevent Firefox from adding initialization to undo queue
          if (key in Settings) {
            Settings[key].call(input)
          }
        }
      },
      true
    )

    const listImageHost = $.id('list-fourchanImageHost')
    for (const textContent of ImageHost.suggestions) {
      $.add(listImageHost, $.el('option', { textContent }))
    }

    const interval = inputs['Interval']
    const customCSS = inputs['Custom CSS']
    const applyCSS = $('#apply-css', section) as HTMLButtonElement

    interval.value = Conf['Interval']
    customCSS.checked = Conf['Custom CSS']
    inputs['usercss'].disabled = !Conf['Custom CSS']
    applyCSS.disabled = !Conf['Custom CSS']

    $.on(interval, 'change', ThreadUpdater.cb.interval)
    $.on(customCSS, 'change', Settings.togglecss)
    $.on(applyCSS, 'click', () => CustomCSS.update())

    const itemsArchive = dict()
    for (name of ['archives', 'selectedArchives', 'lastarchivecheck']) {
      itemsArchive[name] = Conf[name]
    }
    $.get(
      itemsArchive,
      function (itemsArchive: { [x: string]: any }) {
        $.extend(Conf, itemsArchive)
        Redirect.selectArchives()
        return Settings.addArchiveTable(section)
      },
      true
    )

    const boardSelect = $('#archive-board-select', section)
    const table = $('#archive-table', section)
    const updateArchives = $('#update-archives', section)

    $.on(boardSelect, 'change', function () {
      $('tbody > :not([hidden])', table).hidden = true
      return ($(`tbody > .${this.value}`, table).hidden = false)
    })

    return $.on(updateArchives, 'click', () =>
      Redirect.update(() => Settings.addArchiveTable(section))
    )
  },

  addArchiveTable(section: HTMLElement) {
    let boardID: string, o: { thread: any[][]; post: any[][]; file: any[][] }
    $('#lastarchivecheck', section).textContent =
      Conf['lastarchivecheck'] === 0
        ? 'never'
        : new Date(Conf['lastarchivecheck']).toLocaleString()

    const boardSelect = $('#archive-board-select', section) as HTMLSelectElement
    const table = $('#archive-table', section) as HTMLTableElement
    const tbody = $('tbody', section) as HTMLTableSectionElement

    $.rmAll(boardSelect)
    $.rmAll(tbody)

    const archBoards = dict()
    for (const { uid, name, boards, files, software } of Conf['archives']) {
      if (!['fuuka', 'foolfuuka'].includes(software)) {
        continue
      }
      for (boardID of boards) {
        o =
          archBoards[boardID] ||
          (archBoards[boardID] = {
            thread: [],
            post: [],
            file: [],
          })
        const archive = [uid ?? name, name]
        o.thread.push(archive)
        if (software === 'foolfuuka') {
          o.post.push(archive)
        }
        if (files.includes(boardID)) {
          o.file.push(archive)
        }
      }
    }

    const rows = []
    const boardOptions = []
    for (boardID of Object.keys(archBoards).sort()) {
      // Alphabetical order
      const row = $.el('tr', { className: `board-${boardID}` })
      row.hidden = boardID !== g.BOARD.ID

      boardOptions.push(
        $.el('option', {
          textContent: `/${boardID}/`,
          value: `board-${boardID}`,
          selected: boardID === g.BOARD.ID,
        })
      )

      o = archBoards[boardID]
      for (const item of ['thread', 'post', 'file']) {
        $.add(row, Settings.addArchiveCell(boardID, o, item))
      }
      rows.push(row)
    }

    if (rows.length === 0) {
      boardSelect.hidden = table.hidden = true
      return
    }

    boardSelect.hidden = table.hidden = false

    if (!(g.BOARD.ID in archBoards)) {
      rows[0].hidden = false
    }

    $.add(boardSelect, boardOptions)
    $.add(tbody, rows)

    for (boardID in Conf['selectedArchives']) {
      const data = Conf['selectedArchives'][boardID]
      for (const type in data) {
        let select: HTMLElement
        const id = data[type]
        if (
          (select = $(
            `select[data-boardid='${boardID}'][data-type='${type}']`,
            tbody
          ))
        ) {
          select.value = JSON.stringify(id)
          if (!select.value) {
            select.value = select.firstChild.value
          }
        }
      }
    }
  },

  addArchiveCell(boardID: string, data: { [x: string]: any[] }, type: string) {
    const { length } = data[type]
    const td = $.el('td', { className: 'archive-cell' })

    if (!length) {
      td.textContent = '--'
      return td
    }

    const options = []
    let i = 0
    while (i < length) {
      const archive = data[type][i++]
      options.push(
        $.el('option', {
          value: JSON.stringify(archive[0]),
          textContent: archive[1],
        })
      )
    }

    $.extend(td, { innerHTML: '<select></select>' })
    const select = td.firstElementChild as HTMLSelectElement
    if (!(select.disabled = length === 1)) {
      // XXX GM can't into datasets
      select.setAttribute('data-boardid', boardID)
      select.setAttribute('data-type', type)
      $.on(select, 'change', Settings.saveSelectedArchive)
    }
    $.add(select, options)

    return td
  },

  saveSelectedArchive() {
    return $.get(
      'selectedArchives',
      Conf['selectedArchives'],
      ({ selectedArchives }) => {
        ;(selectedArchives[this.dataset.boardid] ||
          (selectedArchives[this.dataset.boardid] = dict()))[
          this.dataset.type
        ] = JSON.parse(this.value)
        $.set('selectedArchives', selectedArchives, () =>
          Settings.addArchiveTable(Settings.dialog)
        )
        Conf['selectedArchives'] = selectedArchives
        return Redirect.selectArchives()
      }
    )
  },

  boardnav() {
    return Header.generateBoardList(this.value)
  },

  time() {
    return (this.nextElementSibling.textContent = Time.format(
      this.value,
      new Date()
    ))
  },

  timeLocale() {
    return Settings.time.call($('[name=time]', Settings.dialog))
  },

  backlink() {
    return (this.nextElementSibling.textContent = this.value.replace(
      /%(?:id|%)/g,
      (x: string | number) => ({ '%id': '123456789', '%%': '%' })[x]
    ))
  },

  fileInfo() {
    const data = {
      isReply: true,
      file: {
        url: `//${ImageHost.host()}/g/1334437723720.jpg`,
        name: 'd9bb2efc98dd0df141a94399ff5880b7.jpg',
        size: '276 KB',
        sizeInBytes: 276 * 1024,
        dimensions: '1280x720',
        isImage: true,
        isVideo: false,
        isSpoiler: true,
        tag: 'Loop',
      },
    }
    return FileInfo.format(this.value, data, this.nextElementSibling)
  },

  favicon() {
    Favicon.switch()
    if (g.VIEW === 'thread' && Conf['Unread Favicon']) {
      Unread.update()
    }
    const img = this.nextElementSibling.children
    const f = Favicon
    const iterable = [
      f.SFW,
      f.unreadSFW,
      f.unreadSFWY,
      f.NSFW,
      f.unreadNSFW,
      f.unreadNSFWY,
      f.dead,
      f.unreadDead,
      f.unreadDeadY,
    ]
    for (let i = 0; i < iterable.length; i++) {
      const icon = iterable[i]
      if (!img[i]) {
        $.add(this.nextElementSibling, $.el('img'))
      }
      img[i].src = icon
    }
  },

  togglecss() {
    if (
      (
        $(
          'textarea[name=usercss]',
          $.x('ancestor::fieldset[1]', this)
        ) as HTMLTextAreaElement
      ).disabled
    ) {
      CustomCSS.rmStyle()
    } else {
      CustomCSS.addStyle()
    }
    return $.cb.checked.call(this)
  },

  keybinds(section: HTMLElement) {
    let key: string
    $.extend(section, { innerHTML: KeybindsPage })
    $('.warning', section).hidden = Conf['Keybinds']

    const tbody = $('tbody', section)
    const items = dict()
    const inputs = dict()
    for (key in Config.hotkeys) {
      const arr = Config.hotkeys[key]
      const tr = $.el('tr', {
        innerHTML: `<td>${arr[1]}</td><td><input class="field"></td>`,
      })
      const input = $('input', tr) as HTMLInputElement
      input.name = key
      input.spellcheck = false
      items[key] = Conf[key]
      inputs[key] = input
      $.on(input, 'keydown', Settings.keybind)
      $.add(tbody, tr)
    }

    return $.get(
      items,
      function (items: { [x: string]: any }) {
        for (key in items) {
          const val = items[key]
          inputs[key].value = val
        }
      },
      true
    )
  },

  keybind(e: {
    keyCode: number
    preventDefault: () => void
    stopPropagation: () => void
  }) {
    let key: string
    if (e.keyCode === 9) {
      return
    } // tab
    e.preventDefault()
    e.stopPropagation()
    if ((key = Keybinds.keyCode(e)) == null) {
      return
    }
    this.value = key
    return $.cb.value.call(this)
  },
}
export default Settings
