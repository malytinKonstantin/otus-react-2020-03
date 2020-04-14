import { parser } from '../parser'

import {
  firstPrioritiesOneArgCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
} from '../engine'

export const runner = (line: string): number => {
  const stack = parser(line)

  if (stack === null) {
    throw new TypeError('Unexpected string')
  }

  const firstPrioritiesOneArgRes = firstPrioritiesOneArgCalc(stack)

  const firstPrioritiesRes = firstPrioritiesCalc(firstPrioritiesOneArgRes)

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0])
  }

  return secondPrioritiesCalc(firstPrioritiesRes)
}
