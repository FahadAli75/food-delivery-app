import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);
   const navigate = useNavigate();

  return (
    <form className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">

      {/* LEFT SIDE */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Delivery Information</h2>

        <div className="flex flex-col gap-4">

          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="First name" 
              className="border p-3 rounded w-full outline-none focus:border-orange-400"
            />
            <input 
              type="text" 
              placeholder="Last name" 
              className="border p-3 rounded w-full outline-none focus:border-orange-400"
            />
          </div>

          <input 
            type="email" 
            placeholder="Email" 
            className="border p-3 rounded outline-none focus:border-orange-400"
          />

          <input 
            type="text" 
            placeholder="Street" 
            className="border p-3 rounded outline-none focus:border-orange-400"
          />

          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="City" 
              className="border p-3 rounded w-full outline-none focus:border-orange-400"
            />
            <input 
              type="text" 
              placeholder="State" 
              className="border p-3 rounded w-full outline-none focus:border-orange-400"
            />
          </div>

          <input 
            type="text" 
            placeholder="Phone Number" 
            className="border p-3 rounded outline-none focus:border-orange-400"
          />

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-gray-50 p-6 rounded-lg shadow h-fit">

        <h2 className="text-xl font-bold mb-4">Cart Totals</h2>

        <div className="space-y-3">

          <div className="flex justify-between">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold">${getTotalCartAmount()}</p>
          </div>

          <hr className="border-gray-300"/>

          <div className="flex justify-between">
            <p className="text-gray-600">Delivery Fee</p>
            <p className="font-semibold">$2</p>
          </div>

          <hr className="border-gray-300"/>

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-orange-500">
              ${getTotalCartAmount() + 2}
            </span>
          </div>

        </div>

        <button  onClick={()=>navigate('/success')}
          className="mt-6 w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition">
          PROCEED TO PAYMENT
        </button>

      </div>

    </form>
  )
}

export default PlaceOrder