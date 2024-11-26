import React from 'react';
import { images } from "../images/images";
import Slideshow from '../components/Slideshow';
import ContactForm from '../components/ContactForm';
const arrImg = [
  images.meeting1,
  images.meeting2,
  images.meeting3,
];
const meeting = () => {
    return (
        <div className="bg-gray-100">
            <Slideshow anhSlide={arrImg}/>
            <div className=" text-center p-16 bg-slate-200 w-[1000px] mx-auto my-24">
                <h1 className="text-4xl font-bold">MEETINGS</h1>
                <p className="mt-6 text-xl font-light">When searching for an exquisite venue for your next gathering or business meeting, <span className='font-bold'>Wanderlust</span></p>
                <p className="text-xl font-light"><span className='font-bold'>Hotel </span>should be your premier choice. With a capacity of up to 160 guests, our meeting rooms on</p>
                <p className="text-xl font-light">the third floor provide modern amenities and a 4-star service standard, catering to all your </p>
                <p className="text-xl font-light">banquet, conference, and seminar needs. Equipped with the latest technology, high-speed</p>
                <p className="text-xl font-light">internet, and a state-of-the-art audio-visual system, we guarantee an unforgettable experience for </p>
                <p className="text-xl font-light">your event.</p>
            </div>
            <div className="bg-gray-100 py-16">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 ml-32">   
                    <h2 className="text-4xl font-bold mb-4">Menu</h2>
                    <p className="text-lg mb-8 ">
                      From breakfast, lunch, to dinner and every break or bite in between, our banquet menus feature options ranging from the traditional to the extraordinary and are completely customizable. Our expert catering team will work alongside with you to create or alter our existing menus to suit your guests' dietary restrictions and preferences and ensure that everyone is well-fueled for a successful meeting.
                    </p>
                    <button className="bg-[#B89881] hover:bg-[rgba(184,152,129,0.7)] text-white font-bold py-2 px-4 rounded">
                      Menu
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src={images.menu}
                      alt="Menu" 
                      className="w-3/4 h-auto rounded-lg"  // Điều chỉnh kích thước ảnh
                    />
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default meeting;