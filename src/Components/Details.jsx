import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate hook
import BiryaniGrid from "./BiryaniGrid";
import Desserts from "./Desserts";
import FoodGrid from "./Breadsandextra";

const Details = () => {
  const navigate = useNavigate(); // useNavigate hook
  const location = useLocation(); // Get the location state, which contains the item data
  const { discountedPrice } = location.state || {}; // Only get price from location state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!location.state) {
    return (
      <div className="flex justify-center items-center h-screen mt-20">
        <h1 className="text-2xl font-bold text-red-500">
          No item data found. Go back and select an item.
        </h1>
      </div>
    );
  }

  // Handle Buy Now click, navigate to Checkout and pass only the price
  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        price: discountedPrice, // Only pass the price
      },
    });
  };

  return (
    <div className="border-2 p-10 border-white mt-20">
      <div className="bg-black h-auto p-5 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 lg:p-16 gap-8 mt-20">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={location.state.imageUrl} // Accessing imageUrl from the state
              alt={location.state.name} // Accessing name from the state
              className="rounded-lg shadow-lg max-w-full lg:max-w-md object-cover"
            />
          </div>

          {/* Right Section: Item Details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-yellow-300">{location.state.name}</h1>
            <p className="text-lg text-yellow-300">{location.state.description}</p>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-yellow-300">
                <span className="text-yellow-300">Price:</span> ₹{discountedPrice}
              </p>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
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

export default Details;
