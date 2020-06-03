import { createSelector } from '@reduxjs/toolkit'
import type { AppState } from '@/store'

export const getPeopleIsFetching = createSelector(
  (state: AppState) => state.people.isFetching,
  (isFetching) => isFetching,
)

export const getPeopleIsFetched = createSelector(
  (state: AppState) => state.people.isFetched,
  (isFetched) => isFetched,
)

export const getPeopleList = createSelector(
  (state: AppState) => state.people.data,
  (data) => data,
)

export const getPeopleErorr = createSelector(
  (state: AppState) => state.people.error,
  (error) => error,
)
