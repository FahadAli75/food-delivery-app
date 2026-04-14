import React from 'react'
import { assets } from '../assets'
import { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';

const Fooditem = ({ id, name, price, description, image }) => {

  
  const {cartitems,addTocart,removeTocart} = useContext(StoreContext);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md
     transition duration-300 cursor-pointer">

      {/* Food Image */}
      <div className="relative">

        <img
          className="w-full h-[180px] object-cover hover:scale-105 transition duration-300"
          src={image}  />

        {/* Add Button */}
        {!cartitems[id] ? (
          <img
            onClick={() => addTocart(id)}
            src={assets.add_icon_white}
            className="w-8 absolute bottom-3 right-3 cursor-pointer"/>
        ) : (
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full absolute bottom-3 right-3">

            <img
              onClick={() => removeTocart(id)}
              src={assets.remove_icon_red}
              className="w-6 cursor-pointer" />

            <p className="text-sm">{cartitems [id]}</p>

            <img
              onClick={() => addTocart(id)}
              src={assets.add_icon_green}
              className="w-6 cursor-pointer" />
          </div>
        )}

        {/* Discount Badge */}
        <span className="absolute bottom-3 left-3 bg-orange-100 text-orange-600
        text-xs font-semibold px-2 py-1 rounded-md">
          10% OFF
        </span>

      </div>

      {/* Content */}
      <div className="p-3 space-y-2">

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{name}</p>

          <div className="flex items-center gap-1 text-sm">
            ⭐
            <span>4.5</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          {description}
        </p>

        <p className="text-orange-500 font-semibold text-left">
          ${price}
        </p>

      </div>

    </div>
  )
}

export default Fooditem