import React, { useState, useEffect } from "react";
import { images } from "../images/images";

const Slideshow = ({anhSlide}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % anhSlide.length);
    }, 4000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [anhSlide.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden mx-auto">
      {/* Slideshow Images */}
      <div className="relative w-full h-full">
        {anhSlide.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {anhSlide.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex
                ? "bg-red-500"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
