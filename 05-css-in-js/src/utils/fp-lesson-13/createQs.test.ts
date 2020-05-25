import { createQs, createQsR, parseQs } from './createQs'

describe('test createQs', () => {
  const qs = '?page=2&pageSize=10&total=205&somethingElse=value'
  const obj = {
    page: '2',
    pageSize: '10',
    total: '205',
    somethingElse: 'value',
  }

  it('parse query object to string', () => {
    const result = createQs(obj)
    expect(result).toBe(qs)
  })

  it('parse query object to string with ramda', () => {
    const result = createQsR(obj)
    expect(result).toBe(qs)
  })

  it('parse query string to object', () => {
    const result = parseQs(qs)
    expect(result).toEqual(obj)
  })
})
