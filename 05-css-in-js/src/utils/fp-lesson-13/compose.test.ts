import { compose } from './compose'
import { map, sum } from 'ramda'

describe('test compose', () => {
  const fn = compose(
    sum,
    map((a: number) => a + 1),
  )

  it('test composed fn', () => {
    const res = fn([1, 2, 3])
    expect(res).toEqual(9)
  })
})
