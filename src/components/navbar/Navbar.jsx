import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navContainer">
      <Link to="/" style={{color:"inherit", textDecoration: "none"}}>
      <span className="logo">Booking.com</span>
      </Link>
      <div className="navItems">
        <button className="navBtn">Register</button>
        <button className="navBtn">Login</button>
      </div>
    </div>
  </div>
  )
}

export default Navbar