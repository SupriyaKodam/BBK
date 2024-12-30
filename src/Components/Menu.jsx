import React from 'react'
import BiryaniData from './BiryaniData'
import Desserts from './Desserts'
import FoodGrid from './Breadsandextra'
import Offers from './Offers'
import Footer from './Footer'
import CityList from './CityList'

const Menu = () => {
  return (
    <div>
      <div className='mt-16'>
          <img src="./Images/Menu.PNG" className='w-full h-[40vh] lg:h-auto'/>
      </div>
      <Offers/>
      <BiryaniData/>
      <Desserts/>
      <FoodGrid/>
      <CityList/>
      <Footer/>
    </div>
  )
}

export default Menu
