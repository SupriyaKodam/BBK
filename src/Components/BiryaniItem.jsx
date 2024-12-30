import React from "react";
import { useNavigate } from "react-router-dom";

const BiryaniItem = ({ item }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/go", { state: item }); // Navigate to the details page with the item data
  };

  return (
    <div className="border p-4 rounded-lg">
      <img src={item.imgUrl} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
      <p className="text-sm text-gray-600">{item.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold">{item.price}</span>
        <button
          onClick={handleAddToCart}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BiryaniItem;
