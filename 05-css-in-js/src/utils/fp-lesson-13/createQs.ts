import { toPairsIn, map, reduce, replace, split } from 'ramda'
import { compose } from './compose'

type KeyValueTuple = [string, string]

export const createQs = <T extends { [key: string]: string }>(
  obj: T,
): string => {
  const queryString = Object.keys(obj).reduce((acc, key) => {
    const char = acc.length === 0 ? '?' : '&'
    return acc + char + key + '=' + encodeURIComponent(obj[key])
  }, '')

  return queryString
}

const concatKeyValue = ([key, value]: KeyValueTuple): string =>
  key + '=' + encodeURIComponent(value)

const reduceQs = (acc: string, curr: string): string =>
  `${acc}${acc.length ? '&' : '?'}${curr}`

export const createQsR = compose(
  reduce(reduceQs, ''),
  map(concatKeyValue),
  toPairsIn,
)

const strToKeyValue = (str: string): KeyValueTuple =>
  str.split('=') as KeyValueTuple

const arrToObj = (
  acc: { [key: string]: string },
  [key, value]: KeyValueTuple,
) => {
  acc[key] = value
  return acc
}

export const parseQs = compose(
  reduce(arrToObj, {}),
  map(strToKeyValue),
  split('&'),
  replace('?', ''),
)
