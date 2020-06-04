import React, { FC } from 'react'
import type { ConnectProps } from './PeoplePageContainer'

interface PeoplePageProps extends ConnectProps {}

export const PeoplePage: FC<PeoplePageProps> = (props) => {
  if (props.isFetching) {
    return <div>Loading...</div>
  }

  if (props.isFetched) {
    return (
      <>
        {props.list.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))}
      </>
    )
  }

  return (
    <>
      <button onClick={() => props.fetchPeople()}>
        загрузить список людей
      </button>
      <button onClick={() => props.testProbablity(111, 222)}>
        test probablity
      </button>
    </>
  )
}
