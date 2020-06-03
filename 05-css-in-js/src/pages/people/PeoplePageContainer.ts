import type { AppState, AppDispatch } from '@/store'
import {
  fetchPeople,
  getPeopleIsFetching,
  getPeopleIsFetched,
  getPeopleErorr,
  getPeopleList,
} from '@/store/ducks/people'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PeoplePage } from './PeoplePage'

const mapStateToProps = (state: AppState) => ({
  isFetching: getPeopleIsFetching(state),
  isFetched: getPeopleIsFetched(state),
  error: getPeopleErorr(state),
  list: getPeopleList(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      fetchPeople,
    },
    dispatch,
  )

export const PeoplePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeoplePage)

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type ConnectProps = StateProps & DispatchProps
