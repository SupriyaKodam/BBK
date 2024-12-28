import React from 'react';
import Slider from 'react-slick';  // Import react-slick
import PercentIcon from '@mui/icons-material/Percent';

// Import Slick Carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Offers = () => {
  const offers = [
    {
      discount: "50% OFF",
      description: "Flat Rs 120 off on min order of Rs 999",
    },
    {
      discount: "30% OFF",
      description: "Flat Rs 150 off on min order of Rs 899",
    },
    {
      discount: "40% OFF",
      description: "Flat Rs 200 off on min order of Rs 1099",
    },
    {
      discount: "20% OFF",
      description: "Flat Rs 100 off on min order of Rs 799",
    },
    {
      discount: "60% OFF",
      description: "Flat Rs 250 off on min order of Rs 1299",
    },
    {
      discount: "10% OFF",
      description: "Flat Rs 50 off on min order of Rs 599",
    },
  ];

  // Slick slider settings for responsiveness
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 items initially
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For large screens, show 4 items
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For medium screens, show 3 items
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small screens, show 1 item
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-10 overflow-hidden">
      <h1 className="text-left font-bold text-3xl p-3">Offers</h1>

      {/* React Slick Slider */}
      <Slider {...settings}>
        {/* Grid layout for each offer */}
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 shadow-lg rounded-2xl ${
              index % 2 === 0 ? 'bg-red-700' : 'bg-yellow-500'
            }`} // Alternating colors
            style={{ margin: '0 15px' }} // Adds gap between each grid item
          >
            <div className="flex flex-col gap-6 w-full">
              {/* Left Column: Discount */}
              <div className="flex flex-row items-center">
                <PercentIcon className="mr-2 text-black p-px rounded-full bg-white" />
                <div className="flex flex-col items-start justify-start">
                  <h1 className="text-lg font-bold text-white">{offer.discount}</h1>
                  <h1 className="text-xs text-white">{offer.description}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Offers;
