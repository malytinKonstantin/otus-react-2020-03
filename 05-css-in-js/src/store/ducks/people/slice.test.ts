import { peopleReducer } from './slice'
import { fetchPeople } from './thunks'

describe('test people reducer', () => {
  it(`action type ${fetchPeople.pending.toString()}`, () => {
    const state = peopleReducer(
      {
        isFetching: false,
        isFetched: false,
        error: null,
        data: [],
      },
      {
        type: fetchPeople.pending.toString(),
        meta: { requestId: 'vMWmHtVnbjQgGhAZgzsyD' },
      },
    )

    expect(state).toEqual({
      isFetching: true,
      isFetched: false,
      error: null,
      data: [],
    })
  })

  it(`action type ${fetchPeople.fulfilled.toString()}`, () => {
    const actionPayload = [
      {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a',
        homeworld: 'http://swapi.dev/api/planets/1/',
        films: ['http://swapi.dev/api/films/1/'],
        species: ['http://swapi.dev/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:10:51.357000Z',
        edited: '2014-12-20T21:17:50.309000Z',
        url: 'http://swapi.dev/api/people/2/',
      },
    ]

    const state = peopleReducer(
      { isFetching: true, isFetched: false, error: null, data: [] },
      {
        type: fetchPeople.fulfilled.toString(),
        payload: actionPayload,
        meta: { requestId: 'vMWmHtVnbjQgGhAZgzsyD' },
      },
    )

    expect(state).toEqual({
      isFetching: false,
      isFetched: true,
      error: null,
      data: [...actionPayload],
    })
  })

  it(`action type ${fetchPeople.rejected.toString()}`, () => {
    const errorMessage = 'test error message'

    const state = peopleReducer(
      { isFetching: true, isFetched: false, error: null, data: [] },
      {
        type: fetchPeople.rejected.toString(),
        error: {
          message: errorMessage,
        },
      },
    )

    expect(state).toEqual({
      isFetching: false,
      isFetched: false,
      data: [],
      error: errorMessage,
    })
  })
})
