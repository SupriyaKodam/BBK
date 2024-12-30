import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing navigate from react-router-dom

const coolDrinksData = [
  {
    id: 1,
    name: "Cold Coffee",
    originalPrice: "₹180",
    discountedPrice: "₹150",
    description: "Refreshing chilled coffee to beat the heat.",
    orders: "387 People ordered last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl: "./Images/s.JPEG",
  },
  {
    id: 2,
    name: "Lemon Soda",
    originalPrice: "₹99",
    discountedPrice: "₹79",
    description: "Tangy lemon soda to refresh you.",
    orders: "214 People ordered last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl: "./Images/u.JPEG",
  },
  {
    id: 3,
    name: "Fruit Punch",
    originalPrice: "₹120",
    discountedPrice: "₹99",
    description: "A delightful mix of tropical fruits.",
    orders: "275 People ordered last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl: "./Images/p.JPEG",
  },
  {
    id: 4,
    name: "Ice Tea",
    originalPrice: "₹100",
    discountedPrice: "₹80",
    description: "Refreshing iced tea with lemon.",
    orders: "398 People ordered last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl: "./Images/r.JPEG",
  },
  {
    id: 5,
    name: "Mango Shake",
    originalPrice: "₹150",
    discountedPrice: "₹130",
    description: "Sweet and creamy mango shake.",
    orders: "315 People ordered last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl: "./Images/i.JPEG",
  },
  {
    id: 6,
    name: "Soft Drink",
    originalPrice: "₹60",
    discountedPrice: "₹50",
    description: "Your favorite carbonated drink.",
    orders: "492 People ordered last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl: "./Images/y.JPEG",
  },
];

const CoolDrinks = () => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    navigate("/details", { state: item }); // Navigate to details page and pass selected item
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold p-3 mb-3">Cool Drinks</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coolDrinksData.map((item) => (
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
                alt={item.name}
                className="h-60 w-full object-cover"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-500 line-through">{item.originalPrice}</p>
                <p className="text-xl font-semibold text-yellow-600">{item.discountedPrice}</p>
                <p className="text-gray-700 my-2">{item.description}</p>
                <p className="text-sm text-gray-500">{item.orders}</p>
                {/* Add to Cart Button */}
                <div className="mt-4 flex justify-center items-center cursor-pointer">
                  <button
                    onClick={() => handleAddToCart(item)} // Add item to cart
                    className="text-white text-xl font-bold p-3 w-full bg-yellow-500 rounded-lg"
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

export default CoolDrinks;
