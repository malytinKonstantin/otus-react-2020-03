import { sortBy, prop, last } from 'ramda'
import { compose } from './compose'

type Team = {
  name: string
  score: number
}

export const getTopName = (teams: Team[]): string => {
  const sorted = [...teams].sort((a: Team, b: Team) => a.score - b.score)
  const topTeam = sorted[sorted.length - 1]
  return topTeam.name
}

export const getTopNameR = compose(prop('name'), last, sortBy(prop('score')))
