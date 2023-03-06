/* eslint-disable no-plusplus */
export class ArrayHelper {
  private array: any[]

  constructor(array: any[]) {
    this.array = array
  }

  static init(array: any[]): ArrayHelper {
    return new ArrayHelper(array)
  }

  shuffle(): this {
    for (let i = this.array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]]
    }
    return this
  }

  build(): any[] {
    return this.array
  }
}
