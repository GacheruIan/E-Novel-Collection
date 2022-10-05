import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className='nav'>
        <NavLink exact to ="/">Home</NavLink>
        <NavLink to ="/about">About</NavLink>
        <NavLink to ="/addPageForm">Form</NavLink>
    </nav>
  )
}

export default NavBar