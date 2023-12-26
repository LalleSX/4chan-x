import { g } from '../globals/globals'
import $ from '../platform/$'
import Board from './Board'
import Thread from './Thread'

// Defines a class representing a thread in a catalog, specifically for the native site format
export default class CatalogThreadNative {
  ID: any
  nodes: { root: any; thumb: HTMLElement }
  siteID: any
  boardID: any
  board: any
  threadID: number
  thread: any

  // Returns a string representation of the CatalogThreadNative instance
  toString() {
    return this.ID
  }

  constructor(root) {
    // Initializes the DOM nodes related to the catalog thread
    this.nodes = {
      root,
      thumb: $(g.SITE.selectors.catalog.thumb, root), // jQuery selection for the thumbnail
    }

    // Extracts and assigns various IDs and data related to the thread
    this.siteID = g.SITE.ID
    this.boardID = this.nodes.thumb.parentNode.pathname.split(/\/+/)[1] // Extracts the board ID from the URL
    this.board = g.boards[this.boardID] || new Board(this.boardID) // Retrieves or creates a new Board instance
    this.ID = this.threadID = +(root.dataset.id || root.id).match(/\d*$/)[0] // Extracts the numeric ID of the thread
    this.thread =
      this.board.threads.get(this.ID) || new Thread(this.ID, this.board) // Retrieves or creates a new Thread instance
  }
}
