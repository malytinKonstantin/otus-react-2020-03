import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { PeopleItem } from '@/store/ducks/people/types'

export const fetchPeople = createAsyncThunk<PeopleItem[]>(
  'people/fetch',
  async () => {
    const {
      data: { results },
    } = await axios.get('https://swapi.dev/api/people')
    return results
  },
)
