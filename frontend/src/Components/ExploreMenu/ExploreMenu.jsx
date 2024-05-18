import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets.js'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore Our menu</h2>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minima voluptas voluptatibus, assumenda quaerat doloremque? Quis doloribus libero nemo sunt commodi, dolore neque, debitis recusandae corporis laudantium explicabo! Consequatur, adipisci.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'> 
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu