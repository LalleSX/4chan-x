import $ from '../platform/$'
import { g } from '../globals/globals'

// Assuming the callback type is a dictionary with string keys and function values
interface Callbacks {
  [key: string]: (value: any) => void;
}

export default class Connection {
  target: Window | HTMLIFrameElement
  origin: string
  cb: Callbacks

  constructor(target: Window | HTMLIFrameElement, origin: string, cb: Callbacks = {}) {
    this.send = this.send.bind(this)
    this.onMessage = this.onMessage.bind(this)
    this.target = target
    this.origin = origin
    this.cb = cb
    $.on(window, 'message', this.onMessage)
  }

  private targetWindow(): Window {
    return this.target instanceof HTMLIFrameElement ? this.target.contentWindow : this.target
  }

  send(data: any): void {
    this.targetWindow().postMessage(`${g.NAMESPACE}${JSON.stringify(data)}`, this.origin)
  }

  private onMessage(e: MessageEvent): void {
    if (e.source !== this.targetWindow() ||
      e.origin !== this.origin ||
      typeof e.data !== 'string' ||
      !e.data.startsWith(g.NAMESPACE)) {
      return
    }
    
    const data = JSON.parse(e.data.slice(g.NAMESPACE.length))
    for (const type in data) {
      if (this.cb[type]) {
        this.cb[type](data[type])
      }
    }
  }
}
