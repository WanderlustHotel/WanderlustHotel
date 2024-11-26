import React from 'react';
import { images } from "../images/images";
import Slideshow from '../components/Slideshow';
import { FaUmbrellaBeach, FaGlassMartiniAlt, FaTshirt, FaCalendarAlt } from "react-icons/fa";
const arrImg = [
  images.pool3,
  images.pool4,
  images.pool5,
  images.pool6,
  images.pool7,
  images.pool8,
  images.pool9,
  images.pool10,
];
const pool = () => {
    return (
        <div className="bg-gray-100">
            <Slideshow anhSlide={arrImg}/>
          <div className=" text-center p-16 bg-slate-200 w-[1000px] mx-auto my-24">
        <h1 className="text-4xl font-bold">Infinity Pool</h1>
        <p className="mt-6 text-xl font-light">Our infinity pool, located on the hotel’s rooftop, provides stunning views of the sea and</p>
        <p className="text-xl font-light">cityscape, making it the perfect oasis for relaxation after a day of exploration.</p>
        <h1 className="text-2xl font-bold mt-6">Operating Hours</h1>
        <p className="mt-2 text-xl font-light">7:00 AM - 9:00 PM daily</p>
          </div>
      <div className="pb-5">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-6 uppercase">Amenities</h2>

      {/* Content */}
      <div className="mt-4 ml-60 grid grid-cols-2 gap-6 text-lg text-gray-700">
        {/* Sun Lounger */}
        <div className="flex items-center">
          <img 
            src={images.IconSunlounger} 
            alt="Sun Lounger" 
            className="w-8 h-8 mr-3"
          />
          Sun lounger
        </div>

        

        {/* Complimentary Towels */}
        <div className="flex items-center">
          <img 
            src={images.Icontowels} 
            alt="Complimentary Towels" 
            className="w-8 h-8 mr-3"
          />
          Complimentary towels
        </div>
        {/* Bar Area */}
        <div className="flex items-center">
          <img 
            src={images.IconBar} 
            alt="Bar Area" 
            className="w-8 h-8 mr-3"
          />
          Bar area serving refreshing beverages
        </div>
        {/* Host Poolside Parties */}
        <div className="flex items-center">
          <img 
            src={images.IconHost}
            alt="Events" 
            className="w-8 h-8 mr-3"
          />
          Host poolside parties and special events regularly
        </div>
      </div>
    </div>
        </div>
    );
};

export default pool;