import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './ducks'
import { thunk, probablity } from './middlewares'

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, probablity],
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
