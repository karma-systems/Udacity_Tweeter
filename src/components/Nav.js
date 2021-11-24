import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/new' activeClassName='active'>
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}