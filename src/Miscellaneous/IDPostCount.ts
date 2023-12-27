import Callbacks from '../classes/Callbacks.js'
import Get from '../General/Get.js'
import { g, Conf } from '../globals/globals.js'
import $ from '../platform/$.js'

const IDPostCount = {
  init() {
    if (g.VIEW !== 'thread' || !Conf['Count Posts by ID']) {
      return
    }
    Callbacks.Thread.push({
      name: 'Count Posts by ID',
      cb() {
        return (IDPostCount.thread = this)
      },
    })
    return Callbacks.Post.push({
      name: 'Count Posts by ID',
      cb: this.node,
    })
  },

  node() {
    if (this.nodes.uniqueID && this.thread === IDPostCount.thread) {
      return $.on(this.nodes.uniqueID, 'mouseover', IDPostCount.count)
    }
  },

  count() {
    const { uniqueID } = Get.postFromNode(this).info
    let n = 0
    IDPostCount.thread.posts.forEach(function (post) {
      if (post.info.uniqueID === uniqueID) {
        return n++
      }
    })
    return (this.title = `${n} post${n === 1 ? '' : 's'} by this ID`)
  },
}
export default IDPostCount
