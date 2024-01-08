import { g, Conf, d } from '../globals/globals.js'
import $ from '../platform/$.js'
import Menu from './Menu.js'

const CopyTextLink = {
  init() {
    if (
      !['index', 'thread'].includes(g.VIEW) ||
      !Conf['Menu'] ||
      !Conf['Copy Text Link']
    ) {
      return
    }

    const a = $.el('a', {
      className: 'copy-text-link',
      href: 'javascript:;',
      textContent: 'Copy Text',
    })
    $.on(a, 'click', CopyTextLink.copy)

    return Menu.menu.addEntry({
      el: a,
      order: 12,
      open(post) {
        CopyTextLink.text = (post.origin || post).commentOrig()
        return true
      },
    })
  },
  text: '',

  copy() {
    const el = $.el('textarea', {
      className: 'copy-text-element',
      value: CopyTextLink.text,
    }) as HTMLTextAreaElement
    $.add(d.body, el)
    el.select()
    try {
      d.execCommand('copy')
    } catch (error) {}
    return $.rm(el)
  },
}
export default CopyTextLink
