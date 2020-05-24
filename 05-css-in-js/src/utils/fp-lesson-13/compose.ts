export const compose = (...fnArgs) => {
  const [first, ...funcs] = fnArgs.reverse()
  return (...args) => {
    return funcs.reduce((res, fn) => fn(res), first(...args))
  }
}
