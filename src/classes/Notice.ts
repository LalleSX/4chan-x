import Header from '../General/Header'
import { d } from '../globals/globals'
import $ from '../platform/$'
import { SECOND } from '../platform/helpers'

export default class Notice {
  timeout: number | undefined
  onclose: (() => void) | undefined
  el: HTMLElement
  closed: boolean

  constructor(
    type: string,
    content: string | Node,
    timeout?: number,
    onclose?: () => void
  ) {
    this.add = this.add.bind(this)
    this.close = this.close.bind(this)

    this.timeout = timeout
    this.onclose = onclose
    this.el = $.el('div', {
      innerHTML:
        '<a href="javascript:;" class="close" title="Close">✕</a><div class="message"></div>',
    })
    this.el.style.opacity = '0'
    this.setType(type)
    $.on(this.el.firstElementChild as HTMLElement, 'click', this.close)

    if (typeof content === 'string') {
      content = $.tn(content)
    }
    $.add(this.el.lastElementChild as HTMLElement, content)

    $.ready(this.add)
  }

  setType(type: string): string {
    return (this.el.className = `notification ${type}`)
  }

  add(): void {
    if (this.closed) {
      return
    }
    if (d.hidden) {
      $.on(d, 'visibilitychange', this.add)
      return
    }
    $.off(d, 'visibilitychange', this.add)
    $.add(Header.noticesRoot, this.el)
    this.el.clientHeight // force reflow
    this.el.style.opacity = '1'
    if (this.timeout) {
      setTimeout(this.close, this.timeout * SECOND)
    }
  }

  close(): void {
    this.closed = true
    $.off(d, 'visibilitychange', this.add)
    $.rm(this.el)
    this.onclose?.()
  }
}
