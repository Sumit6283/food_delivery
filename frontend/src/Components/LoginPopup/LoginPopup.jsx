import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("LogIn")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="LogIn"?<></>:<input type="text" placeholder='your name' required />}
                <input type="email" placeholder='your email' required/>
                <input type="password" placeholder='Password' required />
            </div>   
                <button> {currState==='SignUp'?'Create Account':'Login'}</button>
                <div className="login-popip-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to terms and conditions</p>
                </div>
                {currState==="LogIn"?<p>Create a new account? <span onClick={()=>setCurrState("SignUp")}>Click Here</span></p>:<p>Already have an account <span onClick={()=>setCurrState("LogIn")}>LogIn Here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup