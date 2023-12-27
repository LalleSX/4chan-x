import Callbacks from '../classes/Callbacks.js'
import UI from '../General/UI.js'
import { g, Conf } from '../globals/globals.js'
import $ from '../platform/$.js'

const Menu = {
  init() {
    if (!['index', 'thread'].includes(g.VIEW) || !Conf['Menu']) {
      return
    }

    this.button = $.el('a', {
      className: 'menu-button',
      href: 'javascript:;',
    })

    $.extend(this.button, { textContent: '🞃' })

    this.menu = new UI.Menu('post')
    Callbacks.Post.push({
      name: 'Menu',
      cb: this.node,
    })

    return Callbacks.CatalogThread.push({
      name: 'Menu',
      cb: this.catalogNode,
    })
  },

  button: null,
  menu: null,

  node() {
    if (this.isClone) {
      const button = $('.menu-button', this.nodes.info)
      $.rmClass(button, 'active')
      $.rm($('.dialog', this.nodes.info))
      Menu.makeButton(this, button)
      return
    }
    return $.add(this.nodes.info, Menu.makeButton(this, this.button))
  },

  catalogNode() {
    return $.after(
      this.nodes.icons,
      Menu.makeButton(this.thread.OP, this.button)
    )
  },

  makeButton(post, button) {
    if (!button) {
      button = Menu.button.cloneNode(true)
    }
    $.on(button, 'click', function (e) {
      return Menu.menu.toggle(e, this, post)
    })
    return button
  },
}
export default Menu
