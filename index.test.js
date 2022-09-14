const fib = require('./index')

test('the function returns the output', () => {
  expect(fib(0)).toBe(0)
})

test('the function returns the output', () => {
  expect(fib(1)).toBe(1)
})

test('the function returns the output', () => {
  expect(fib(8)).toBe(21)
})
