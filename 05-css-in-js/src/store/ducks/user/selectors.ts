import { createSelector } from '@reduxjs/toolkit'
import type { AppState } from '@/store'

export const getIsAuthorizedUser = createSelector(
  (state: AppState) => state.user.isAuthorized,
  (isAuthorized) => isAuthorized,
)

export const getIsAuthorizingUser = createSelector(
  (state: AppState) => state.user.isAuthorizing,
  (isAuthorizing) => isAuthorizing,
)

export const getAuthorizationError = createSelector(
  (state: AppState) => state.user.error,
  (error) => error,
)

export const getUser = createSelector(
  (state: AppState) => state.user.data,
  (data) => data,
)
