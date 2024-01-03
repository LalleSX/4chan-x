import DataBoard from '../classes/DataBoard.js'
import { Conf, d, g } from '../globals/globals.js'
import $ from '../platform/$.js'

const PostSuccessful = {
  init() {
    if (!Conf['Remember Your Posts']) {
      return
    }
    return $.on(d, 'DOMContentLoaded', this.ready)
  },

  ready() {
    if (d.title !== 'Post successful!') {
      return
    }

    let [_, threadID, postID] = /#(\d+)$/.exec(
      g.REPLYBOX.getAttribute('action')
    )
    postID = +postID
    threadID = +threadID || postID

    const db = new DataBoard('yourPosts', 'threadID', true)
    return db.set(
      {
        boardID: g.BOARD.ID,
        threadID,
        postID,
        val: true,
      },
      () => {}
    )
  },
}
export default PostSuccessful
