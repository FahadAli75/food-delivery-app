import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import Fooditem from './Fooditem'

const FoodDisplay = ({category}) => {

  const { food_list } = useContext(StoreContext)

  return (
    <div className="px-6 md:px-12 py-10">
      
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-9">
          Top Dishes </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
                    {food_list
                       .filter(item => category === "All" || category === item.category)
                       .map((item, index) => (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
                   
        </div>
      </div>
    </div>
  )
}

export default FoodDisplay