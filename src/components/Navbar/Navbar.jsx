import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Storecontext } from '../context/Context'

const Navbar = ({setshowlogin}) => {
  const [menu, setmenu] = useState("home")
  const {getTotalCartAmount}= useContext(Storecontext)
  return (
    <div className='navbar'>
      <Link to={"/"}><img src={assets.logo} alt="" className='logo' /></Link>
      
      <ul className="navbar-menu">
        <Link to={"/"}><li className={menu === 'home' ? 'active' : ''} onClick={() => setmenu("home")}>home</li></Link>
        <a href="#explore-menu"><li className={menu === 'menu' ? 'active' : ''} onClick={() => setmenu('menu')}>menu</li></a>
        <a href="#app-download"><li className={menu === 'mobile-app' ? 'active' : ''} onClick={() => setmenu('mobile-app')}>mobile-app</li></a>
        <a href="#footer"><li className={menu === 'contact' ? 'active' : ''} onClick={() => setmenu('contact')}> contact</li></a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setshowlogin(true)}>sign-in</button>
      </div>

    </div>
  )
}

export default Navbar
