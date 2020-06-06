import type { InitialState, User } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
  isAuthorized: false,
  isAuthorizing: false,
  data: null,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<{ user: User }>) => {
      state.isAuthorizing = true
      return state
    },
    loginSuccess: (state, action: PayloadAction<{ user: User }>) => {
      const {
        payload: { user },
      } = action
      state.isAuthorized = true
      state.isAuthorizing = false
      state.data = user
      return state
    },
    loginFailure: (state, action: PayloadAction<{ error: string }>) => {
      state.isAuthorizing = false
      state.error = action.payload.error
      return state
    },
    logout: () => {
      return { ...initialState }
    },
  },
})

export const userActions = userSlice.actions

export const userReducer = userSlice.reducer
