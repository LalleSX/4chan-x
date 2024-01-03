import $ from '../platform/$.js'
import Redirect from '../Archive/Redirect.js'
import Filter from '../Filtering/Filter.js'
import { g, Conf } from '../globals/globals.js'
import Menu from './Menu.js'

const ArchiveLink = {
  init() {
    if (
      g.SITE.software !== 'yotsuba' ||
      !['index', 'thread'].includes(g.VIEW) ||
      !Conf['Menu'] ||
      !Conf['Archive Link']
    ) {
      return
    }

    const div = $.el('div', { textContent: 'Archive' })

    const entry = {
      el: div,
      order: 60,
      open({ ID, thread, board }) {
        return !!Redirect.to('thread', {
          postID: ID,
          threadID: thread.ID,
          boardID: board.ID,
        })
      },
      subEntries: [],
    }

    for (const type of [
      ['Post', 'post'],
      ['Name', 'name'],
      ['Tripcode', 'tripcode'],
      ['Capcode', 'capcode'],
      ['Subject', 'subject'],
      ['Flag', 'country'],
      ['Filename', 'filename'],
      ['Image MD5', 'MD5'],
    ]) {
      // Add a sub entry for each type.
      entry.subEntries.push(this.createSubEntry(type[0], type[1]))
    }

    return Menu.menu.addEntry(entry)
  },

  createSubEntry(text, type) {
    const el = $.el('a', {
      textContent: text,
      target: '_blank',
    }) as HTMLAnchorElement

    const open =
      type === 'post'
        ? function ({ ID, thread, board }) {
            el.href = Redirect.to('thread', {
              postID: ID,
              threadID: thread.ID,
              boardID: board.ID,
            })
            return true
          }
        : function (post) {
            const typeParam =
              type === 'country' && post.info.flagCodeTroll
                ? 'troll_country'
                : type
            const value =
              type === 'country'
                ? post.info.flagCode || post.info.flagCodeTroll?.toLowerCase()
                : Filter.values(type, post)[0]
            // We want to parse the exact same stuff as the filter does already.
            if (!value) {
              return false
            }
            el.href = Redirect.to('search', {
              boardID: post.board.ID,
              threadID: post.thread.ID,
              postID: post.ID,
            })
            return true
          }

    return {
      el,
      open,
    }
  },
}
export default ArchiveLink
