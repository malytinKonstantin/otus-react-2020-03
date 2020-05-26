export const compose = (...fnArgs: Function[]) => {
  const [first, ...funcs] = fnArgs.reverse()
  return (...args: any[]) => {
    return funcs.reduce((res, fn) => fn(res), first(...args))
  }
}
