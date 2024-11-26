import React, { useEffect, useState } from "react";
import { images } from '../images/images';
import DescriptionCard from "../components/DescriptionCard";
import RoomSlideshow from "../components/RoomSlideshow";
import SpecialOffers from "../components/SpecialOffers";
import { useInView } from 'react-intersection-observer';
import Slideshow from "../components/Slideshow";
const Introduction = () => {
  // Sử dụng Intersection Observer để phát hiện khi các phần tử xuất hiện trên màn hình
  const { ref: textRef1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: imageRef1, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.5 });
  
  const { ref: textRef2, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: imageRef2, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        {/* Experience The Spa */}
        <div className="flex items-center space-x-8 mb-16">
          <div
            ref={textRef1}
            className={`text-section w-1/2 text-lg transition-transform duration-700 ease-out transform ${inView1 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
          >
            <h2 className="text-4xl font-semibold mb-4 text-center">Experience The Spa at The Wanderlust Hotel</h2>
            <p className="text-center text-xl">We enhance individual beauty with state-of-the-art technologies and personalized service.</p>
            <p className="text-center text-xl">Open from 11am - 6pm daily</p>
            <p className="text-center text-xl">Call to Book Appointment.</p>
          </div>
          <div
            ref={imageRef1}
            className={`image-section w-1/2 transition-transform duration-700 ease-out transform ${inView2 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <img src={images.spa2} alt="Spa" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Rooftop Pool */}
        <div className="flex items-center space-x-8 mb-16">
          <div
            ref={imageRef2}
            className={`image-section w-1/2 transition-transform duration-700 ease-out transform ${inView4 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
          >
            <img src={images.pool} alt="Rooftop Pool" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div
            ref={textRef2}
            className={`text-section w-1/2 text-lg transition-transform duration-700 ease-out transform ${inView3 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <h2 className="text-4xl font-semibold mb-4 text-center">Rooftop Pool</h2>
            <p className="text-center text-xl">Enjoy beachfront views at our rooftop pool and bar. Exclusively available to hotel guests.</p>
            <p className="text-center text-xl">Service Hours: Open from 7:00am – 9:00pm daily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const arrImg = [
      images.xq1,
      images.xq2,
      images.xq3,
      images.xq4,
    ];

const Homepage = () => {
  return (
    <>
      <DescriptionCard />
      <div className=" bg-gray-100">
      <Slideshow anhSlide={arrImg}/>
      <div className=" text-center p-16 bg-slate-200 w-[1000px] mx-auto my-24">
        <h1 className="text-4xl font-bold">Welcome to The Wanderlust Hotels</h1>
        <p className="mt-6 text-xl font-light">More than a hotel. It is a journey within a journey, where memories are created and never </p>
        <p className="text-xl font-light">forgotten. Nestled along the golden sands of Nha Trang Beach, our hotel serves as your personal  </p>
        <p className="text-xl font-light">sanctuary, where every room opens to breathtaking views of the East Sea. With its harmonious  </p>
        <p className="text-xl font-light">blend of modern amenities and traditional Vietnamese hospitality, our establishment ensures your</p>
        <p className="text-xl font-light">stay is nothing short of extraordinary.</p>
      </div>
      
      <div className="flex">
      <div className="w-1/2 p-4">
      <p class=" text-gray-600 text-center mt-20 text-2xl">
      We are honored to be recognized as one of the best hotels in Nha Trang, Vietnam, by Vietnamonline Travel Guide for the New Decade.
    </p>
    <div className="flex">
    <a href="/vietnamonline" className="text-blue-600 underline text-center mt-6 text-xl mx-auto">Read more</a>
    </div>
      </div>
      <div className="w-1/2 p-4">
        <img src={images.chungnhan} alt="Wanderlust Hotel" class="w-full h-auto" />
      </div>
      
      </div>
      <RoomSlideshow />
    <SpecialOffers />
    <Introduction />  
    </div>
    
    
    </>
    
    
  );
};

export default Homepage;
