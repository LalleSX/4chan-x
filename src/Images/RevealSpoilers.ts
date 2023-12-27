import Callbacks from '../classes/Callbacks'
import { g, Conf } from '../globals/globals'

const RevealSpoilers = {
  init() {
    if (
      !['index', 'thread', 'archive'].includes(g.VIEW) ||
      !Conf['Reveal Spoiler Thumbnails']
    ) {
      return
    }

    return Callbacks.Post.push({
      name: 'Reveal Spoiler Thumbnails',
      cb: this.node,
    })
  },

  node() {
    if (this.isClone) {
      return
    }
    for (const file of this.files) {
      if (file.thumb && file.isSpoiler) {
        const { thumb } = file
        // Remove old width and height.
        thumb.removeAttribute('style')
        // Enforce thumbnail size if thumbnail is replaced.
        thumb.style.maxHeight = thumb.style.maxWidth = this.isReply
          ? '125px'
          : '250px'
        if (thumb.src) {
          thumb.src = file.thumbURL
        } else {
          thumb.dataset.src = file.thumbURL
        }
      }
    }
  },
}
export default RevealSpoilers