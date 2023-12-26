import Main from '../main/Main'

type CallbackFunction = (node: any) => void

interface ICallback {
  [key: string]: CallbackFunction
}

export default class Callbacks {
  static Post: Callbacks
  static Thread: Callbacks
  static CatalogThread: Callbacks
  static CatalogThreadNative: Callbacks
  type: string
  keys: string[]
  callbacks: ICallback

  constructor(type: string) {
    this.type = type
    this.keys = []
    this.callbacks = {}
  }

  static initClass(): void {
    this.Post = new Callbacks('Post')
    this.Thread = new Callbacks('Thread')
    this.CatalogThread = new Callbacks('Catalog Thread')
    this.CatalogThreadNative = new Callbacks('Catalog Thread Native')
  }

  push({ name, cb }: { name: string; cb: CallbackFunction }): void {
    if (!this.callbacks[name]) {
      this.keys.push(name)
    }
    this.callbacks[name] = cb
  }

  execute(node: any, keys: string[] = this.keys, force: boolean = false): void {
    const errors: any[] = []

    if (node.callbacksExecuted && !force) {
      return
    }

    node.callbacksExecuted = true

    for (const name of keys) {
      try {
        this.callbacks[name]?.call(node)
      } catch (err) {
        errors.push({
          message: `"${name}" crashed on node ${this.type} No. ${node.ID} (${node.board}).`,
          error: err,
          html: node.nodes?.root?.outerHTML,
        })
      }
    }

    if (errors.length > 0) {
      Main.handleErrors(errors)
    }
  }
}

Callbacks.initClass()
