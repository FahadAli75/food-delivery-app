import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartitems, food_list, removeTocart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      <div className="grid grid-cols-6 text-gray-600 font-medium border-b pb-3">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
       <div>
      {food_list.map((item) => {
        if (cartitems[item._id] > 0) {
          return (
            <div 
              key={item._id}
              className="grid grid-cols-6 items-center gap-4 border-b py-4 text-gray-700">
              <img src={item.image} alt="" className="w-16 rounded"/>

              <p>{item.name}</p>

              <p>${item.price}</p>

              <p>{cartitems[item._id]}</p>

              <p>${item.price * cartitems[item._id]}</p>

              <p 
                onClick={() => removeTocart(item._id)}
                className="text-red-500 cursor-pointer hover:scale-110"
              > x </p>

            </div>
          )
        }
      })}
       </div>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
  {/* Cart Totals */}
  <div className="mb-6">
    <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
    <div className="space-y-3">
      
      <div className="flex justify-between">
        <p className="text-gray-600">Subtotal</p>
        <p className="font-semibold">${getTotalCartAmount()}</p>
      </div>
      <hr className="border-gray-300"/>
      
      <div className="flex justify-between">
        <p className="text-gray-600">Delivery Fee</p>
        <p className="font-semibold">${2}</p>
      </div>
      <hr className="border-gray-300"/>
      
      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span className="text-orange-500">${getTotalCartAmount()+2}</span>
      </div>
    </div>

    <button onClick={()=>navigate('/order')}
    className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
      PROCEED TO CHECKOUT
    </button>
  </div>

  {/* Promo Code */}
  <div className="bg-gray-50 p-4 rounded">
    <p className="text-gray-700 mb-2">If you have a promo code, enter it here</p>
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Promo code"
        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none 
        focus:ring-1 focus:ring-orange-400"
      />
      <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-950 transition">
        Submit
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cart