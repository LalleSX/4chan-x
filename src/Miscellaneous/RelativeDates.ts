import Callbacks from '../classes/Callbacks.js'
import Post from '../classes/Post.js'
import Index from '../General/Index.js'
import { g, Conf, d, doc } from '../globals/globals.js'
import $ from '../platform/$.js'
import { DAY, HOUR, MINUTE, SECOND } from '../platform/helpers.js'

const RelativeDates = {
  INTERVAL: 30000,

  init() {
    if (
      (['index', 'thread', 'archive'].includes(g.VIEW) &&
        Conf['Relative Post Dates'] &&
        !Conf['Relative Date Title']) ||
      Index.enabled
    ) {
      this.flush()
      $.on(d, 'visibilitychange PostsInserted', this.flush)
    }

    if (Conf['Relative Post Dates']) {
      return Callbacks.Post.push({
        name: 'Relative Post Dates',
        cb: this.node,
      })
    }
  },

  node() {
    if (!this.info.date) {
      return
    }
    const dateEl = this.nodes.date
    if (Conf['Relative Date Title']) {
      $.on(dateEl, 'mouseover', () => RelativeDates.hover(this))
      return
    }
    if (this.isClone) {
      return
    }

    // Show original absolute time as tooltip so users can still know exact times
    // Since "Time Formatting" runs its `node` before us, the title tooltip will
    // pick up the user-formatted time instead of 4chan time when enabled.
    dateEl.title = dateEl.textContent

    return RelativeDates.update(this, new Date())
  },

  // diff is milliseconds from now.
  relative(diff: number, now: Date, date: Date, abbrev: boolean) {
    // Function to calculate time difference in years and months
    const calculateYearsMonths = (
      years: number,
      months: number,
      days: number
    ) => {
      if (years > 1) {
        return {
          value: years - (months < 0 || (months === 0 && days < 0)),
          unit: 'year',
        }
      }
      if (years === 1 && (months > 0 || (months === 0 && days >= 0))) {
        return { value: years, unit: 'year' }
      }
      if ((months += 12 * years) > 1) {
        return { value: months - (days < 0), unit: 'month' }
      }
      if (months === 1 && days >= 0) {
        return { value: months, unit: 'month' }
      }
      return { value: null, unit: 'day' }
    }

    let timeValue
    let unit = (() => {
      if ((timeValue = diff / DAY) >= 1) {
        const years = now.getFullYear() - date.getFullYear()
        const months = now.getMonth() - date.getMonth()
        const days = now.getDate() - date.getDate()
        const result = calculateYearsMonths(years, months, days)
        if (result.value !== null) {
          timeValue = result.value
          return result.unit
        }
        return 'day'
      } else if ((timeValue = diff / HOUR) >= 1) {
        return 'hour'
      } else if ((timeValue = diff / MINUTE) >= 1) {
        return 'minute'
      } else {
        // prevent "-1 seconds ago"
        timeValue = Math.max(0, diff) / SECOND
        return 'second'
      }
    })()

    const roundedValue = Math.round(timeValue)
    if (abbrev) {
      unit = unit === 'month' ? 'mo' : unit[0]
      return `${roundedValue}${unit}`
    } else {
      if (roundedValue !== 1) {
        unit += 's' // pluralize
      }
      return `${roundedValue} ${unit} ago`
    }
  },

  // Changing all relative dates as soon as possible incurs many annoying
  // redraws and scroll stuttering. Thus, sacrifice accuracy for UX/CPU economy,
  // and perform redraws when the DOM is otherwise being manipulated (and scroll
  // stuttering won't be noticed), falling back to INTERVAL while the page
  // is visible.
  //
  // Each individual dateTime element will add its update() function to the stale list
  // when it is to be called.
  stale: [],
  timeout: null,
  flush() {
    // No point in changing the dates until the user sees them.
    if (d.hidden) {
      return
    }

    const now = new Date()
    for (const data of RelativeDates.stale) {
      RelativeDates.update(data, now)
    }
    RelativeDates.stale = []

    // Reset automatic flush.
    clearTimeout(RelativeDates.timeout)
    return (RelativeDates.timeout = setTimeout(
      RelativeDates.flush,
      RelativeDates.INTERVAL
    ))
  },

  hover(post) {
    const { date } = post.info
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    return (post.nodes.date.title = RelativeDates.relative(
      diff,
      now,
      date,
      false
    ))
  },

  // `update()`, when called from `flush()`, updates the elements,
  // and re-calls `setOwnTimeout()` to re-add `data` to the stale list later.
  update(data, now) {
    let abbrev, date
    const isPost = data instanceof Post
    if (isPost) {
      ;({ date } = data.info)
      abbrev = false
    } else {
      date = new Date(+data.dataset.utc)
      abbrev = !!data.dataset.abbrev
    }
    if (!now) {
      now = new Date()
    }
    const diff = now - date
    const relative = RelativeDates.relative(diff, now, date, abbrev)
    if (isPost) {
      for (const singlePost of [data].concat(data.clones)) {
        singlePost.nodes.date.firstChild.textContent = relative
      }
    } else {
      data.firstChild.textContent = relative
    }
    return RelativeDates.setOwnTimeout(diff, data)
  },

  setOwnTimeout(diff, data) {
    const delay =
      diff < MINUTE
        ? SECOND - ((diff + SECOND / 2) % SECOND)
        : diff < HOUR
          ? MINUTE - ((diff + MINUTE / 2) % MINUTE)
          : diff < DAY
            ? HOUR - ((diff + HOUR / 2) % HOUR)
            : DAY - ((diff + DAY / 2) % DAY)
    return setTimeout(RelativeDates.markStale, delay, data)
  },

  markStale(data) {
    if (RelativeDates.stale.includes(data)) {
      return
    } // We can call RelativeDates.update() multiple times.
    if (data instanceof Post && !g.posts.get(data.fullID)) {
      return
    } // collected post.
    if (data instanceof Element && !doc.contains(data)) {
      return
    } // removed catalog reply.
    return RelativeDates.stale.push(data)
  },
}
export default RelativeDates
