export type ScalarOperationType = (first: number, second: number) => number

export type ScalarOperationTypeOneArg = (first: number) => number

export const mul: ScalarOperationType = (
  first: number,
  second: number,
): number => first * second

export const div: ScalarOperationType = (
  first: number,
  second: number,
): number => first / second

export const add: ScalarOperationType = (
  first: number,
  second: number,
): number => first + second

export const minus: ScalarOperationType = (
  first: number,
  second: number,
): number => first - second

export const pow: ScalarOperationType = (
  first: number,
  second: number,
): number => first ** second

export const squaring: ScalarOperationType = (first: number): number =>
  first ** 2

export const factorial: ScalarOperationType = (first: number): number =>
  first ? first * factorial(first - 1) : 1

export const mathOperators: {
  [key: string]: ScalarOperationType | ScalarOperationTypeOneArg
} = {
  '*': mul,
  '/': div,
  '+': add,
  '-': minus,
  '**': squaring,
  '^': pow,
  '!': factorial,
}

export const mathPriorities: number[] = [0, 1, 2]

const [FIRST_ONE_ARG, FIRST, SECOND] = mathPriorities

export const mathOperatorsPriorities: { [key: string]: number } = {
  '*': FIRST,
  '/': FIRST,
  '+': SECOND,
  '-': SECOND,
  '**': FIRST_ONE_ARG,
  '!': FIRST_ONE_ARG,
  '^': FIRST,
}
