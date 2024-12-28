import React from "react";
import Slider from "react-slick"; // Ensure react-slick is installed
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS

const Displaying = ({ scrollToSection }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:1000,
    prevArrow: (
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          fontSize: "30px",
          color: "#333",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        &#10094; {/* Left arrow symbol */}
      </button>
    ),
    nextArrow: (
      <button
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          fontSize: "30px",
          color: "#333",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        &#10095; {/* Right arrow symbol */}
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  return (
    <div className="slider-wrapper overflow-hidden mt-14 relative">
      <div className="slider-container mx-auto px-4 py-8">
        <Slider {...settings}>
          <div
            className="bg-gray-100 p-4 text-center rounded-lg shadow-md"
            onClick={() => scrollToSection('biryaniGrid')} // Scroll to BiryaniGrid
          >
            <h3 className="text-lg font-semibold">2 Biryani Starting at ₹529</h3>
          </div>
          <div
            className="bg-gray-100 p-4 text-center rounded-lg shadow-md"
            onClick={() => scrollToSection('biryaniData')} // Scroll to BiryaniData
          >
            <h3 className="text-lg font-semibold">Hyderabadi Biryani</h3>
          </div>
          <div
            className="bg-gray-100 p-4 text-center rounded-lg shadow-md"
            onClick={() => scrollToSection('foodRoles')} // Scroll to FoodRolesInRow
          >
            <h3 className="text-lg font-semibold">Chicken Rolls Starting at ₹199</h3>
          </div>
          <div
            className="bg-gray-100 p-4 text-center rounded-lg shadow-md"
            onClick={() => scrollToSection('foodGrid')} // Scroll to FoodGrid
          >
            <h3 className="text-lg font-semibold">Biryani, Breads & Extras</h3>
          </div>
          <div
            className="bg-gray-100 p-4 text-center rounded-lg shadow-md"
            onClick={() => scrollToSection('coolDrinks')} // Scroll to CoolDrinks
          >
            <h3 className="text-lg font-semibold">Cool Drinks</h3>
          </div>
          <div
            className="bg-gray-100 p-4 text-center rounded-lg shadow-md"
            onClick={() => scrollToSection('desserts')} // Scroll to Desserts
          >
            <h3 className="text-lg font-semibold">Desserts</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Displaying;
