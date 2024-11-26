import React, { useState } from "react";
import { images } from "../images/images";

export default function DescriptionCard() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-16 right-16 w-[500px] h-[250px] bg-white shadow-lg rounded-md flex overflow-hidden animate-slide-in z-50">
        {/* Nút đóng */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-red-500 transition duration-150 ease-in-out text-xl"
        >
          ✕
        </button>

        {/* Phần chữ */}
        <div className="w-3/4 p-4 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-gray-800">Exclusive Offers</h2>
          <p className="text-sm text-gray-600 mt-2">
          Don't miss out on the opportunity to elevate your experience with our exclusive offers, each designed to enhance your stay. Explore all our options and inquire now for unparalleled experiences.
          </p>
        </div>

        {/* Phần hình ảnh */}
        <div className="w-1/4">
          <img
            src={images.VNO_Sheraton}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    )
  );
}
