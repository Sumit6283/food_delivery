import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import basket_icon from '../../assets/basket_icon.png'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
       <Link to={'/'}> <div className="logo">
            <img src={logo} alt="" />
        </div> </Link>
        <ul className='links'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className="right">
            <img src={search_icon} alt="" />
            <div className="navbar-search-icon">
             <Link to={'/cart'}><img src={basket_icon} alt="" /></Link>
              <div className="dot">2</div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar