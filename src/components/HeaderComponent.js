import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronDown } from 'react-icons/fa';
import { images } from '../images/images';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingHeader from './BookingHeader';
export default function HeaderComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    navigate(path);
  };
  const [arriveDate, setArriveDate] = useState(new Date());
  const [departDate, setDepartDate] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="flex flex-col items-center bg-white sticky top-0 z-50 shadow-md pb-2">
      
      <div class="flex border-b-2 border-[#ccc] w-full">
        <div className="text-center  mx-48 " onClick={() => handleMenuItemClick("/WanderlustHotel")}>
          <img src={images.logo} alt="Logo" className="h-24 mx-auto" />
          
        </div>

        <nav className="flex justify-center ml-20 mt-[40px]">
          <ul className="flex space-x-8">
            <li className="hover:text-[#D3A5A3] hover:border-b-2 hover:border-[#D3A5A3] transition-all duration-150 ease-in-out cursor-pointer" onClick={() => handleMenuItemClick("/WanderlustHotel")}>HOME</li>
            <li className="hover:text-[#D3A5A3] hover:border-b-2 hover:border-[#D3A5A3] transition-all duration-150 ease-in-out cursor-pointer" onClick={() => handleMenuItemClick("/rooms")}>ROOMS & SUITES</li>
            

            <li className="relative group cursor-pointer hover:border-b-2 hover:border-[#D3A5A3] transition-all duration-150 ease-in-out">
              <span className="relative z-10 text-black group-hover:text-[#D3A5A3] transition-all duration-150 ease-in-out">
              RESTAURANT & BAR
              </span>
              <div className="absolute left-[-6px] mt-[33px] bg-white shadow-lg border border-gray-200 rounded-md z-10 hidden group-hover:block min-w-[160px]">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/restaurant")}>RESTAURANT</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/bar")}>BAR</div>
              </div>
              <div className="absolute top-full left-0 w-full h-4 bg-transparent group-hover:block"></div>
            </li>
            <li className="relative group cursor-pointer hover:border-b-2 hover:border-[#D3A5A3] transition-all duration-150 ease-in-out">
              <span className="relative z-10 text-black group-hover:text-[#D3A5A3] transition-all duration-150 ease-in-out">
              SPA & POOL
              </span>
              <div className="absolute left-[-34px] mt-[33px] bg-white shadow-lg border border-gray-200 rounded-md z-10 hidden group-hover:block min-w-[160px]">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/spa")}>SPA</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/pool")}>POOL</div>
              </div>
              <div className="absolute top-full left-0 w-full h-4 bg-transparent group-hover:block"></div>
            </li>
            <li className="relative group cursor-pointer hover:border-b-2 hover:border-[#D3A5A3] transition-all duration-150 ease-in-out">
              <span className="relative z-10 text-black group-hover:text-[#D3A5A3] transition-all duration-150 ease-in-out">
                EVENTS
              </span>
              <div className="absolute left-[-50px] mt-[33px] bg-white shadow-lg border border-gray-200 rounded-md z-10 hidden group-hover:block min-w-[160px]">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/wedding")}>WEDDINGS</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/meeting")}>MEETINGS</div>
              </div>
              <div className="absolute top-full left-0 w-full h-4 bg-transparent group-hover:block"></div>
            </li>
            <li className="hover:text-[#D3A5A3] hover:border-b-2 hover:border-[#D3A5A3] transition-all duration-150 ease-in-out cursor-pointer" onClick={() => handleMenuItemClick("/offers")}>OFFERS</li>
            <li className="relative group cursor-pointer hover:border-b-2 hover:border-[#D3A5A3] transition-all duration-150 ease-in-out">
              <span className="relative z-10 text-black group-hover:text-[#D3A5A3] transition-all duration-150 ease-in-out">
              MORE…
              </span>
              <div className="absolute left-[-50px] mt-[33px] bg-white shadow-lg border border-gray-200 rounded-md z-10 hidden group-hover:block min-w-[160px]">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/gallery")}>GALLERY</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/services")}>SERVICES & AMENITIES</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/contact")}>CONTACT US & DIRECTION</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/things")}>THINGS TO DO</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => handleMenuItemClick("/policies")}>POLICIES</div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center" onClick={() => window.open("https://maps.app.goo.gl/9hhkQk7gihK9xWvn7?g_st=iz", "_blank")}>REVIEWS</div>
              </div>
              <div className="absolute top-full left-0 w-full h-4 bg-transparent group-hover:block"></div>
            </li>
          </ul>
        </nav>
      </div>
    
    <BookingHeader />
    </header>
    </>
    
  );
}