import Callbacks from '../classes/Callbacks.js'
import Post from '../classes/Post.js'
import { g, Conf, doc } from '../globals/globals.js'
import $ from '../platform/$.js'
import { dict } from '../platform/helpers.js'
import QuoteInline from './QuoteInline.js'
import QuotePreview from './QuotePreview.js'
import QuoteYou from './QuoteYou.js'

const QuoteBacklink = {
  // Backlinks appending need to work for:
  //  - previous, same, and following posts.
  //  - existing and yet-to-exist posts.
  //  - newly fetched posts.
  //  - in copies.
  // XXX what about order for fetched posts?
  //
  // First callback creates backlinks and add them to relevant containers.
  // Second callback adds relevant containers into posts.
  // This is is so that fetched posts can get their backlinks,
  // and that as much backlinks are appended in the background as possible.
  containers: dict(),
  init() {
    if (!['index', 'thread'].includes(g.VIEW) || !Conf['Quote Backlinks']) {
      return
    }

    // Add a class to differentiate when backlinks are at
    // the top (default) or bottom of a post
    if ((this.bottomBacklinks = Conf['Bottom Backlinks'])) {
      $.addClass(doc, 'bottom-backlinks')
    }

    Callbacks.Post.push({
      name: 'Quote Backlinking Part 1',
      cb: this.firstNode,
    })
    return Callbacks.Post.push({
      name: 'Quote Backlinking Part 2',
      cb: this.secondNode,
    })
  },
  firstNode() {
    if (this.isClone || !this.quotes.length || this.isRebuilt) {
      return
    }
    const markYours = Conf['Mark Quotes of You'] && QuoteYou.isYou(this)
    const a = $.el('a', {
      href: g.SITE.Build.postURL(this.board.ID, this.thread.ID, this.ID),
      className: this.isHidden ? 'filtered backlink' : 'backlink',
      textContent: Conf['backlink'].replace(
        /%(?:id|%)/g,
        (        x: string | number) => ({ '%id': this.ID, '%%': '%' })[x]
      ),
    })
    if (markYours) {
      $.add(a, QuoteYou.mark.cloneNode(true))
    }
    for (const quote of this.quotes) {
      let post: Post
      const containers = [QuoteBacklink.getContainer(quote)]
      if ((post = g.posts.get(quote)) && post.nodes.backlinkContainer) {
        // Don't add OP clones when OP Backlinks is disabled,
        // as the clones won't have the backlink containers.
        for (const clone of post.clones) {
          containers.push(clone.nodes.backlinkContainer)
        }
      }
      for (const container of containers) {
        const link = a.cloneNode(true)
        const nodes = container.firstChild ? [$.tn(' '), link] : [link]
        if (Conf['Quote Previewing']) {
          $.on(link, 'mouseover', QuotePreview.mouseover)
        }
        if (Conf['Quote Inlining']) {
          $.on(link, 'click', QuoteInline.toggle)
          if (Conf['Quote Hash Navigation']) {
            const hash = QuoteInline.qiQuote(link, $.hasClass(link, 'filtered'))
            nodes.push(hash)
          }
        }
        $.add(container, nodes)
      }
    }
  },
  secondNode() {
    if (this.isClone && (this.origin.isReply || Conf['OP Backlinks'])) {
      this.nodes.backlinkContainer = $('.container', this.nodes.post)
      return
    }
    // Don't backlink the OP.
    if (!this.isReply && !Conf['OP Backlinks']) {
      return
    }
    const container = QuoteBacklink.getContainer(this.fullID)
    this.nodes.backlinkContainer = container
    if (QuoteBacklink.bottomBacklinks) {
      return $.add(this.nodes.post, container)
    } else {
      return $.add(this.nodes.info, container)
    }
  },
  getContainer(id: string | number) {
    return (
      this.containers[id] ||
      (this.containers[id] = $.el('span', { className: 'container' }))
    )
  },
}
export default QuoteBacklink
