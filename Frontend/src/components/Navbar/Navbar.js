import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
         <Link to='/food_order_app'><img src={ assets.logo } className='logo' alt='' /></Link> 

        <div className='navbar-menu'>
            <ul className='navbar-menu'>
            <Link to='/food_order_app' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
            </ul>
        </div>

            <div className='navbar-right'>
              <img src={assets.search_icon} alt=''/>
                <div className='navbar-search-icon'>
                   <Link to='/food_order_app/cart'><img src={assets.basket_icon} alt=''/></Link> 
                  <div className={getTotalCartAmount===0 ? "":'dot'}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign Up</button>
            </div>

    </div>
  )
}

export default Navbar