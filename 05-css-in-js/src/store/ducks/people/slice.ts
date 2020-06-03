import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { PeopleItem } from './types'

type InitialState = {
  isFetching: boolean
  isFetched: boolean
  error: string | null
  data: PeopleItem[]
}

const initialState: InitialState = {
  isFetching: false,
  isFetched: false,
  error: null,
  data: [],
}

export const fetchPeople = createAsyncThunk<PeopleItem[]>(
  'people/fetch',
  async () => {
    const {
      data: { results },
    } = await axios.get('https://swapi.dev/api/people')
    return results
  },
)

const people = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPeople.pending.toString()]: (state) => {
      state.isFetching = true
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

export const peaopleActons = people.actions

export const peopleReducer = people.reducer
