import React from 'react'
import Header from './Header'

const Layout = ({ children, onUserLogout }) => {
  return (
    <div className="layout">
      <Header onUserLogout={onUserLogout} />
      <div className="layout-body">
        {children}
      </div>
    </div>
  )
}

export default Layout
