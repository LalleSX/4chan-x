import Callbacks from '../classes/Callbacks'
import Header from '../General/Header'
import UI from '../General/UI'
import { g, Conf, doc } from '../globals/globals'
import $ from '../platform/$'
import { SECOND } from '../platform/helpers'
import ImageCommon from './ImageCommon'
import Volume from './Volume'

// ImageHover handles mouseover events for images and videos, providing hover previews.
const ImageHover = {
  // Initializes the ImageHover functionality based on configuration and context.
  init() {
    if (!['index', 'thread'].includes(g.VIEW)) {
      return
    }

    if (Conf['Image Hover']) {
      Callbacks.Post.push({ name: 'Image Hover', cb: this.node })
    }

    if (Conf['Image Hover in Catalog']) {
      Callbacks.CatalogThread.push({ name: 'Image Hover', cb: this.catalogNode })
    }
  },

  // Attaches mouseover handlers to image and video thumbnails.
  node() {
    return this.files
      .filter(file => (file.isImage || file.isVideo) && file.thumb)
      .map(file => $.on(file.thumb, 'mouseover', ImageHover.mouseover(this, file)))
  },

  // Handles mouseover events in catalog view.
  catalogNode() {
    const file = this.thread.OP.files[0]
    if (!file || (!file.isImage && !file.isVideo)) {
      return
    }
    return $.on(this.nodes.thumb, 'mouseover', ImageHover.mouseover(this.thread.OP, file))
  },

  // Returns a function that handles the mouseover event for a given post and file.
  mouseover(post, file) {
    return function(e) {
      let el, height, width
      if (!doc.contains(this)) {
        return
      }

      const { isVideo } = file
      if (file.isExpanding || file.isExpanded || g.SITE.isThumbExpanded?.(file)) {
        return
      }

      const error = ImageHover.error(post, file)
      el = ImageHover.prepareElement(file, post, error)

      ImageHover.applyVideoSettings(el, isVideo)
      ImageHover.applyDimensionStyles(el, file)

      return UI.hover({
        root: this,
        el,
        latestEvent: e,
        endEvents: 'mouseout click',
        height,
        width,
        noRemove: true,
        cb: ImageHover.hoverCallback(el, error)
      })
    }
  },

  // Prepares the hover element for display.
  prepareElement(file, post, error) {
    const el = ImageCommon.cache?.dataset.fileID === `${post.fullID}.${file.index}`
      ? ImageCommon.popCache()
      : $.el(file.isVideo ? 'video' : 'img')

    $.on(el, 'error', error)
    el.dataset.fileID = `${post.fullID}.${file.index}`
    el.src = file.url
    el.id = 'ihover'
    $.add(Header.hover, el)

    if (Conf['Restart when Opened']) {
      ImageCommon.rewind(el)
      ImageCommon.rewind(this)
    }

    return el
  },

  // Applies video specific settings.
  applyVideoSettings(el, isVideo) {
    if (isVideo) {
      el.loop = true
      el.controls = false
      Volume.setup(el)
      if (Conf['Autoplay']) {
        el.play()
      }
    }
  },

  // Applies CSS styles for dimensions.
  applyDimensionStyles(el, file) {
    if (file.dimensions) {
      const [width, height] = file.dimensions.split('x').map(x => +x)
      const maxWidth = doc.clientWidth
      const maxHeight = doc.clientHeight - UI.hover.padding
      const scale = Math.min(1, maxWidth / width, maxHeight / height)

      el.style.maxWidth = `${width * scale}px`
      el.style.maxHeight = `${height * scale}px`
    }
  },

  // Callback function for hover event.
  hoverCallback(el, error) {
    return function() {
      $.off(el, 'error', error)
      ImageCommon.pushCache(el)
      ImageCommon.pause(el)
      $.rm(el)
      el.removeAttribute('style')
    }
  },

  // Handles errors during hover.
  error(post, file) {
    return function() {
      if (ImageCommon.decodeError(this, file)) {
        return
      }
      return ImageCommon.error(this, post, file, 3 * SECOND, URL => {
        this.src = URL ? URL + (this.src === URL ? '?' + Date.now() : '') : ''
      })
    }
  }
}

export default ImageHover
