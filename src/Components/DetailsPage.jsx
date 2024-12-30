import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Desserts from "./Desserts";
import FoodGrid from "./Breadsandextra";
import BiryaniGrid from "./BiryaniGrid";

const De = () => {
      useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  const location = useLocation();
  const { title, description, price, size, bestseller, orders, discountCode, imgUrl } = location.state || {};

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
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={imgUrl}
            alt={title}
            className="rounded-lg shadow-lg max-w-full lg:max-w-md object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
          <p className="text-xl font-semibold text-gray-800">₹{price}</p>
          <p className="text-lg text-gray-700">{size}</p>
          <p className="text-sm text-gray-500">{bestseller ? "Bestseller" : "Not a Bestseller"}</p>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold text-gray-800">
              <span className="text-gray-500">Discount Code:</span> {discountCode}
            </p>
            <p className="text-lg text-gray-700 line-through">
              <span className="text-gray-500">Orders:</span> {orders}
            </p>
          </div>

          <button className="w-full sm:w-40 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <Desserts/>
    <FoodGrid/>
    <BiryaniGrid/>
    </div>
  );
};

export default De;
