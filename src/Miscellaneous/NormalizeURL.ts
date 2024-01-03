import { Conf, g } from '../globals/globals.js'

/**
 * This module is responsible for normalizing URLs.
 */
const NormalizeURL = {
  /**
   * Initializes the URL normalization process.
   */
  init() {
    // Check if 'Normalize URL' configuration is enabled
    if (!Conf['Normalize URL']) {
      return
    }

    // Split the current pathname into segments
    let pathnameSegments = location.pathname.split(/\/+/)

    // Normalize URL for 'yotsuba' software
    if (g.SITE.software === 'yotsuba') {
      switch (g.VIEW) {
        case 'thread':
          // Set the third segment to 'thread' and keep only the first four segments
          pathnameSegments[2] = 'thread'
          pathnameSegments = pathnameSegments.slice(0, 4)
          break
        case 'index':
          // Keep only the first three segments for the index view
          pathnameSegments = pathnameSegments.slice(0, 3)
          break
      }
    }

    // Join the segments back into a pathname
    const normalizedPathname = pathnameSegments.join('/')

    // If the current pathname is different, update the URL
    if (location.pathname !== normalizedPathname) {
      const newUrl = `${location.protocol}//${location.host}${normalizedPathname}${location.hash}`
      history.replaceState(history.state, '', newUrl)
    }
  },
}

export default NormalizeURL
