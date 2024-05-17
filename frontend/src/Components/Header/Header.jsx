import React from 'react'
import './Header.css'
import header_img from '../../assets/header_img.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
              <h2>Order your favourite food here</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, ratione quos maiores corporis illum inventore est vel ab quo? Quae, rerum molestias. Incidunt iure consequatur corrupti fugiat ipsam in veniam!</p>
              <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header