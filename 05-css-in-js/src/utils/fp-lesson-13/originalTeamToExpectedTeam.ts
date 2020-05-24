type OriginalTeam = {
  name: string
  size: number
  league: string
}

type ExpectedTeam = {
  name: string
  league: string
  roster: number
}

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam,
): ExpectedTeam => {
  const roster = 25
  const name = 'New York Badgers'
  const { league } = originalTeam
  return { name, league, roster }
}

type Captain = {
  name: string
  age: number
}

type Team = {
  name: string
  captain: Captain
}

export const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
  const captain = { ...originalTeam.captain, age: 28 }
  return {
    ...originalTeam,
    captain,
  }
}
