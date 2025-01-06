import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { addToCart } from '../features/cartSlice';
import { useDispatch } from "react-redux";

const FoodGrid = () => {
  const dispatch = useDispatch();
  
  const foodData = [
    // Biryani items
    {
      id: 33,
      name: "BOGO 2 x Veg Biryanis",
      originalPrice: "₹798",
      price: "529",
      description: "Mix and match any two veg dum biryanis of your choice.",
      orders: "749 People order in last week",
      badge: "Bestseller",
      badgeColor: "bg-green-500",
      imgUrl: "./Images/b.JPEG", // Image URL for Veg Biryani
      qnty:1
    },
    {
      id: 34,
      name: "BOGO 2 x Non Veg Biryanis",
      originalPrice: "₹998",
      price: "589",
      description: "Mix and match any two chicken dum biryanis of your choice.",
      orders: "957 People order in last week",
      badge: "Bestseller",
      badgeColor: "bg-green-500",
      imgUrl: "./Images/c.JPEG", // Image URL for Non-Veg Biryani
      qnty:1
    },
    {
      id: 35,
      name: "BOGO 2 x Biryanis (Veg/Non-Veg)",
      originalPrice: "₹898",
      price: "559",
      description: "Mix and match any one veg and one non-veg biryani of your choice.",
      orders: "611 People order in last week",
      badge: "Limited Edition", // Badge added for the 3rd item
      badgeColor: "bg-yellow-500",
      imgUrl: "./Images/d.JPEG", // Image URL for Veg/Non-Veg Biryani
      qnty:1
    },
    {
      id: 36,
      name: "BOGO 2 x Paneer Biryanis",
      originalPrice: "₹898",
      price: "599",
      description: "Mix and match any two paneer dum biryanis of your choice.",
      orders: "523 People order in last week",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      imgUrl: "./Images/e.JPEG", // Image URL for Paneer Biryani
      qnty:1
    },
    {
      id: 37,
      name: "BOGO 2 x Mutton Biryanis",
      originalPrice: "₹1198",
      price: "899",
      description: "Mix and match any two mutton dum biryanis of your choice.",
      orders: "429 People order in last week",
      badge: "Limited Offer",
      badgeColor: "bg-red-500",
      imgUrl: "./Images/f.JPEG", // Image URL for Mutton Biryani
      qnty:1
    },
  
    // Adding Bread and Extras items
    {
      id: 38,
      name: "Rulamakoti",
      originalPrice: "₹299",
      price: "199",
      description: "Delicious traditional bread served with biryani.",
      orders: "323 People order in last week",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      imgUrl: "./Images/g.JPEG", // Image URL for Rulamakoti
      qnty:1
    },
    {
      id: 39,
      name: "Raita",
      originalPrice: "₹129",
      price: "99",
      description: "Refreshing yogurt-based side dish.",
      orders: "520 People order in last week",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      imgUrl: "./Images/h.JPEG", // Image URL for Raita
      qnty:1
    },
    {
      id: 40,
      name: "Tandoori Naan",
      originalPrice: "₹150",
      price: "120",
      description: "Soft and fluffy naan bread baked in a tandoor.",
      orders: "412 People order in last week",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      imgUrl: "./Images/b.JPEG", // Image URL for Tandoori Naan
      qnty:1
    },
    {
      id: 41,
      name: "Garlic Naan",
      originalPrice: "₹180",
      price: "150",
      description: "Garlic-infused naan bread, perfect with biryani.",
      orders: "358 People order in last week",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      imgUrl: "./Images/c.JPEG", // Image URL for Garlic Naan
      qnty:1
    },
    {
      id: 42,
      name: "Mango Lassi",
      originalPrice: "₹120",
      price: "90",
      description: "Creamy mango yogurt drink, a perfect match with biryani.",
      orders: "312 People order in last week",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      imgUrl: "./Images/d.JPEG", // Image URL for Mango Lassi
      qnty:1
    },
    {
      id: 43,
      name: "Masala Papad",
      originalPrice: "₹75",
      price: "55",
      description: "Crispy papad with a spicy seasoning.",
      orders: "246 People order in last week",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      imgUrl: "./Images/e.JPEG", // Image URL for Masala Papad
      qnty:1
    },
  ];
  
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    // Navigate to the details page and pass the item data via state
    navigate('/details', { state: item });
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold p-3 mb-3">Biryani, Breads & Extras</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodData.map((item) => (
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
                {/* Add to Cart Button */}
                <div className="mt-4 flex justify-center items-center cursor-pointer">
                  <button
                    className="text-white text-xl font-bold p-3 w-full bg-yellow-500 rounded-lg"
                    onClick={() => handleAddToCart(item)} // Pass the item to the handler
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

export default FoodGrid;
