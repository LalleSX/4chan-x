import $ from '../platform/$'
import Notice from './Notice'

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
export default class SimpleDict<T> {
  keys: string[]

  constructor() {
    this.keys = []
  }

  push(key: string | number, data: T) {
    if (key === 'keys') {
      return undefined
    } else {
      this.keys.push(key = `${key}`)
      return this[key] = data
    }
  }

  rm(key: string | this | this) {
    let i: number
    key = `${key}`
    if ((i = this.keys.indexOf(key)) !== -1) {
      this.keys.splice(i, 1)
      return delete this[key]
    }
  }

  forEach(fn: (data: T, key: string) => void) {
    return this.keys.forEach(key => fn(this[key], key))
  }

  get(key: string | number): T {
    if (key === 'keys') {
      return undefined
    } else {
      return $.getOwn(this, key)
    }
  }
}
