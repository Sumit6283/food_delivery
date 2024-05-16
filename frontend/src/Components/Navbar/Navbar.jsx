import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import basket_icon from '../../assets/basket_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul className='links'>
            <li>home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact us</li>
        </ul>
        <div className="right">
            <img src={search_icon} alt="" />
            <img src={basket_icon} alt="" />
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar