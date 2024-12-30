import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"; // MUI Icon

const biryaniData = [
  {
    id: 1,
    name: "BOGO 2 x Veg Biryanis",
    originalPrice: "₹798",
    discountedPrice: "₹529",
    description: "Mix and match any two veg dum biryanis of your choice.",
    orders: "749 People order in last week",
    badge: "Bestseller",
    badgeColor: "bg-green-500",
    imageUrl: "./Images/19.PNG", // Image URL for Veg Biryani
  },
  {
    id: 2,
    name: "BOGO 2 x Non Veg Biryanis",
    originalPrice: "₹998",
    discountedPrice: "₹589",
    description: "Mix and match any two chicken dum biryanis of your choice.",
    orders: "957 People order in last week",
    badge: "Bestseller",
    badgeColor: "bg-green-500",
    imageUrl: "./Images/18.JPEG", // Image URL for Non-Veg Biryani
  },
  {
    id: 3,
    name: "BOGO 2 x Biryanis (Veg/Non-Veg)",
    originalPrice: "₹898",
    discountedPrice: "₹559",
    description: "Mix and match any one veg and one non-veg biryani of your choice.",
    orders: "611 People order in last week",
    badge: "Limited Edition", // Badge added for the 3rd item
    badgeColor: "bg-yellow-500",
    imageUrl: "./Images/20.JPEG", // Image URL for Veg/Non-Veg Biryani
  },
  {
    id: 4,
    name: "BOGO 2 x Paneer Biryanis",
    originalPrice: "₹898",
    discountedPrice: "₹599",
    description: "Mix and match any two paneer dum biryanis of your choice.",
    orders: "523 People order in last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imageUrl: "./Images/21.WEBP", // Image URL for Paneer Biryani
  },
  {
    id: 5,
    name: "BOGO 2 x Mutton Biryanis",
    originalPrice: "₹1198",
    discountedPrice: "₹899",
    description: "Mix and match any two mutton dum biryanis of your choice.",
    orders: "429 People order in last week",
    badge: "Limited Offer",
    badgeColor: "bg-red-500",
    imageUrl: "./Images/22.JPEG", // Image URL for Mutton Biryani
  },
];

const BiryaniGrid = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = (item) => {
    navigate("/details", { state: item }); // Navigate to details page with the dessert data as state
  };


  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold p-3 mb-3">2 Biryani Starting at ₹529</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {biryaniData.map((item) => (
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
                    onClick={() => handleAddToCart(item)} // Navigate with item data
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

export default BiryaniGrid;
