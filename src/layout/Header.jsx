import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getRoutes } from '../Routes'
import { setUser } from '../ducks/app';

const Header = ({ onUserLogout }) => {
  const routes = getRoutes().filter(route => route.path);
  const dispatch = useDispatch();

  const userId = localStorage.getItem('userId');

  return (
    <div className="header-container">
      {routes.map(route => <Link className="header-item" key={route.path} to={route.path}>{route.label}</Link>)}
      {userId ? <button onClick={() => {
        localStorage.removeItem('userId');
        dispatch(setUser(null));
      }} className="sign-out-button">Sign Out</button> : null}
    </div>
  )
}

export default Header
