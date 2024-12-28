import React from 'react'

const Categories = () => {
  return (
    <div className='hidden lg:flex lg:flex-row items-center justify-between mt-10'>
      <h1 className='font-bold text-3xl p-3'>Categories</h1>
      <div className='flex flex-row space-x-3 px-10 mb-10'>
          <button className='rounded-xl text-green-600 font-bold text-2xl px-3 py-2 border-2 border-green-600'>Veg</button>
          <button className='rounded-xl text-red-600 font-bold text-2xl px-3 py-2 border-2 border-red-600'>Non-Veg</button>
          <button className='rounded-xl text-yellow-600 font-bold text-2xl px-3 py-2 border-2 border-yellow-600'>Best Seller</button>
      </div>
    </div>
  )
}

export default Categories
