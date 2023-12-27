// Import necessary components and types
import BoardConfig from '../General/BoardConfig.js'
import { d, g } from '../globals/globals.js'
import SimpleDict from './SimpleDict.js'
import Post from './Post.js'
import Thread from './Thread.js'

// Define the Board class
export default class Board {
  // Declare properties with explicit types
  declare ID: string
  declare boardID: string
  declare siteID: string
  declare threads: SimpleDict<Thread>
  declare posts: SimpleDict<Post>
  declare config: any // Consider specifying a more precise type than 'any' if possible

  // Return string representation of the Board
  toString(): string {
    return this.ID
  }

  // Constructor to initialize a Board instance
  constructor(ID: string) {
    this.ID = ID
    this.boardID = this.ID
    this.siteID = g.SITE.ID
    this.threads = new SimpleDict<Thread>()
    this.posts = new SimpleDict<Post>()
    this.config = BoardConfig.boards?.[this.ID] || {}

    // Register the board in the global context
    g.boards[this] = this
  }

  // Method to calculate cooldowns
  cooldowns(): Record<string, number> {
    // Fetch cooldown configurations with defaults
    const c2 = this.config?.cooldowns || {}
    const c = {
      thread: c2.threads || 0,
      reply: c2.replies || 0,
      image: c2.images || 0,
      thread_global: 300, // Inter-board thread cooldown
    }

    // Reduce cooldowns for users with a pass
    if (d.cookie.includes('pass_enabled=1')) {
      for (const key of ['reply', 'image']) {
        c[key] = Math.ceil(c[key] / 2)
      }
    }
    return c
  }
}
