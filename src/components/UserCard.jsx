import React from 'react'
import { useDispatch } from 'react-redux';

import './user-card.css';
import UserAvatar from './UserAvatar';
import { addFriend, removeFriend } from '../ducks/app';
import Button from './Button';

const UserCard = ({ user, isUserInFriends }) => {
  const { name: { title, first, last }, email, dob: { age } } = user;

  const dispatch = useDispatch();

  const addToFriends = () => {
    dispatch(addFriend(user));
  }

  const removeFromFriends = () => {
    dispatch(removeFriend(user));
  }

  return (
    <div className={`user-card ${isUserInFriends ? 'friend' : ''}`}>
      <UserAvatar user={user} />
      <div className="contacts">
        <div className="full-name">{title} {first} {last}</div>
        <a href={`mailto:${email}`} className="email">{email}</a>
      </div>
      <div className="age">Age: {age}</div>
      {
        isUserInFriends
          ? <Button className="friend-button" onClick={removeFromFriends} label="Remove friend"/>
          : <Button className="friend-button" onClick={addToFriends} label="Add to friends"/>
      }
    </div>
  )
}

export default UserCard
