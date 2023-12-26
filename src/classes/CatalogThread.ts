import $ from '../platform/$'

interface Thread {
  ID: string // Assuming ID is a string
  board: string // Assuming board is a string
  OP: {
    nodes: {
      post: HTMLElement
    }
  }
  catalogView?: CatalogThread
}

interface ThreadNodes {
  root: HTMLElement
  thumb: HTMLElement
  icons: HTMLElement
  postCount: HTMLElement
  fileCount: HTMLElement
  pageCount: HTMLElement
  replies: HTMLElement | null
}

export default class CatalogThread {
  ID: string
  thread: Thread
  board: string
  nodes: ThreadNodes

  constructor(root: HTMLElement, thread: Thread) {
    this.thread = thread
    this.ID = thread.ID
    this.board = thread.board

    const { post } = thread.OP.nodes
    this.nodes = {
      root,
      thumb: $('.catalog-thumb', post),
      icons: $('.catalog-icons', post),
      postCount: $('.post-count', post),
      fileCount: $('.file-count', post),
      pageCount: $('.page-count', post),
      replies: null,
    }

    this.thread.catalogView = this
  }

  toString(): string {
    return this.ID
  }
}
