import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './ducks'

const defaultMiddlewares = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [...defaultMiddlewares],
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
