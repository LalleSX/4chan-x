import { Conf, d, g } from '../globals/globals.js'
import $ from '../platform/$.js'
import { dict, HOUR } from '../platform/helpers.js'

export default class DataBoard {
  key: string
  static keys: string[]
  changes: any[]
  sync: any
  data: any
  static initClass() {
    this.keys = [
      'hiddenThreads',
      'hiddenPosts',
      'lastReadPosts',
      'yourPosts',
      'watchedThreads',
      'watcherLastModified',
      'customTitles',
    ]
  }
  /**
   *
   * @param key is one of the keys in DataBoard.keys
   * @param sync is a function that syncs the data to the server
   * @param dontClean is a boolean that prevents the data from being cleaned
   * @returns the DataBoard object
   */
  constructor(key, sync: any, dontClean: boolean) {
    this.changes = []
    this.onSync = this.onSync.bind(this)
    this.key = key
    this.initData(Conf[this.key])
    $.sync(this.key, this.onSync)
    if (!dontClean) {
      this.clean()
    }
    if (!sync) {
      return
    }
    // Chrome also fires the onChanged callback on the current tab,
    // so we only start syncing when we're ready.
    const init = () => {
      $.off(d, '4chanXInitFinished', init)
      return (this.sync = sync)
    }
    $.on(d, '4chanXInitFinished', init)
  }

  initData(data) {
    let boards
    this.data = data
    if (this.data.boards) {
      let lastChecked
      ;({ boards, lastChecked } = this.data)
      this.data['4chan.org'] = { boards, lastChecked }
      delete this.data.boards
      delete this.data.lastChecked
    }
    return this.data[g.SITE.ID] || (this.data[g.SITE.ID] = { boards: dict() })
  }

  save(change, cb) {
    change()
    this.changes.push(change)
    return $.get(this.key, { boards: dict() }, items => {
      if (!this.changes.length) {
        return
      }
      const needSync = (items[this.key].version || 0) > (this.data.version || 0)
      if (needSync) {
        this.initData(items[this.key])
        for (change of this.changes) {
          change()
        }
      }
      this.changes = []
      this.data.version = (this.data.version || 0) + 1
      return $.set(this.key, this.data, () => {
        if (needSync) {
          this.sync?.()
        }
        return cb?.()
      })
    })
  }

  forceSync(cb) {
    return $.get(this.key, { boards: dict() }, items => {
      if ((items[this.key].version || 0) > (this.data.version || 0)) {
        this.initData(items[this.key])
        for (const change of this.changes) {
          change()
        }
        this.sync?.()
      }
      return cb?.()
    })
  }
  delete({ siteID, boardID, threadID, postID }, cb: Function): any {
    if (!siteID) {
      siteID = g.SITE.ID
    }
    if (!this.data[siteID]) {
      return
    }
    return this.save(() => {
      if (postID) {
        if (!this.data[siteID].boards[boardID]?.[threadID]) {
          return
        }
        delete this.data[siteID].boards[boardID][threadID][postID]
        return this.deleteIfEmpty({ siteID, boardID, threadID })
      } else if (threadID) {
        if (!this.data[siteID].boards[boardID]) {
          return
        }
        delete this.data[siteID].boards[boardID][threadID]
        return this.deleteIfEmpty({ siteID, boardID, threadID })
      } else {
        return delete this.data[siteID].boards[boardID]
      }
    }, cb)
  }

  deleteIfEmpty({ siteID, boardID, threadID }) {
    if (!this.data[siteID]) {
      return
    }
    if (threadID) {
      if (!Object.keys(this.data[siteID].boards[boardID][threadID]).length) {
        delete this.data[siteID].boards[boardID][threadID]
        return this.deleteIfEmpty({ siteID, boardID, threadID: undefined })
      }
    } else if (!Object.keys(this.data[siteID].boards[boardID]).length) {
      return delete this.data[siteID].boards[boardID]
    }
  }

  set(data, cb) {
    return this.save(() => {
      return this.setUnsafe(data)
    }, cb)
  }

  setUnsafe({ siteID, boardID, threadID, postID, val }) {
    if (!siteID) {
      siteID = g.SITE.ID
    }
    if (!this.data[siteID]) {
      this.data[siteID] = { boards: dict() }
    }
    if (postID !== undefined) {
      let base
      return (((base =
        this.data[siteID].boards[boardID] ||
        (this.data[siteID].boards[boardID] = dict()))[threadID] ||
        (base[threadID] = dict()))[postID] = val)
    } else if (threadID !== undefined) {
      return ((this.data[siteID].boards[boardID] ||
        (this.data[siteID].boards[boardID] = dict()))[threadID] = val)
    } else {
      return (this.data[siteID].boards[boardID] = val)
    }
  }

