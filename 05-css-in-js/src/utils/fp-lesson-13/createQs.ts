import { toPairsIn, map, reduce, replace, split } from 'ramda'
import { compose } from './compose'

export const createQs = <T extends { [key: string]: string }>(
  obj: T,
): string => {
  const queryString = Object.keys(obj).reduce((acc, key) => {
    const char = acc.length === 0 ? '?' : '&'
    return acc + char + key + '=' + obj[key]
  }, '')

  return queryString
}

const concatKeyValue = ([key, value]) => key + '=' + value

const reduceQs = (acc, curr) => `${acc}${acc.length ? '&' : '?'}${curr}`

export const createQsR = compose(
  reduce(reduceQs, ''),
  map(concatKeyValue),
  toPairsIn,
)

const strToKeyValue = (str) => str.split('=')

const arrToObj = (acc, [key, value]) => {
  acc[key] = value
  return acc
}

export const parseQs = compose(
  reduce(arrToObj, {}),
  map(strToKeyValue),
  split('&'),
  replace('?', ''),
)
