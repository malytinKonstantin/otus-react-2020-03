import { mul, div, add, minus, pow, squaring, factorial } from './mathOperators'

describe('mathOperators test cases', () => {
  it('mul 1 * 2 to equal 2', () => {
    expect(mul(1, 2)).toBe(2)
  })

  it('mul 2 * 2 to equal 4', () => {
    expect(mul(2, 2)).toBe(4)
  })

  it('div 2 / 2 to equal 1', () => {
    expect(div(2, 2)).toBe(1)
  })

  it('div 4 / 2 to equal 2', () => {
    expect(div(4, 2)).toBe(2)
  })

  it('add 4 + 2 to equal 6', () => {
    expect(add(4, 2)).toBe(6)
  })

  it('minus 4 - 2 to equal 2', () => {
    expect(minus(4, 2)).toBe(2)
  })

  it('pow 3 ^ 2', () => {
    expect(pow(3, 2)).toBe(9)
  })

  it('squaring 3 **', () => {
    expect(squaring(3)).toBe(9)
  })

  it('factorial 5 !', () => {
    expect(factorial(5)).toBe(120)
  })
})
