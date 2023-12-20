// ShimSet provides a basic Set implementation for environments where native Set is not available.
class ShimSet<T extends string | number | symbol> {
  private elements: Record<T, boolean>
  public size: number

  constructor() {
    this.elements = {} as Record<T, boolean>
    this.size = 0
  }

  // has checks if a value is in the set.
  has(value: T): boolean {
    return value in this.elements
  }

  // add inserts a new value into the set.
  add(value: T): number {
    if (!this.elements[value]) {
      this.elements[value] = true
      this.size++
    }
    return this.size
  }

  // delete removes a value from the set.
  delete(value: T): number {
    if (this.elements[value]) {
      delete this.elements[value]
      this.size--
    }
    return this.size
  }
}

// Fallback to ShimSet if native Set is not available in the window object.
if (!('Set' in window)) {
  (window as any).Set = ShimSet
}
