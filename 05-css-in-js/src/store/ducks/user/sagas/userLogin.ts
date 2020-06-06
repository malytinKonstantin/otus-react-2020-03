import { userActions } from '@/store/ducks/user'
import { takeEvery, put } from 'redux-saga/effects'

const USER_KEY = 'user'

export function* userLoginSaga(
  action: ReturnType<typeof userActions.loginRequest>,
) {
  const { user } = action.payload
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  } catch (error) {
    yield put(userActions.loginFailure({ error }))
  } finally {
    yield put(userActions.loginSuccess({ user }))
  }
}

export function* userLogoutSaga() {
  yield localStorage.removeItem(USER_KEY)
}

export function* userRootSaga() {
  yield takeEvery(userActions.loginRequest.type, userLoginSaga)
  yield takeEvery(userActions.logout.type, userLogoutSaga)
}
