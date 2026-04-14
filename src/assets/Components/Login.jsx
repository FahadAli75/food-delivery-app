import React, { useState } from 'react'
import { assets } from '../assets'

const Login = ({ setShowlogin }) => {

  const [currState, setCurrState] = useState("Login");
  

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <form className="bg-white p-7 rounded-2xl w-[90%] max-w-md">

        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{currState}</h2>
          <img 
            onClick={() => setShowlogin(false)} 
            src={assets.cross_icon} 
            className="w-5 cursor-pointer"
          />
        </div>

       
        <div className="flex flex-col gap-4">

          {currState === 'Sign Up' && (
            <input 
              type='text' 
              placeholder='Your Name' 
              className="border p-3 rounded outline-none focus:border-orange-400"
              required
            />
          )}

          <input 
            type='email' 
            placeholder='Your Email' 
            className="border p-3 rounded outline-none focus:border-orange-400"
            required
          />

          <input 
            type='password' 
            placeholder='Password' 
            className="border p-3 rounded outline-none focus:border-orange-400"
            required
          />

        </div>
        
        <div className="flex items-start gap-2 mt-4 text-sm text-gray-500">
          <input type='checkbox' required className="mt-1"/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

       
        <button 
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded mt-6 hover:bg-orange-600 transition"
        >
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          {currState === 'Login' ? "Create a new account?" : "Already have an account?"}

          <span 
            onClick={() => setCurrState(currState === 'Login' ? 'Sign Up' : 'Login')}
            className="text-orange-500 cursor-pointer ml-1"
          >
            {currState === 'Login' ? "Click Here" : "Login Here"}
          </span>
        </p>

      </form>
    </div>
  )
}

export default Login