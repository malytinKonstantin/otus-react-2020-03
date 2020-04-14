import { isNumber } from '../helpers'
import {
  mathOperators,
  mathOperatorsPriorities,
  mathPriorities,
} from '../mathOperators'

const [FIRST_ONE_ARG] = mathPriorities

export type ParsedLineType = (number | string)[]

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(' ')

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1]
    const nextItem = stack[key + 1]

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item)

    const isValidOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item) &&
      mathOperatorsPriorities[item] !== FIRST_ONE_ARG

    const isValidOperatorOneArg = () => {
      if (!isNumber(prevItem) && !isNumber(item))
        return [
          mathOperatorsPriorities[prevItem],
          mathOperatorsPriorities[item],
        ].includes(FIRST_ONE_ARG)

      if (isNumber(prevItem) && !isNumber(item) && !isNumber(nextItem))
        return mathOperatorsPriorities[item] === FIRST_ONE_ARG

      if (!isNumber(prevItem) && isNumber(item))
        return mathOperatorsPriorities[prevItem] === FIRST_ONE_ARG

      if (isNumber(prevItem) && !isNumber(item) && nextItem === undefined)
        return mathOperatorsPriorities[item] === FIRST_ONE_ARG

      return false
    }

    if (isValidNumberPush) {
      result.push(Number(item))
    } else if (isValidOperatorPush || isValidOperatorOneArg()) {
      result.push(item)
    } else {
      throw new TypeError('Unexpected string')
    }
    return result
  }, [])
}
