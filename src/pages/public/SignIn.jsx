import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { setUser } from '../../ducks/app';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="sign-in-page">
      <input
        placeholder="Email"
        onChange={({ target: { value } }) => setEmail(value)}
        value={email}
        name="email"
        type="text"
        className="sign-in-input"
      />
      <input
        placeholder="Password"
        onChange={({ target: { value } }) => setPassword(value)} value={password}
        name="password"
        type="password"
        className="sign-in-input"
      />

      <button className="sign-in-button" onClick={() => {
        if (!email || !password) {
          alert('Invalid credentials');
          return;
        }

        const userId = `${email}:${password}`;
        localStorage.setItem('userId', userId);
        dispatch(setUser({ email, password }));
      }}>
        Sign In
      </button>
    </div>
  )
}

export default SignIn;
