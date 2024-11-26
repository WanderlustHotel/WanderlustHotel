import React, { useState } from 'react';
import OffersCard from '../components/OffersCard';
import { images } from '../images/images';




const Offers = () => {
    return (
      <>
        <div className="container mx-auto px-4 py-10 bg-gray-100">
          <div className=" text-center p-16 bg-slate-200 w-[1000px] mx-auto my-7">
          <h1 className="text-4xl font-bold">Exclusive Offers</h1>
          <p className="mt-6 text-xl font-light">Indulge in the essence of luxury with our exclusive offers designed to enhance your Nha Trang experience.</p>
          <p className="text-xl font-light">Book now and let every moment become a cherished memory</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <OffersCard title="Honeymoon Package" img={images.OfHoneymoon} price="7.500.00" so={1}/>
              <OffersCard title="Family Getaway Package" img={images.OfFamily} price="37.500.000" so={2}/>
              <OffersCard title="Early Bird 60 Day" img={images.OfBird} price="2.589.000" so={3}/>
              <OffersCard title="Stay 2 Nights Save More" img={images.Of2night} price="2.700.000" so={4}/>
              <OffersCard title="Direct Booking Perks" img={images.OfBooking} price="2.460.000" so={5}/>
              <OffersCard title="Work & Relax" img={images.OfWork} price="3.000.000" so={6}/>
          </div>
          <p className="mt-24 text-center font-serif italic text-gray-700 text-lg">
          All offers are subject to availability at the time of reservation. Offers are not valid in conjunction with any other offer or contract and do not apply to groups. Rates are per room, per night, vary by arrival date and/or length of stay. Rates are subject to change.
      </p>
        </div>
      </>
      
      
    );
};

export default Offers;


