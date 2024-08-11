import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="upper-content">
        <div className="info">
        <img src="logo.webp" alt="" srcset="" className='logo'/>
        <p className="location">NY State Thruway, New York, USA</p>
        <p className="email">aboutpickbazar@gmail.com</p>
        <p className="tel">tel:+129290122122</p>
        <div className="ocons">
            <a href="" className="fb"></a>
        </div>
      </div>
      <div className="explore">
        <h4>Explore</h4>
        <ul>
            <li>Shops</li>
            <li>Authors</li>
            <li>Flash Deals</li>
            <li>Coupon</li>
        </ul>
      </div>
      <div className="service">
        <h4>Our Services</h4>
        <ul>
            <li>FAQ & Helps</li>
            <li>Vendor Refund Policies</li>
            <li>Customer Refund Policies</li>
        </ul>
      </div>
     </div>
      
      <div className="subscribe">
        <h3 className="sub">Subscribe Now</h3>
        <p className="txt">Subscribe your email for newsletter and featured news based on your interest</p>
        <input type="email" name="" id="" className='in-email'/>
        <button>Subscribe</button>
      </div>
      <p className="copy">©2024 Pickbazar. Copyright © REDQ. All rights reserved worldwide. REDQ
      </p>
    </div>
  )
}

export default Footer
