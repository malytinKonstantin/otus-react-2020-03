import { store } from '@/store'
import type { AnyAction, Dispatch } from 'redux'

type GetState = typeof store.getState
type ThunkAction = (dispatch: Dispatch, getState: GetState) => Promise<any>

export const thunk = (store: any) => (next: Dispatch<AnyAction>) => async (
  action: any,
) => {
  if (typeof action === 'function') {
    await (<ThunkAction>action(store.dispatch, store.getState))
  } else {
    return next(action)
  }
}
