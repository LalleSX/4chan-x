interface ListItem<T> {
  prev: ListItem<T> | null;
  next: ListItem<T> | null;
  data: T;
  ID: string;
}

export default class RandomAccessList<T> {
  private length: number
  private last: ListItem<T> | null
  private first: ListItem<T> | null
  private items: Record<string, ListItem<T>>

  constructor(items?: T[]) {
    this.length = 0
    this.last = null
    this.first = null
    this.items = {}

    if (items) {
      for (const item of items) {
        this.push(item)
      }
    }
  }

  push(data: T) {
    // Assuming data has a property ID of type string
    const itemID = data['ID']

    if (this.items[itemID]) {
      return
    }

    const newItem: ListItem<T> = {
      prev: this.last,
      next: null,
      data,
      ID: itemID,
    }

    if (this.last) {
      this.last.next = newItem
    } else {
      this.first = newItem
    }

    this.last = newItem
    this.items[itemID] = newItem
    this.length++
  }

  before(rootID: string, itemID: string) {
    const root = this.items[rootID]
    const item = this.items[itemID]

    if (!root || !item || item.next === root || item === root) {
      return
    }

    this.remove(itemID)

    const prev = root.prev

    root.prev = item
    item.next = root
    item.prev = prev

    if (prev) {
      prev.next = item
    } else {
      this.first = item
    }
  }

  after(rootID: string, itemID: string) {
    const root = this.items[rootID]
    const item = this.items[itemID]

    if (!root || !item || item.prev === root || item === root) {
      return
    }

    this.remove(itemID)

    const next = root.next

    root.next = item
    item.prev = root
    item.next = next

    if (next) {
      next.prev = item
    } else {
      this.last = item
    }
  }

  prepend(itemID: string) {
    const item = this.items[itemID]
    const first = this.first

    if (!item || item === first) {
      return
    }

    this.remove(itemID)
    item.next = first

    if (first) {
      first.prev = item
    } else {
      this.last = item
    }

    this.first = item
    delete item.prev
  }

  shift(): T | undefined {
    const firstItem = this.first?.data
    if (firstItem) {
      this.remove(this.first.ID)
      return firstItem
    }
  }

  order(): ListItem<T>[] {
    const order: ListItem<T>[] = []
    let item = this.first

    while (item) {
      order.push(item)
      item = item.next
    }

    return order
  }

  remove(ID: string) {
    const item = this.items[ID]

    if (!item) {
      return
    }

    delete this.items[ID]
    this.length--

    this.removeItem(item)
  }

  private removeItem(item: ListItem<T>) {
    const { prev, next } = item

    if (prev) {
      prev.next = next
    } else {
      this.first = next
    }

    if (next) {
      next.prev = prev
    } else {
      this.last = prev
    }
  }

  getLength(): number {
    return this.length
  }
}
