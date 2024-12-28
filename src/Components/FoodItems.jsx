import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FoodItems = () => {
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

  // Array of food items with name and image path (local images)
  const foodData = [
    { name: "Pizza", imageUrl: "/Images/6.JPEG" },
    { name: "Burger", imageUrl: "/Images/7.JPEG" },
    { name: "Pasta", imageUrl: "/Images/8.JPEG" },
    { name: "Sushi", imageUrl: "/Images/9.JPEG" },
    { name: "Tacos", imageUrl: "/Images/10.JPEG" },
    { name: "Salad", imageUrl: "/Images/11.JPEG" },
    { name: "Sandwich", imageUrl: "/Images/12.JPEG" },
    { name: "Steak", imageUrl: "/Images/13.JPEG" },
    { name: "Ice Cream", imageUrl: "/Images/14.JPEG" },
    { name: "Fries", imageUrl: "/Images/15.JPEG" },
    { name: "Noodles", imageUrl: "/Images/16.JPEG" },
    { name: "Curry", imageUrl: "/Images/17.JPEG" },
    { name: "Burrito", imageUrl: "/Images/a.JPEG" },
  ];

  return (
    <div className="mt-10 bg-yellow-50 p-10">
      {/* React Slick Slider for food items */}
      <Slider {...settings}>
        {foodData.map((food, index) => (
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
