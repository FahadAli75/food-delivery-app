import React from 'react'

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      
      <h2 className="text-3xl font-bold text-green-500 mb-4">
        🎉 Order Placed Successfully!
      </h2>

      <p className="text-gray-600 mb-6">
        Your food is on the way 🚚
      </p>

      <a href="/" className="bg-orange-500 text-white px-6 py-2 rounded">
        Back to Home
      </a>

    </div>
  )
}

export default Success