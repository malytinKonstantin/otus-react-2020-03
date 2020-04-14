import type { ParsedLineType } from '../parser'
import type {
  ScalarOperationType,
  ScalarOperationTypeOneArg,
} from '../mathOperators'

import { isNumber } from '../helpers'
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from '../mathOperators'

const [FIRST_ONE_ARG, FIRST, SECOND] = mathPriorities

export const firstPrioritiesOneArgCalc = (
  stack: ParsedLineType,
): ParsedLineType => {
  return stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 1]

    if (
      !isNumber(String(nextItem)) &&
      mathOperatorsPriorities[nextItem] === FIRST_ONE_ARG
    ) {
      if (!mathOperators[nextItem]) {
        throw new TypeError('Unexpected stack!')
      }

      result = [
        ...result.slice(0, -1),
        (mathOperators[nextItem] as ScalarOperationTypeOneArg)(
          Number(prevItem),
        ),
      ]
    } else {
      result.push(nextItem)
    }

    return result
  }, [])
}

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  return stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2]
    const item = result[result.length - 1]

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item]) {
        throw new TypeError('Unexpected stack!')
      }
      result = [
        ...result.slice(0, -2),
        (mathOperators[item] as ScalarOperationType)(
          Number(prevItem),
          Number(nextItem),
        ),
      ]
    } else {
      result.push(nextItem)
    }

    return result
  }, [])
}

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1]

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError('Unexpected stack!')
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(result), Number(nextItem))
    }
    return result
  }, Number(stack[0]))
