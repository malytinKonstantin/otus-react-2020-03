import { sortBy, prop, last } from 'ramda'
import { compose } from './compose'

type Team = {
  name: string
  score: number
}

export const getTopName = (teams: Team[]): string => {
  const topTeam = teams.reduce(
    (acc, team) => {
      if (acc.score < team.score) {
        return team
      }
      return acc
    },
    { score: 0, name: '' },
  )
  return topTeam.name
}

export const getTopNameR = compose(prop('name'), last, sortBy(prop('score')))
