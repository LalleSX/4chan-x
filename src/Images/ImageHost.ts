import Callbacks from '../classes/Callbacks.js'
import { Conf, g } from '../globals/globals.js'
import $$ from '../platform/$$.js'

const ImageHost = {
  // Initialize the ImageHost
  init() {
    const isConfigured = /\S/.test(Conf['fourchanImageHost'])
    const isCorrectSoftware = g.SITE.software === 'yotsuba'
    const isCorrectView = ['index', 'thread'].includes(g.VIEW)

    if (
      !(this.useFaster = isConfigured) ||
      !isCorrectSoftware ||
      !isCorrectView
    ) {
      return
    }

    return Callbacks.Post.push({
      name: 'Image Host Rewriting',
      cb: this.node,
    })
  },

  // List of suggested image hosts
  suggestions: ['i.4cdn.org', 'is2.4chan.org'],

  // Get the primary image host
  host() {
    return Conf['fourchanImageHost'].trim() || 'i.4cdn.org'
  },

  // Get the flash image host
  flashHost() {
    return 'i.4cdn.org'
  },

  // Get the thumbnail image host
  thumbHost() {
    return 'i.4cdn.org'
  },

  // Test if the hostname matches the expected pattern
  test(hostname) {
    return hostname === 'i.4cdn.org' || ImageHost.regex.test(hostname)
  },

  // Regular expression for validating hostname
  regex: /^is\d*\.4chan(?:nel)?\.org$/,

  // Node processing for image host rewriting
  node() {
    if (this.isClone) {
      return
    }
    const host = ImageHost.host()
    if (
      this.file &&
      ImageHost.test(this.file.url.split('/')[2]) &&
      !/\.swf$/.test(this.file.url)
    ) {
      this.file.link.hostname = host
      if (this.file.thumbLink) {
        this.file.thumbLink.hostname = host
      }
      this.file.url = this.file.link.href
    }
    return ImageHost.fixLinks($$('a', this.nodes.comment))
  },

  // Fix links to use the correct image host
  fixLinks(links) {
    for (const link of links) {
      if (ImageHost.test(link.hostname) && !/\.swf$/.test(link.pathname)) {
        const host = ImageHost.host()
        if (link.hostname !== host) {
          link.hostname = host
        }
      }
    }
  },
}

export default ImageHost
