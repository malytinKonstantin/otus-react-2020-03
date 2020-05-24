import { compose } from './compose'
import { map } from 'ramda'

describe('test compose', () => {
  const fn = compose(map((a) => a + 1))

  it('test composed fn', () => {
    const res = fn([1, 2, 3])
    expect(res).toEqual([2, 3, 4])
  })
})
