import React from 'react';
import { useSelector } from 'react-redux';

import './users-list.css';
import UserCard from './UserCard';

const UsersList = ({ users }) => {
  const friends = useSelector(state => state.app.friends);

  return (
    <div className="users-list">
      {users.map(user => {
        const isUserInFriends = !!friends.find(({ email }) => email === user.email);
        return <UserCard isUserInFriends={isUserInFriends} key={user.email} user={user} />
      })}
    </div>
  )
}

export default UsersList
