import React from 'react'
import UsersList from '../../components/UsersList'
import { useSelector } from 'react-redux'

const Friends = () => {
  const friends = useSelector(state => state.app.friends);

  return (
    <div>
      <UsersList users={friends} />
    </div>
  )
}

export default Friends
