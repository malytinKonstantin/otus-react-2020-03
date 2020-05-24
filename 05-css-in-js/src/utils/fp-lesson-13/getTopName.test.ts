import { getTopName, getTopNameR } from './getTopName'

describe('test getTopName', () => {
  const teams = [
    { name: 'Lions', score: 5 },
    { name: 'Tigers', score: 4 },
    { name: 'Bears', score: 6 },
    { name: 'Monkeys', score: 2 },
  ]

  it('find top team', () => {
    const topTeamName = getTopName(teams)
    expect(topTeamName).toBe(teams[2].name)
  })

  it('find top name with ramda', () => {
    const topTeamName = getTopNameR(teams)
    expect(topTeamName).toBe(teams[2].name)
  })
})
