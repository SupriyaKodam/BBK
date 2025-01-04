import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // useNavigate() import chesukondi
import BiryaniGrid from "./BiryaniGrid";
import Desserts from "./Desserts";
import FoodGrid from "./Breadsandextra";


const De = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate hook ni use chesukondi

  const { title, description, price, imgUrl } = location.state || {};

  // "Buy Now" button click cheste, Checkout page ki price pass cheyyadam
  const handleBuyNow = () => {
    navigate("/checkout", { state: { price: price } }); // Correct route and state pass chesi navigate cheyyandi
  };

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
    <div className="border-2 p-10 border-white mt-20">
      <div className="bg-black h-auto p-5 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 lg:p-16 gap-8 mt-20">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={imgUrl}
              alt={title}
              className="rounded-lg shadow-lg max-w-full lg:max-w-md object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-yellow-300">{title}</h1>
            <p className="text-lg text-yellow-300">{description}</p>
            <p className="text-xl font-semibold text-yellow-300">₹{price}</p>
            <div className="flex space-x-5">
              <button className="w-full sm:w-40 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none">
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow} // Trigger checkout on Buy Now
                className="w-full sm:w-40 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <BiryaniGrid />
      <Desserts />
      <FoodGrid />
    </div>
  );
};

export default De;
