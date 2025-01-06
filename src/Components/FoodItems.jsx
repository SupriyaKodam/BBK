import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FoodItems = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of food items with name, image, and category
  const foodData = [
    { name: "Pizza", imageUrl: "/Images/6.JPEG", category: "Non-Veg" },
    { name: "Burger", imageUrl: "/Images/7.JPEG", category: "Non-Veg" },
    { name: "Pasta", imageUrl: "/Images/8.JPEG", category: "Veg" },
    { name: "Sushi", imageUrl: "/Images/9.JPEG", category: "Non-Veg" },
    { name: "Tacos", imageUrl: "/Images/10.JPEG", category: "Veg" },
    { name: "Salad", imageUrl: "/Images/11.JPEG", category: "Veg" },
    { name: "Sandwich", imageUrl: "/Images/12.JPEG", category: "Veg" },
    { name: "Steak", imageUrl: "/Images/13.JPEG", category: "Non-Veg" },
    { name: "Ice Cream", imageUrl: "/Images/14.JPEG", category: "Best Seller" },
    { name: "Fries", imageUrl: "/Images/15.JPEG", category: "Veg" },
    { name: "Noodles", imageUrl: "/Images/16.JPEG", category: "Best Seller" },
    { name: "Curry", imageUrl: "/Images/17.JPEG", category: "Veg" },
    { name: "Burrito", imageUrl: "/Images/a.JPEG", category: "Non-Veg" },
  ];

  // Filter food items based on selected category
  const filteredFoodData =
    selectedCategory === "All"
      ? foodData
      : foodData.filter((item) => item.category === selectedCategory);

  return (
    <div className="mt-10 bg-yellow-50 p-10">
      {/* Categories Filter */}
      <div className="flex flex-row items-center justify-between mt-10 mb-5">
        <h1 className="font-bold text-3xl p-3">Categories</h1>
        <div className="flex flex-row space-x-3 px-10">
          <button
            onClick={() => setSelectedCategory("Veg")}
            className={`rounded-xl font-bold text-2xl px-3 py-2 border-2 ${
              selectedCategory === "Veg"
                ? "bg-green-600 text-white"
                : "text-green-600 border-green-600"
            }`}
          >
            Veg
          </button>
          <button
            onClick={() => setSelectedCategory("Non-Veg")}
            className={`rounded-xl font-bold text-2xl px-3 py-2 border-2 ${
              selectedCategory === "Non-Veg"
                ? "bg-red-600 text-white"
                : "text-red-600 border-red-600"
            }`}
          >
            Non-Veg
          </button>
          <button
            onClick={() => setSelectedCategory("Best Seller")}
            className={`rounded-xl font-bold text-2xl px-3 py-2 border-2 ${
              selectedCategory === "Best Seller"
                ? "bg-yellow-600 text-white"
                : "text-yellow-600 border-yellow-600"
            }`}
          >
            Best Seller
          </button>
        </div>
      </div>

      {/* React Slick Slider for Food Items */}
      <Slider {...settings}>
        {filteredFoodData.map((food, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-yellow-100 p-4 rounded-lg shadow-md justify-center"
          >
            <img
              src={food.imageUrl}
              alt={food.name}
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h3 className="font-semibold text-xl text-center">{food.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FoodItems;
