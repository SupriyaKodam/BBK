import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search'; import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { useNavigate } from 'react-router-dom';

const Navbardown = () => {
  const navigate=useNavigate();
  return (
    <div className='lg:hidden flex flex-col items-center justify-center'>
      <button className='text-white md:p-2 bg-red-600 rounded-md'>Flat 25% OFF</button>
      <div className='flex flex-row items-center justify-center mb-3'>
        <button className='text-white md:p-2 bg-green-600 md:rounded-md'><DeliveryDiningIcon style={{fontSize:"40"}}className='p-2' onClick={()=>navigate('bulk')}/>Delivery</button>
        <button className='text-white md:p-2 bg-yellow-600 md:rounded-md'><ShoppingBagIcon style={{fontSize:"40"}} className='p-2' onClick={()=>navigate('/menu')}/>Takeaway Select Store</button>
        <button className='text-white md:p-2 bg-pink-600 md:rounded-md'><DinnerDiningIcon style={{fontSize:"40"}} className='p-2' onClick={()=>navigate('/bookatable')}/>Book a Table Select Store</button>
      </div>
      <div className='flex flex-row items-start space-x-3 px-px md:px-3 mb-3'>
         <SearchIcon style={{fontSize:"40"}}/>
         <button className='text-green-600 p-2 border-2 border-green-600 rounded-md'>Veg</button>
         <button className='text-red-600 p-2 border-2 border-green-600 rounded-md'>Non-Veg</button>
      </div>
    </div>
  )
}

export default Navbardown
