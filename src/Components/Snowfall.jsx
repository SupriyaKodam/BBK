import React, { useEffect } from "react";

const Snowfall = () => {
  useEffect(() => {
    const createSnowflakes = () => {
      const numberOfSnowflakes = 50; // Adjust the number of snowflakes
      const container = document.querySelector('.snowfall-container');

      for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add(
          'snowflake',
          'absolute',
          'bg-white',
          'rounded-full',
          'opacity-80',
          'animate-fall', // Apply the fall animation
          'animate-drift' // Apply the drift animation
        );
        
        // Smaller snowflakes: reduce the size range
        snowflake.style.width = `${Math.random() * 10 + 5}px`; // Random size (5px to 15px)
        snowflake.style.height = snowflake.style.width; // Ensure snowflake is round
        snowflake.style.left = `${Math.random() * 100}vw`; // Random X position
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay

        container.appendChild(snowflake);
      }
    };

    createSnowflakes();

    return () => {
      // Cleanup: Remove all snowflakes when the component unmounts
      const snowflakes = document.querySelectorAll('.snowflake');
      snowflakes.forEach(snowflake => snowflake.remove());
    };
  }, []);

  return (
    <div className="snowfall-container fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      {/* Snowflakes will be added dynamically here */}
    </div>
  );
};

export default Snowfall;
