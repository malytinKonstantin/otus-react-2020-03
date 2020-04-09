import {
  firstPrioritiesOneArgCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
} from './engine'

describe('firstPrioritiesOneArgCalc simple cases', () => {
  it('[3, **]', () => {
    expect(firstPrioritiesOneArgCalc([3, '**'])).toEqual([9])
  })

  it('[5, !]', () => {
    expect(firstPrioritiesOneArgCalc([5, '!'])).toEqual([120])
  })
})

describe('firstPrioritiesCalc simple cases', () => {
  it('[2, ^ 3]', () => {
    expect(firstPrioritiesCalc([2, '^', 3])).toEqual([8])
  })

  it('[2, ^ 4]', () => {
    expect(firstPrioritiesCalc([2, '^', 4])).toEqual([16])
  })

  it('[1, * 32]', () => {
    expect(firstPrioritiesCalc([1, '*', 32])).toEqual([32])
  })

  it('[32, /, 32]', () => {
    expect(firstPrioritiesCalc([32, '/', 32])).toEqual([1])
  })

  it('[32, + 32]', () => {
    expect(firstPrioritiesCalc([32, '+', 32])).toEqual([32, '+', 32])
  })

  it('[3, ^, 3]', () => {
    expect(firstPrioritiesCalc([3, '^', 3])).toEqual([27])
  })
})

describe('firstPrioritiesCalc mixed with second priorities cases', () => {
  it('[32, /, 32, +, 10, *, 10]', () => {
    expect(firstPrioritiesCalc([32, '/', 32, '+', 10, '*', 10])).toEqual([
      1,
      '+',
      100,
    ])
  })
})

describe('secondPrioritiesCalc invalid cases', () => {
  it('[32, / 32]', () => {
    expect(() => secondPrioritiesCalc([32, '/', 32])).toThrow(
      TypeError('Unexpected stack!'),
    )
  })
})

describe('secondPrioritiesCalc simple cases', () => {
  it('[32, + 32]', () => {
    expect(secondPrioritiesCalc([32, '+', 32])).toEqual(64)
  })

  it('[32, - 32]', () => {
    expect(secondPrioritiesCalc([32, '-', 32])).toEqual(0)
  })

  it('[32, - 32, +, 10]', () => {
    expect(secondPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10)
  })
})
