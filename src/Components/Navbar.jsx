import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import DiningIcon from '@mui/icons-material/Dining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-[50]">
      {/* Navbar for Small to Large Screens (Up to 1280px) */}
      <div className="flex items-center justify-between lg:hidden">
        {/* Location Section */}
        <div className="flex items-center space-x-2">
          <LocationOnIcon className="text-xl" style={{ fontSize: '36px' }} />
          <h1 className="text-xl font-bold">Select Your Location</h1>
        </div>

        {/* Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {menuOpen ? <CloseIcon className="text-2xl" /> : <MenuIcon style={{ fontSize: '36px' }} className="text-2xl" />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col items-start p-4 space-y-4 bg-gray-100 shadow-md lg:hidden">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <SearchIcon className="text-xl" />
            <span className='text-xl font-semibold'>Search</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <DiningIcon className="text-xl" />
            <span className='text-xl font-semibold'>Outlets</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <RestaurantMenuIcon className="text-xl" />
            <span className='text-xl font-semibold'>Menu</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <DinnerDiningIcon className="text-xl" />
            <span className='text-xl font-semibold'>Bulk Order</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <TableRestaurantIcon className="text-xl" />
            <span className='text-xl font-semibold'>Book a Table</span>
          </button>
        </div>
      )}

      {/* Navbar for Extra-Large Screens (1280px and above) */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Location Section */}
        <div className="flex items-center space-x-4">
          <img src="./Images/Icon.WEBP" className="w-16 h-16" alt="Logo" />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold flex items-center space-x-1">
              <LocationOnIcon className="text-xl" />
              <span>Select Your Location</span>
            </h1>
            <div className='flex space-x-1'>
            <button className="text-xl flex items-center border-2 p-px border-gray-400 rounded-2xl">
              <AccessTimeIcon style={{fontSize:"16"}}/>Change<KeyboardArrowDownIcon/>
            </button>
            </div>
          </div>
        </div>

        {/* Menu Buttons */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <SearchIcon className="text-xl" />
            <span className='text-xl font-semibold'>Search</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <DiningIcon className="text-xl" />
            <span className='text-xl font-semibold'>Outlets</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <RestaurantMenuIcon className="text-xl" />
            <span className='text-xl font-semibold'>Menu</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <DinnerDiningIcon className="text-xl" />
            <span className='text-xl font-semibold'>Bulk Order</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <TableRestaurantIcon className="text-xl" />
            <span className='text-xl font-semibold'>Book a Table</span>
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <img src="./Images/image.WEBP" className="w-8 h-6" alt="User Icon" />
          <button className="text-gray-700 hover:text-blue-600 p-3 border-2 border-black rounded-full">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
