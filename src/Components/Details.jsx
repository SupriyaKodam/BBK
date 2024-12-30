import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access the passed data
import BiryaniGrid from "./BiryaniGrid";
import Desserts from "./Desserts";
import FoodGrid from "./Breadsandextra";
import { useEffect } from "react";

const Details = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
},[]);
  const location = useLocation(); // Get the location state, which contains the item data
  const { name, description, originalPrice, discountedPrice, imageUrl } = location.state || {};

  if (!location.state) {
    return (
      <div className="flex justify-center items-center h-screen mt-20">
        <h1 className="text-2xl font-bold text-red-500">
          No item data found. Go back and select an item.
        </h1>
      </div>
    );
  }

  return (
    <div>
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 lg:p-16 gap-8 mt-20">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="rounded-lg shadow-lg max-w-full lg:max-w-md object-cover"
          />
        </div>

        {/* Right Section: Item Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-lg text-gray-600">{description}</p>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold text-gray-800">
              <span className="text-gray-500">Price:</span> ₹{discountedPrice}
            </p>
            <p className="text-lg text-gray-700 line-through">
              <span className="text-gray-500">Original Price:</span> ₹{originalPrice}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full sm:w-40 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <BiryaniGrid/>
    <Desserts/>
    <FoodGrid/>
    </div>
  );
};

export default Details;
