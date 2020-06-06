import { configureStore } from '@reduxjs/toolkit'
import { rootReducer, rootSaga } from './ducks'
import { thunk, probablity } from './middlewares'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, probablity, sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
