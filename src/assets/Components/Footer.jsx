import React from 'react'
import { assets } from '../assets'

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white mt-10" >
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div className='Footer-Left'>
           <img src={assets.logo} className="w-32 mb-4"/>
           <p className="text-sm text-gray-400 ">
            Discover the best food from your favorite restaurants and get it
            delivered to your doorstep quickly and easily.</p>
            <div className="flex gap-4 mt-4 px-6 py-4">
                <img src={assets.facebook_icon} className="w-8 cursor-pointer hover:scale-110 transition"/>
                <img src={assets.linkedin_icon} className="w-8 cursor-pointer hover:scale-110 transition"/>
                <img src={assets.twitter_icon}  className="w-8 cursor-pointer hover:scale-110 transition"/>
            </div>
        </div>
        <div className='Footer-Center'>
             <h2 className="text-lg font-semibold mb-4">Company</h2>
             <ul className="text-gray-400 space-y-2">
              <li className="cursor-pointer hover:text-orange-400">Home</li>
              <li className="cursor-pointer hover:text-orange-400">About Us</li>
              <li className="cursor-pointer hover:text-orange-400">Delivery</li>
              <li className="cursor-pointer hover:text-orange-400">Privacy Policy</li>
             </ul>
        </div>
        <div className='Footer-Right'>
             <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
             <ul className="text-gray-400 space-y-2">
              <li>03122222222</li>
              <li>contact@tomato.com</li>
             </ul>
        </div>
      </div>
      <hr className="border-gray-700 my-6"/>
      <p className="text-center text-gray-400 text-sm">
        Copyright 2026 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
