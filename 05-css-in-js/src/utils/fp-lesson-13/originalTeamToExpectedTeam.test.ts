import {
  originalTeamToExpectedTeam,
  originalTeamToExpectedTeamDeep,
} from './originalTeamToExpectedTeam'

describe('originalTeamToExpectedTeam test', () => {
  it('get expected team', () => {
    const originalTeam = {
      size: 15,
      name: 'Tampa Bay Roosters',
      league: 'Minor',
    }

    const expectedTeam = {
      name: 'New York Badgers',
      league: 'Minor',
      size: 15,
      roster: 25,
    }

    const result = originalTeamToExpectedTeam(originalTeam)

    expect(result).toEqual(expectedTeam)
  })

  it('get expected team deep changes', () => {
    const originalTeam = {
      name: 'Tampa Bay Roosters',
      captain: {
        name: 'Bryan Downey',
        age: 27,
      },
    }

    const expectedTeam = {
      name: 'Tampa Bay Roosters',
      captain: {
        name: 'Bryan Downey',
        age: 28,
      },
    }

    const result = originalTeamToExpectedTeamDeep(originalTeam)

    expect(result).toEqual(expectedTeam)
  })
})
