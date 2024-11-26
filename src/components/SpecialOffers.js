import React, { useState } from 'react';
import { images } from '../images/images';
import Modal from './Modal';
const SpeCard = ({imageUrl,title,description,so,price})=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  return(
    <>
    <div className="offer-card w-full sm:w-1/3 p-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover mb-4"
              />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
            <div className="flex justify-between">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                BOOK NOW
              </button>
              <button className="bg-[#B89881] text-white px-4 py-2 rounded-md hover:bg-[rgba(184,152,129,0.7)] transition-colors" onClick={() => setIsModalOpen(true)}>
                DETAILS
              </button>
            </div>
          </div>
          <Modal 
            isOpen={isModalOpen}
            image ={imageUrl}
            onClose={() => setIsModalOpen(false)}
            number ={so}
            cost = {price}
          />
    </>
    
  )
}

const SpecialOffers = () => {
  
  

  return (
    <>
      <div className="special-offers-container py-12 px-4">
      <h2 className="text-center text-3xl font-semibold mb-8">Special Offers</h2>
      <div className="flex justify-between space-x-4">
        <SpeCard imageUrl ={images.earlyhoney} title="Honeymoon Package" description="Sweep your partner off their feet with a candlelit dinner, soothing couples\' spa treatment, and sparkling champagne—all in a breathtaking beachside setting." so={1} price="7.500.00"/>
        <SpeCard imageUrl ={images.earlyfamily} title="Family Getaway Package" description="Enjoy a luxurious family retreat with spa treatments, private dining, and exclusive perks for an unforgettable stay." so={2} price="37.500.000"/>
        <SpeCard imageUrl ={images.earlybird} title="Early Bird 60 Days" description="Extend your getaway with exclusive perks, including complimentary upgrades, discounts on dining and spa services, and thoughtful inclusions for a memorable stay." so={3} price="2.589.000"/>
      </div>
    </div>
    
    </>
    
  );
};

export default SpecialOffers;