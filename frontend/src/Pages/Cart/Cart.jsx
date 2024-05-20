import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const {cartItems,food_list,removeFromCart} = useContext(StoreContext);
  return (
    <div className='cart'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          {food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
                  return(
                    <div>
                      <div className="cart-items-title cart-items-item">
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>{item.price*cartItems[item._id]}</p>
                      </div>
                    </div>
                  )
              }
          })}
    </div>
  )
}

export default Cart