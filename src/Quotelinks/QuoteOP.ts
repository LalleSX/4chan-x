import Callbacks from '../classes/Callbacks.js'
import Get from '../General/Get.js'
import { g, Conf } from '../globals/globals.js'
import ExpandComment from '../Miscellaneous/ExpandComment.js'
import $ from '../platform/$.js'

const QuoteOP = {
  init() {
    if (!['index', 'thread'].includes(g.VIEW) || !Conf['Mark OP Quotes']) {
      return
    }

    if (Conf['Comment Expansion']) {
      ExpandComment.callbacks.push(this.node)
    }

    // \u00A0 is nbsp
    this.mark = $.el('span', {
      textContent: '\u00A0(OP)',
      className: 'qmark-op',
    })
    return Callbacks.Post.push({
      name: 'Mark OP Quotes',
      cb: this.node,
    })
  },
  mark: null as HTMLSpanElement,

  node() {
    // Stop there if it's a clone of a post in the same thread.
    let i, quotelink, quotes
    if (this.isClone && this.thread === this.context.thread) {
      return
    }
    // Stop there if there's no quotes in that post.
    if (!(quotes = this.quotes).length) {
      return
    }
    const { quotelinks } = this.nodes

    // rm (OP) from cross-thread quotes.
    if (this.isClone && quotes.includes(this.thread.fullID)) {
      i = 0
      while ((quotelink = quotelinks[i++])) {
        $.rm($('.qmark-op', quotelink))
      }
    }

    const { fullID } = this.context.thread
    // add (OP) to quotes quoting this context's OP.

    if (!quotes.includes(fullID)) {
      return
    }
    i = 0
    while ((quotelink = quotelinks[i++])) {
      const { boardID, postID } = Get.postDataFromLink(quotelink)
      if (`${boardID}.${postID}` === fullID) {
        $.add(quotelink, QuoteOP.mark.cloneNode(true))
      }
    }
  },
}
export default QuoteOP
