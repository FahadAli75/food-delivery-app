import React from 'react';
import { resturant_list } from '../../assets/assets';

const Restaurant = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Restaurants / Cafe / Fast Food</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resturant_list.map((rest) => (
            <div 
              key={rest.id} 
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 
              transition-transform cursor-pointer"
            >
              <img src={rest.image} alt={rest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{rest.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{rest.description}</p>
                <p className="text-sm">{rest.address}</p>
                <p className="text-sm">{rest.contact}</p>
                <span className="mt-2">⭐{rest.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurant;