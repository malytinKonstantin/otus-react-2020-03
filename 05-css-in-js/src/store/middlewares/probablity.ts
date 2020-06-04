import { store } from '@/store'
import type { AnyAction, Dispatch } from 'redux'

export const probablity = (store: any) => (next: Dispatch<AnyAction>) => (
  action: any,
) => {
  if (action.meta && action.meta.probablity) {
    const random = Math.random()
    if (random < action.meta.probablity) {
      return next(action)
    }
  } else {
    return next(action)
  }
}
