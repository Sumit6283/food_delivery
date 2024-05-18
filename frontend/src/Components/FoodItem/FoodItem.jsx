import React from 'react'
import './FoodItem.css'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
        <div className={image}></div>
    </div>
  )
}

export default FoodItem