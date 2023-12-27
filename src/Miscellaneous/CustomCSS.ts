import $ from '../platform/$.js'
import CSS from '../css/CSS.js'
import { Conf } from '../globals/globals.js'

const CustomCSS = {
  init() {
    if (!Conf['Custom CSS']) {
      return
    }
    return this.addStyle()
  },

  addStyle() {
    return (this.style = $.addStyle(
      CSS.sub(Conf['usercss']),
      'custom-css',
      '#fourchanx-css'
    ))
  },

  rmStyle() {
    if (this.style) {
      $.rm(this.style)
      return delete this.style
    }
  },

  update() {
    if (!this.style) {
      return this.addStyle()
    }
    return (this.style.textContent = CSS.sub(Conf['usercss']))
  },
}
export default CustomCSS
