class Counter {
  constructor () {
    this.index = 0
  }

  next () {
    console.log(this)
    this.index++
    return this.index
  }
}

module.exports = Counter
