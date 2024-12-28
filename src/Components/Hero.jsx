import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const images = [
    { id: 1, src: './Images/1.JPEG', alt: 'Image 1' },
    { id: 2, src: './Images/2.JPEG', alt: 'Image 2' },
    { id: 3, src: './Images/3.JPEG', alt: 'Image 3' },
    { id: 4, src: './Images/4.JPEG', alt: 'Image 4' },
    { id: 5, src: './Images/5.JPEG', alt: 'Image 5' },
    { id: 6, src: './Images/6.JPEG', alt: 'Image 6' },
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Speed in milliseconds (2 seconds)
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <ul style={{ margin: '0', padding: '0', display: 'inline-block' }}>
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-screen h-[30vh] object-fill lg:w-full lg:h-[60vh] lg:object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
