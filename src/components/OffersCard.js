import React, { useState } from 'react';
import Modal from './Modal';

const OffersCard = ({title, img,price,so}) => {
  const [showButtons, setShowButtons] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-full h-[500px] overflow-hidden"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <img
          src={img}
          alt=""
          className="w-full h-full object-fill"
        />
        <div className="absolute top-4 right-4 text-white font-bold text-2xl">FROM {price} VND</div>
        <div
          className={`absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            showButtons ?  '-translate-y-7' :'translate-y-0'
          }`}
        >
          <div className="bg-[rgba(81,80,80,0.7)] p-6 rounded-lg">
  <h2 className="leading-tight text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-orange-500 w-[500px] text-center">
    {title}
  </h2>
</div>
          <div className={`flex justify-center mt-4 space-x-4 ${showButtons ? 'opacity-100' : 'opacity-0'}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
              BOOK NOW
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#B89881] hover:bg-[rgba(184,152,129,0.7)] text-white px-6 py-3 rounded"
            >
              MORE INFO
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal 
        isOpen={isModalOpen}
        image ={img}
        onClose={() => setIsModalOpen(false)}
        number ={so}
        cost = {price}
      />
    </>
  );
};

export default OffersCard;


