import $ from '../platform/$'

export default class SimpleDict<T> {
  private keys: string[]

  constructor() {
    this.keys = []
  }

  /**
   * Adds a key-value pair to the dictionary.
   * @param key The key to add. Cannot be 'keys'.
   * @param data The value associated with the key.
   * @returns The added data, or undefined if the key is 'keys'.
   */
  push(key: string | number, data: T): T | undefined {
    if (key === 'keys') {
      return undefined
    } else {
      const keyStr = `${key}`
      this.keys.push(keyStr)
      ;(this as any)[keyStr] = data
      return data
    }
  }

  /**
   * Removes a key-value pair from the dictionary.
   * @param key The key to remove.
   * @returns true if the key was removed, false otherwise.
   */
  rm(key: string | number): boolean {
    const keyStr = `${key}`
    const index = this.keys.indexOf(keyStr)
    if (index !== -1) {
      this.keys.splice(index, 1)
      delete (this as any)[keyStr]
      return true
    }
    return false
  }

  /**
   * Executes a provided function once for each key-value pair in the dictionary.
   * @param fn The function to execute for each element.
   */
  forEach(fn: (data: T, key: string) => void): void {
    this.keys.forEach(key => fn((this as any)[key], key))
  }

  /**
   * Retrieves the value associated with the specified key.
   * @param key The key whose value is to be returned.
   * @returns The value associated with the key, or undefined if the key is 'keys'.
   */
  get(key: string | number): T | undefined {
    if (key === 'keys') {
      return undefined
    } else {
      return $.getOwn(this, `${key}`)
    }
  }
}
