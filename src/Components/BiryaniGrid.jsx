import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"; // MUI Icon
import { addToCart } from '../features/cartSlice';
import { useDispatch } from "react-redux";


const biryaniData = [
  {
    id: 44,
    name: "BOGO 2 x Veg Biryanis",
    originalPrice: "₹798",
    price: "529",
    description: "Mix and match any two veg dum biryanis of your choice.",
    orders: "749 People order in last week",
    badge: "Bestseller",
    badgeColor: "bg-green-500",
    imgUrl: "./Images/19.PNG", // Image URL for Veg Biryani
    qnty:1
  },
  {
    id: 45,
    name: "BOGO 2 x Non Veg Biryanis",
    originalPrice: "₹998",
    price: "589",
    description: "Mix and match any two chicken dum biryanis of your choice.",
    orders: "957 People order in last week",
    badge: "Bestseller",
    badgeColor: "bg-green-500",
    imgUrl: "./Images/18.JPEG", // Image URL for Non-Veg Biryani
    qnty:1
  },
  {
    id: 46,
    name: "BOGO 2 x Biryanis (Veg/Non-Veg)",
    originalPrice: "₹898",
    price: "559",
    description: "Mix and match any one veg and one non-veg biryani of your choice.",
    orders: "611 People order in last week",
    badge: "Limited Edition", // Badge added for the 3rd item
    badgeColor: "bg-yellow-500",
    imgUrl: "./Images/20.JPEG", // Image URL for Veg/Non-Veg Biryani
    qnty:1
  },
  {
    id: 47,
    name: "BOGO 2 x Paneer Biryanis",
    originalPrice: "₹898",
    price: "599",
    description: "Mix and match any two paneer dum biryanis of your choice.",
    orders: "523 People order in last week",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    imgUrl: "./Images/21.WEBP", // Image URL for Paneer Biryani
    qnty:1
  },
  {
    id: 48,
    name: "BOGO 2 x Mutton Biryanis",
    originalPrice: "₹1198",
    price: "899",
    description: "Mix and match any two mutton dum biryanis of your choice.",
    orders: "429 People order in last week",
    badge: "Limited Offer",
    badgeColor: "bg-red-500",
    imgUrl: "./Images/22.JPEG", // Image URL for Mutton Biryani
    qnty:1
  },
];

const BiryaniGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = (item) => {
      dispatch(addToCart(item));
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
                src={item.imgUrl}
                alt={item.name}
                className="h-60 w-full object-cover"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-500 line-through">{item.originalPrice}</p>
                <p className="text-xl font-semibold text-yellow-600">{item.price}</p>
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
