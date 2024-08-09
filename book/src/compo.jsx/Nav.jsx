import React from 'react'

function Nav() {
  return (
    <div className='nav-container'>
      <div className="logo-holder">
        <img src="logo.webp" alt="" className="logo" />
      </div>
      <div className="btn-holder">
        <a href="#" className="search-icon"><i class="fa fa-search" aria-hidden="true"></i></a>
        <a href="#" className="shop-icon"><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
        <button className="join">Join</button>
        <button className="seller">Become a Seller</button>
      </div>
    </div>
  )
}

export default Nav
