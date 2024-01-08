import Callbacks from '../classes/Callbacks.js'
import { g, Conf } from '../globals/globals.js'

const ThreadLinks = {
  init() {
    if (g.VIEW !== 'index' || !Conf['Open Threads in New Tab']) {
      return
    }

    Callbacks.Post.push({
      name: 'Thread Links',
      cb: this.node,
    })
    return Callbacks.CatalogThread.push({
      name: 'Thread Links',
      cb: this.catalogNode,
    })
  },

  node() {
    if (this.isReply || this.isClone) {
      return
    }
    return ThreadLinks.process(this.nodes.reply)
  },

  catalogNode() {
    return ThreadLinks.process(this.nodes.thumb.parentNode)
  },

  process(link: HTMLAnchorElement) {
    return (link.target = '_blank')
  },
}
export default ThreadLinks
