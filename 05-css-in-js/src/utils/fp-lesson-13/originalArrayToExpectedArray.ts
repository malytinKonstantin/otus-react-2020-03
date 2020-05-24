export const originalArrayToExpectedArray = <E>(array: E[]): any[] => {
  const nextArray = ['two', ...array.slice(2), 5]
  return nextArray
}
