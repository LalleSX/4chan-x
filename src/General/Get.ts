import { Conf, g } from '../globals/globals'
import $ from '../platform/$'

const Get = {
  /**
   * Constructs a URL based on the given type and IDs.
   */
  url(type: string, IDs: any, ...args: any[]): string | undefined {
    const site = g.sites[IDs.siteID]
    const f = site ? $.getOwn(site.urls, type) : undefined
    return f ? f(IDs, ...args) : undefined
  },

  /**
   * Creates an excerpt from a thread.
   */
  threadExcerpt(thread: any): string {
    const { OP } = thread
    const boardPath = `/${decodeURIComponent(thread.board.ID)}/ - `
    const excerptContent = OP.info.subject?.trim() ||
      OP.commentDisplay().replace(/\n+/g, ' // ') ||
      OP.file?.name ||
      `No.${OP}`

    const excerpt = boardPath + excerptContent
    return excerpt.length > 73 ? `${excerpt.slice(0, 70)}...` : excerpt
  },

  /**
   * Retrieves a thread from its root element.
   */
  threadFromRoot(root: HTMLElement | null): any {
    if (!root) {return null}
    const { board } = root.dataset
    const boardID = board ? encodeURIComponent(board) : g.BOARD.ID
    const threadID = root.id.match(/\d*$/)[0]
    return g.threads.get(`${boardID}.${threadID}`)
  },

  /**
   * Retrieves a thread from any node within it.
   */
  threadFromNode(node: Node): any {
    return Get.threadFromRoot($.x(`ancestor-or-self::${g.SITE.xpath.thread}`, node))
  },

  /**
   * Retrieves a post from its root element.
   */
  postFromRoot(root: HTMLElement | null): any {
    if (!root) {return null}
    const post = g.posts.get(root.dataset.fullID)
    const index = root.dataset.clone
    return index ? post.clones[+index] : post
  },

  /**
   * Retrieves a post from any node within it.
   */
  postFromNode(root: Node): any {
    return Get.postFromRoot($.x(`ancestor-or-self::${g.SITE.xpath.postContainer}[1]`, root))
  },

  /**
   * Extracts post data from a link element.
   */
  postDataFromLink(link: HTMLAnchorElement): any {
    let boardID, postID, threadID
    if (link.dataset.postID) {
      ({ boardID, threadID, postID } = link.dataset)
      threadID = threadID || 0
    } else {
      const match = link.href.match(g.SITE.regexp.quotelink);
      [boardID, threadID, postID] = match?.slice(1) || []
      postID = postID || threadID
    }
    return { boardID, threadID: +threadID, postID: +postID }
  },

  /**
   * Finds all quotelinks linking to a given post.
   */
  allQuotelinksLinkingTo(post: any): any[] {
    const quotelinks = []
    const handleQuotes = (qPost: any, type: string) => {
      quotelinks.push(...(qPost.nodes[type] || []))
      qPost.clones.forEach((clone: any) => {
        quotelinks.push(...(clone.nodes[type] || []))
      })
    }

    // Process quotes and backlinks
    g.posts.forEach((qPost: any) => {
      if (qPost.quotes.includes(post.fullID)) {
        handleQuotes(qPost, 'quotelinks')
      }
    })

    if (Conf['Quote Backlinks']) {
      post.quotes.forEach((quote: any) => {
        const qPost = g.posts.get(quote)
        if (qPost) {handleQuotes(qPost, 'backlinks')}
      })
    }

    // Filter irrelevant quotelinks
    return quotelinks.filter((quotelink: HTMLAnchorElement) => {
      const { boardID, postID } = Get.postDataFromLink(quotelink)
      return boardID === post.board.ID && postID === post.ID
    })
  }
}

export default Get
