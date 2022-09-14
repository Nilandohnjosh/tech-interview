// const { describe } = require("yargs");

// const { it } = require('node:test')
const fibonacci = require('./index')

test('the function returns the output', () => {
  expect(fibonacci(0)).toBe(0)
})

test('the function returns the output', () => {
  expect(fibonacci(1)).toBe(1)
})

test('the function returns the output', () => {
  expect(fibonacci(8)).toBe(21)
})

// describe('the fibonacci function returns')
