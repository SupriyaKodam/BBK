
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
const dessertData = [
  {
    id: 1,
    name: "Chocolate Brownie",
    originalPrice: "₹150",
    discountedPrice: "₹120",
    description: "Rich and fudgy chocolate brownie.",
    orders: "412 People ordered last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl: "./Images/m.JPEG",
  },
  {
    id: 2,
    name: "Gulab Jamun",
    originalPrice: "₹90",
    discountedPrice: "₹70",
    description: "Soft and juicy traditional Indian dessert.",
    orders: "538 People ordered last week",
    badge: "Bestseller",
    badgeColor: "bg-green-500",
    imageUrl: "./Images/w.JPEG",
  },
  {
    id: 3,
    name: "Cheesecake",
    originalPrice: "₹250",
    discountedPrice: "₹220",
    description: "Creamy cheesecake with a buttery crust.",
    orders: "276 People ordered last week",
    badge: "Limited Edition",
    badgeColor: "bg-yellow-500",
    imageUrl: "./Images/x.JPEG",
  },
  {
    id: 4,
    name: "Rasmalai",
    originalPrice: "₹120",
    discountedPrice: "₹100",
    description: "Soft cottage cheese balls in sweetened milk.",
    orders: "314 People ordered last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl: "./Images/z.JPEG",
  },
  {
    id: 5,
    name: "Tiramisu",
    originalPrice: "₹300",
    discountedPrice: "₹270",
    description: "Classic Italian coffee-flavored dessert.",
    orders: "198 People ordered last week",
    badge: "Limited Offer",
    badgeColor: "bg-red-500",
    imageUrl:"./Images/k.JPEG",
  },
  {
    id: 6,
    name: "Ice Cream Sundae",
    originalPrice: "₹180",
    discountedPrice: "₹150",
    description: "Delicious ice cream topped with syrup and nuts.",
    orders: "489 People ordered last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl:"./Images/m.JPEG",
  },
];


const Desserts = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleAddToCart = (item) => {
    navigate("/details", { state: item }); // Navigate to details page with the dessert data as state
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold p-3 mb-3">Desserts</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dessertData.map((item) => (
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
                {/* MUI Icon */}
                <div className="mt-4 flex justify-center items-center cursor-pointer">
                  <button
                    className="text-white text-xl font-bold p-3 w-full bg-yellow-500 rounded-lg"
                    onClick={() => handleAddToCart(item)} // Trigger navigation on click
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

export default Desserts;
