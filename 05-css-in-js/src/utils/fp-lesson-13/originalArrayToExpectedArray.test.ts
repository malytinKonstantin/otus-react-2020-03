import { originalArrayToExpectedArray } from './originalArrayToExpectedArray'

describe('test originalArrayToExpectedArray', () => {
  const originalArray = [1, 2, 3, 4]

  const expectedArray = ['two', 3, 4, 5]

  it('get expected array', () => {
    const result = originalArrayToExpectedArray<number>(originalArray)
    expect(result).toEqual(expectedArray)
  })
})
