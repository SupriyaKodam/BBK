import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const foodRoles = [
  {
    id: 1,
    title: 'Chicken Roll 1',
    originalPrice: '₹250',
    discountedPrice: '₹199',
    description: 'Spicy grilled chicken wrapped in a soft flatbread.',
    orders: '124 People ordered last week',
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
    imageUrl: './Images/roll.PNG',
  },
  {
    id: 2,
    title: 'Chicken Roll 2',
    originalPrice: '₹300',
    discountedPrice: '₹250',
    description: 'Delicious chicken roll with lettuce and creamy sauce.',
    orders: '189 People ordered last week',
    badge: 'Bestseller',
    badgeColor: 'bg-green-500',
    imageUrl: './Images/roll.PNG',
  },
  {
    id: 3,
    title: 'Chicken Roll 3',
    originalPrice: '₹350',
    discountedPrice: '₹299',
    description: 'Tender chicken wrapped with fresh vegetables and sauces.',
    orders: '150 People ordered last week',
    badge: 'Limited Offer',
    badgeColor: 'bg-red-500',
    imageUrl: './Images/roll.PNG',
  },
];

const FoodRolesInRow = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = (item) => {
    navigate("/details", { state: item }); // Navigate to details page with the dessert data as state
  };


  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold p-3 mb-3">Chicken Rolls Starting at ₹199</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodRoles.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Badge */}
              {item.badge && (
                <div
                  className={`text-white text-sm px-3 py-1 rounded-full ${item.badgeColor} w-max m-4`}
                >
                  {item.badge}
                </div>
              )}
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-60 w-full object-cover"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-500 line-through">{item.originalPrice}</p>
                <p className="text-xl font-semibold text-yellow-600">{item.discountedPrice}</p>
                <p className="text-gray-700 my-2">{item.description}</p>
                <p className="text-sm text-gray-500">{item.orders}</p>
                {/* Add to Cart Button */}
                <div className="mt-4 flex justify-center items-center cursor-pointer">
                  <button
                    className="text-white text-xl font-bold p-3 w-full bg-yellow-500 rounded-lg"
                    onClick={() => handleAddToCart(item)} // Call the function with the item data
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodRolesInRow;
