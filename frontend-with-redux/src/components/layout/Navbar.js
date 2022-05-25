import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink  to="/posts/create" >Create Post</NavLink> 
      <NavLink  to="/" >Posts</NavLink> 
    </div>
  )
}

export default Navbar
