console.log('hello DIA team!')

const fibonacci = (x) => {
  if (x === 0 || x === 1) {
    return x
  }
  return fibonacci(x - 1) + fibonacci(x - 2)
}

module.exports = fibonacci
