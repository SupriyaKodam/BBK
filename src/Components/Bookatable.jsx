import React from 'react'
import PercentSharpIcon from '@mui/icons-material/PercentSharp';
import ReservationForm from './ReservationForm';

const Bookatable = () => {
  return (
    <div>
      <div className='mt-10'>
         <img src="./Images/dine.JPEG" className='w-full h-[40vh] lg:h-auto object-fill'/>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center md:space-x-5 mt-8'>
          <h1 className='text-xl font-bold'>Plan Your Dining Experience</h1>
          <button className='bg-green-500 p-3 rounded-lg font-bold text-lg'><span className='text-white'><PercentSharpIcon/></span>View Offers</button>
      </div>
      <ReservationForm/>
    </div>
  )
}

export default Bookatable
