import type { InitialState } from './types'
import { createSlice } from '@reduxjs/toolkit'
import { fetchPeople } from './thunks'

const initialState: InitialState = {
  isFetching: false,
  isFetched: false,
  error: null,
  data: [],
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPeople.pending.toString()]: (state) => {
      state.isFetching = true
      state.isFetched = false
      state.error = null
      return state
    },
    [fetchPeople.fulfilled.toString()]: (state, action) => {
      state.isFetching = false
      state.isFetched = true
      state.data = action.payload
      return state
    },
    [fetchPeople.rejected.toString()]: (state, action) => {
      state.isFetched = false
      state.isFetching = false
      state.error = action.error.message
      return state
    },
  },
})

export const peaopleActons = peopleSlice.actions

export const peopleReducer = peopleSlice.reducer
