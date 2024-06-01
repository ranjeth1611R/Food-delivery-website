import React from 'react'
import "./Appdowload.css"
import { assets } from '../../assets/assets'

const Appdowload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br />Tomoto App</p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

      
    </div>
  )
}

export default Appdowload
