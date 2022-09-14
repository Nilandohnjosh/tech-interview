console.log('hello DIA team!')

const fibo = (x) => {
  if (x === 0 || x === 1) {
    return x
  }
  return fibo(x - 1) + fibo(x - 2)
}

module.exports = fibo
