import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'

const Navbar = ({ setShowlogin }) => {

  const { getTotalCartAmount } = useContext(StoreContext);
  const Navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 w-full z-50 
    bg-white/70 backdrop-blur-md shadow-lg border-b border-white/20">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/">
          <img 
            src={assets.logo} 
            alt="logo" 
            className="w-28 cursor-pointer hover:scale-105 transition"
          />
        </Link>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
  <li onClick={()=> Navigate('/')}
     className="relative cursor-pointer group">
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 
    transition-all group-hover:w-full"></span>
  </li>

  <li onClick={()=>Navigate('/resturant')}
  className="relative cursor-pointer group">
    Restaurants
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 
    transition-all group-hover:w-full"></span>
  </li>

  <li  
  className="relative cursor-pointer group">
    Deals 
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 
    transition-all group-hover:w-full"></span>
  </li>

  <li  onClick={()=> Navigate('/cart')}
  className="relative cursor-pointer group">
    Orders
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 
    transition-all group-hover:w-full"></span>
  </li>

  <li onClick={()=>Navigate('/contact')}
  className="relative cursor-pointer group">
    Contact
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 
    transition-all group-hover:w-full"></span>
  </li>
</ul>

        <div className="flex items-center gap-6">
<input
  type="text"
  placeholder="Search restaurant..."
  className="border px-3 py-2 rounded-xl w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-orange-400"
/>

          <div className="relative cursor-pointer">
            <Link to="/cart">
              <img 
                src={assets.basket_icon} 
                alt="basket" 
                className="w-6 hover:scale-110 transition"
              />
            </Link>

            {getTotalCartAmount() > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            )}
          </div>

          <button 
            onClick={() => setShowlogin(true)}
            className="bg-orange-500/90 backdrop-blur px-5 py-2 rounded-full 
            text-white hover:bg-orange-600 transition shadow-md"
          >
            Sign In
          </button>

        </div>
      </div>
    </div>
  )
}

export default Navbar