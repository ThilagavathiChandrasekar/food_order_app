import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("SignUp")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?<></>:<input type='text' placeholder='Your Name' required />}
            <input type='email' placeholder='Your Email' required />
            <input type='password' placeholder='Password' required />
        </div>
        <button>{currState === "SignUp" ? "Create account" : "Login"}</button>

        <div className='login-popup-condition'>
            <input type='checkbox' required />
            <p>Be continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {
            currState==='Login'
            ? <p>Create a new account? <span onClick={()=>setCurrState("SignUp")}>Click Here</span></p>
            : <p>Already have on account <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        }    
      </form>
    </div>
  )
}

export default LoginPopup
