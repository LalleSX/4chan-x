import DataBoard from '../classes/DataBoard.js'
import { Conf, d, g } from '../globals/globals.js'
import $ from 'jquery'

const PostSuccessful = {
  init() {
    if (!Conf['Remember Your Posts']) {
      return
    }
    return $('body').on('DOMNodeInserted', 'h1', this.ready)
  },

  ready() {
    if (d.title !== 'Post successful!') {
      return
    }

    let [_, threadID, postID] = $('a[href*="thread/"]')
      .attr('href')
      .match(/thread\/(\d+)#(\d+)/)
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
