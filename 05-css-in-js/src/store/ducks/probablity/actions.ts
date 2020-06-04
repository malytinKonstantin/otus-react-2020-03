import { createAction } from '@reduxjs/toolkit'

export const testProbablity = createAction('TEST_PROBABLITY', (arg1, arg2) => ({
  meta: {
    probablity: 0.5,
  },
  payload: {
    arg1,
    arg2,
  },
}))
