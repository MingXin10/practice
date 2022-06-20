function* getNumbers(words) {
  for (let word of words) {
    yield console.log(word)
  }
}

const iterator = getNumbers('30 天精通 RxJS (04)')

iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
