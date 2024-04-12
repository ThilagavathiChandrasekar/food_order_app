import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt='' className='footer-logo' />
            <p>"Savor every bite, every moment. Taste the passion in every dish. Welcome to a culinary journey like no other."</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </div>
        <div className='footer-content-right'>
            <h2>Get In Touch</h2>
            <ul>
                <li>+1-212-486-5678</li>
                <li>contact@dinthirestaurant.com</li>
            </ul>
        </div>   
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 &copy; Dinthi.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
