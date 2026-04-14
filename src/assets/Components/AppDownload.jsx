import React from 'react'
import { assets } from '../assets'

const AppDownload = () => {
  return (
    <div className="w-full py-6 mt-6">

      <div className="max-w-5xl mx-auto px-6 text-center">

        
        <p className="text-2xl md:text-3xl font-semibold text-gray-800">
          For Better Experience Download <br className="hidden md:block"/>
          <span className="text-orange-500"> Tomato App</span>
        </p>

        
        <div className="flex justify-center gap-5 mt-8">
          <img 
            src={assets.play_store} 
            alt="Play Store"
            className="w-40 cursor-pointer hover:scale-105 transition duration-300"
          />
          <img 
            src={assets.app_store} 
            alt="App Store"
            className="w-40 cursor-pointer hover:scale-105 transition duration-300"
          />
        </div>

      </div>

    </div>
  )
}

export default AppDownload