  extend({ siteID, boardID, threadID, postID, val }, cb) {
    return this.save(() => {
      const oldVal = this.get({
        siteID,
        boardID,
        threadID,
        postID,
        defaultValue: dict(),
      })
      for (const key in val) {
        const subVal = val[key]
        if (typeof subVal === 'undefined') {
          delete oldVal[key]
        } else {
          oldVal[key] = subVal
        }
      }
      return this.setUnsafe({ siteID, boardID, threadID, postID, val: oldVal })
    }, cb)
  }

  setLastChecked(key = 'lastChecked') {
    return this.save(
      () => {
        return (this.data[key] = Date.now())
      },
      () => {
        return this.sync?.()
      }
    )
  }

  get({ siteID, boardID, threadID, postID, defaultValue }) {
    let board, val
    if (!siteID) {
      siteID = g.SITE.ID
    }
    if ((board = this.data[siteID]?.boards[boardID])) {
      let thread
      if (threadID == null) {
        if (postID != null) {
          for (thread = 0; thread < board.length; thread++) {
            const ID = board[thread]
            if (postID in thread) {
              val = thread[postID]
              break
            }
          }
        } else {
          val = board
        }
      } else if ((thread = board[threadID])) {
        val = postID != null ? thread[postID] : thread
      }
    }
    return val || defaultValue
  }

  clean() {
    let boardID, middle
    const siteID = g.SITE.ID
    for (boardID in this.data[siteID].boards) {
      const val = this.data[siteID].boards[boardID]
      this.deleteIfEmpty({ siteID, boardID, threadID: undefined })
    }
    const now = Date.now()
    if (
      now - 2 * HOUR >= (middle = this.data[siteID].lastChecked || 0) ||
      middle > now
    ) {
      this.data[siteID].lastChecked = now
      for (boardID in this.data[siteID].boards) {
        this.ajaxClean(boardID)
      }
    }
  }

  async ajaxClean(boardID: string) {
    const siteID = g.SITE.ID
    const threadsListUrl = g.SITE.urls.threadsListJSON?.({ siteID, boardID })
    if (!threadsListUrl) {
      return
    }

    try {
      const threadsListResponse = await $.cache(threadsListUrl)
      if (threadsListResponse.status !== 200) {
        return
      }
      return this.processThreadsList(boardID, threadsListResponse)
    } catch (error) {
      console.error('Error fetching threads list:', error)
    }
  }

  async processThreadsList(boardID, threadsListResponse) {
    const siteID = g.SITE.ID
    const archiveListUrl = g.SITE.urls.archiveListJSON?.({ siteID, boardID })
    if (!archiveListUrl) {
      return this.ajaxCleanParse(
        boardID,
        threadsListResponse.response,
        undefined
      )
    }

    try {
      const archiveListResponse = await $.cache(archiveListUrl)
      if (
        archiveListResponse.status === 200 ||
        (!g.SITE.archivedBoardsKnown && archiveListResponse.status === 404)
      ) {
        return this.ajaxCleanParse(
          boardID,
          threadsListResponse.response,
          archiveListResponse.response
        )
      }
    } catch (error) {
      console.error('Error fetching archive list:', error)
    }
  }

  ajaxCleanParse(boardID, threadsResponse, archiveResponse) {
    const siteID = g.SITE.ID
    const boardData = this.data[siteID].boards[boardID]
    if (!boardData) {
      return
    }

    const threads = new Map()
    this.processResponse(boardData, threads, threadsResponse)
    this.processResponse(boardData, threads, archiveResponse)

    this.data[siteID].boards[boardID] = Object.fromEntries(threads)
    this.deleteIfEmpty({ siteID, boardID, threadID: undefined })
    return $.set(this.key, this.data, this.sync)
  }

  processResponse(boardData, threads, response) {
    if (response) {
      for (const thread of response) {
        const threadID = thread.no
        if (threadID in boardData) {
          threads.set(threadID, boardData[threadID])
        }
      }
    }
  }

  onSync(data) {
    if ((data.version || 0) <= (this.data.version || 0)) {
      return
    }
    this.initData(data)
    return this.sync?.()
  }
}
DataBoard.initClass()
