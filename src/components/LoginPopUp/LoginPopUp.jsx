import React, { useState } from 'react'
import "./LoginPopUp.css"
import { assets } from '../../assets/assets'

const LoginPopUp = ({ setshowlogin }) => {
    const [currstate, setcurrstate]= useState("Login")
    
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currstate}</h2>
                    <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currstate==="Login"?<></>: <input type="text" placeholder='name' required/>}
                    <input type="email" placeholder='email' required/>
                    <input type="password" placeholder='password' required/>
                </div>
               <button> {currstate==="Sign up"?"Create account":"Login"}</button>
              
                <div className="login-popup-condition">
                    <input type="checkbox" />
                    <p>By continuing, i agree to the terms of use & privacy.</p>
                </div>
                {currstate ==="Login"?   <p>Create a new account?<span onClick={()=>setcurrstate("Sign up")}>Click here</span></p>
                  :<p>Already have an account?<span onClick={()=>setcurrstate("Login")}>Login</span> </p>}
             
              
            </form>

        </div>
    )
}

export default LoginPopUp
