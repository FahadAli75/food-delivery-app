import React from 'react'
import { assets } from '../assets'

const Home = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="relative w-full h-[90vh]">
        {/* Background Image */}
        <img 
          src={assets.header_img} 
          alt="header" 
          className="w-full h-auto py-7 rounded-xl object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0  flex flex-col 
        justify-center items-start px-10 md:px-20 text-white">
          
         
            <h2 className="font-medium text-[max(4.5vw,22px)] ">
            Order Your Favourite Food Here </h2>

          <p className="mt-6 max-w-xl text-gray-200 text-lg">
            Choose from a diverse menu featuring delicious meals crafted with
            the finest ingredients. Fast delivery and great taste guaranteed.
          </p>
          
            
          <button className="mt-8 bg-white hover:bg-slate-50 text-black 
          transition duration-300 px-4 py-2 rounded-full text-lg font-medium shadow-lg">
            View Menu
          </button>

        </div>
      </div>

    </div>
  )
}

export default Home