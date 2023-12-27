import Callbacks from '../classes/Callbacks.js'
import { Conf, doc, g } from '../globals/globals.js'
import $ from '../platform/$.js'
import $$ from '../platform/$$.js'

const RemoveSpoilers = {
  init() {
    if (Conf['Reveal Spoilers']) {
      $.addClass(doc, 'reveal-spoilers')
    }

    if (!Conf['Remove Spoilers']) {
      return
    }

    Callbacks.Post.push({
      name: 'Reveal Spoilers',
      cb: this.node,
    })

    if (g.VIEW === 'archive') {
      return $.ready(() => RemoveSpoilers.unspoiler($.id('arc-list')))
    }
  },

  node() {
    return RemoveSpoilers.unspoiler(this.nodes.comment)
  },

  unspoiler(el) {
    const spoilers = $$(g.SITE.selectors.spoiler, el)
    for (const spoiler of spoilers) {
      const span = $.el('span', { className: 'removed-spoiler' })
      $.replace(spoiler, span)
      $.add(span, [...spoiler.childNodes])
    }
  },
}
export default RemoveSpoilers
