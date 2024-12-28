import React from "react";

const BiryaniItem = ({ item }) => {
  console.log(item);  // Check if item data is being passed correctly

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white relative">
      {item.bestseller && (
        <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
          Bestseller
        </span>
      )}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="text-sm font-bold mt-2">{item.price}</p>
      <p className="text-sm text-gray-500">
        <span>{item.size}</span> - <span>{item.servings}</span>
      </p>
      <p className="text-sm text-green-500">
        {item.orders} People ordered last week
      </p>
      <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg">
        Add +
      </button>
      <p className="text-xs text-gray-500 mt-2">
        Get Rs 120 OFF | Use code: {item.discountCode}
      </p>
    </div>
  );
};

export default BiryaniItem;
