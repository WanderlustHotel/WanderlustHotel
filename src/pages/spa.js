import React from "react";
import { images } from "../images/images";
import Slideshow from '../components/Slideshow';
const arrImg = [
  images.spa1,
  images.spa2,
  images.spa10,
  images.spa9,
  images.spa11,
];
const servicesArr = [
  {
    title: "Relaxation Massage",
    description:
      "A 60-minute session designed to alleviate stress and relax your muscles.",
    price: "800,000 VND",
  },
  {
    title: "Aromatherapy Treatment",
    description:
      "Utilizing natural essential oils, this 90-minute treatment enhances mood and promotes well-being.",
    price: "1,200,000 VND",
  },
  {
    title: "Facial Care",
    description:
      "An intensive skincare program with organic products, providing a radiant complexion.",
    price: "700,000 VND",
  },
  {
    title: "Hair Treatments & Nail Care",
    description: "Look your best from head to toe.",
    price: "",
  },
];
const services = () => {
  return (
    <div className="bg-gray-100">
      <Slideshow anhSlide={arrImg}/>
      <div className=" text-center p-16 bg-slate-200 w-[1000px] mx-auto my-24">
        <h1 className="text-4xl font-bold">Ultimate Relaxation at Our Spa</h1>
        <p className="mt-6 text-xl font-light">At Wanderlust Spa, we invite you to indulge in a flawless relaxation experience with our premier </p>
        <p className="text-xl font-light">health and beauty treatments. Our dedicated and professional staff is ready to cater to your needs</p>
        <p className="text-xl font-light">with our standout offerings</p>
        <h1 className="text-2xl font-bold mt-6">Operating Hours</h1>
        <p className="mt-2 text-xl font-light">11:00 AM - 6:00 PM daily</p>
        <p className="text-xl font-light">hLet us arrange a personalized spa experience for you. + 454545445</p>
      </div>
      <div className="p-8 bg-gray-50">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 uppercase">
        SPA SERVICES
      </h1>

      {/* Dịch vụ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesArr.map((service, index) => (
          <div
            key={index}
            className="relative  p-6 bg-white"
          >
            {/* Border top ngắn hơn */}
            <div className="absolute top-0 left-[176px] transform -translate-x-1/2 w-[300px] h-[1px] bg-black"></div>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            <p className="text-sm font-medium text-gray-900 mt-4">
              {service.price}
            </p>
          </div>
        ))}
      </div>

      {/* Phần mô tả dưới */}
      <p className="mt-12 text-center font-serif italic text-gray-700 text-lg">
        The spa's luxurious ambiance, accompanied by soothing music and natural
        fragrances, will ensure the utmost tranquility for you.
      </p>
    </div>
      
    </div>
    
  );
};

export default services;
