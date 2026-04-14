import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-14">

      {/* Title */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Explore our Menu
        </h1>

        {/* <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Choose from a diverse menu featuring delicious meals crafted with
          the finest ingredients. Fast delivery and great taste guaranteed.
        </p> */}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-5 py-3 ">

        {menu_list.map((items, index) => {
          return (
            <div 
              key={index}
              onClick={()=>setCategory(prev => prev===items.menu_name ? "All" : items.menu_name)}
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Image */}
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-md 
              group-hover:scale-110 transition duration-300">
                <img
                       src={items.menu_image}
                       alt={items.menu_name}
                       className={`w-full h-full object-cover 
                       ${category === items.menu_name ? "" : ""}`}/>
              </div>

              {/* Name */}
              <p className="mt-3 text-gray-700 font-medium group-hover:text-red-500 transition">
                {items.menu_name}
              </p>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default ExploreMenu;