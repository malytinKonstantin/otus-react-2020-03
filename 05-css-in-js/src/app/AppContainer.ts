import { AppState, AppDispatch } from '@/store'
import { connect } from 'react-redux'
import { App } from './App'
import {
  userActions,
  getIsAuthorizingUser,
  getIsAuthorizedUser,
  getAuthorizationError,
  getUser,
} from '@/store/ducks/user'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state: AppState) => ({
  isAuthorizing: getIsAuthorizingUser(state),
  isAuthorized: getIsAuthorizedUser(state),
  error: getAuthorizationError(state),
  user: getUser(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      login: userActions.loginRequest,
      logout: userActions.logout,
    },
    dispatch,
  )

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type StateProps = ReturnType<typeof mapStateToProps>
export type ConnectProps = StateProps & DispatchProps
