import React from "react";
import RoomCard from "../components/RoomCard";
import { images } from '../images/images';
import RoomSlideshow from "../components/RoomSlideshow";
import { FaBed, FaRuler, FaSwimmingPool, FaUser, FaUtensils,FaCheckCircle, FaCalendarAlt, FaPaw, FaCreditCard } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
const Rooms = () => {
  const navigate = useNavigate();
  const handleViewMore = (url) => {
    navigate(url);
  };
   // Hook để điều hướng
   const rooms = [
    {
      title: 'Superior Room',
      bed: '1 single bed and 1 large double bed',
      size: '33m\u00B2 room',
      capacity: '3 people',
      image: images.superior3people, // Thay bằng đường dẫn ảnh thực tế
      detailsUrl: '/rooms/SuperiorRoom3', // URL chi tiết
    },
    {
      title: 'Superior Double Room',
      bed: '1 large double bed',
      size: '28m\u00B2 room',
      capacity: '2 people',
      image: images.RoomSuperDouble, // Thay bằng đường dẫn ảnh thực tế
      detailsUrl: '/rooms/SuperiorDoubleRoom', // URL chi tiết
    },
    {
      title: 'Superior Twin Room',
      bed: '2 single beds',
      size: '28m\u00B2 room',
      capacity: '2 people',
      image: images.RoomSuperTubl, // Thay bằng đường dẫn ảnh thực tế
      detailsUrl: '/rooms/SuperiorTwinRoom', // URL chi tiết
    },
    {
      title: 'Deluxe Double Room',
      bed: '1 large double bed',
      size: '36m\u00B2 room',
      capacity: '2 people',
      image: images.DoubleDeluxeRoom, // Thay bằng đường dẫn ảnh thực tế
      detailsUrl: '/rooms/DeluxeDoubleRoom', // URL chi tiết
    },
    {
      title: 'Deluxe Twin Room',
      bed: '2 single beds',
      size: '36m\u00B2 room',
      capacity: '2 people',
      image: images.RoomDeluxTwin, // Thay bằng đường dẫn ảnh thực tế
      detailsUrl: "/rooms/DeluxeTwinRoom", // URL chi tiết
    },
    {
      title: 'Deluxe King Double Room',
      bed: '1 king double bed',
      size: '45m\u00B2 room',
      capacity: '2 people',
      image: images.RoomDeluxeKingdouble, // Thay bằng đường dẫn ảnh thực tế
      detailsUrl: '/rooms/DeluxeKingDoubleRoom', // URL chi tiết
    },
  ];

  // Dữ liệu suite (SUITES)
  const suites = [
    {
      title: 'Suite',
      bed: '1 large double bed',
      size: '60m\u00B2 room',
      capacity: '2 people',
      image: images.RoomSuite, // Thay bằng đường dẫn ảnh thực tế
      detailsUrl: '/rooms/SuiteRoom', // URL chi tiết
    },
    {
      title: 'Suite Executive',
      bed: '1 large double bed',
      size: '70m\u00B2 room',
      capacity: '2 people',
      image: images.RoomExecutiveSuite, // Thay bằng đường dẫn ảnh thực tế
      detailsUrl: '/rooms/SuiteExecutiveRoom', // URL chi tiết
    },
  ];
  const Policies = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">POLICIES</h2>
      
      {/* CHECK-IN */}
      <div className="mb-6 p-6 bg-gray-100 rounded-lg shadow-md flex items-start">
      <img src={images.Iconin} alt="" className="w-8 h-8 mr-3"/>
        <div>
          <h3 className="text-xl font-semibold mb-2">CHECK IN</h3>
          <p>From 2:00 pm.</p>
          <p>Early check-in can be arranged if the hotel has room available. Our hotel will charge a surcharge if you want to check in before 2:00 pm.</p>
          <p>Guests are required to show photo identification and credit card upon check-in.</p>
        </div>
      </div>

      {/* CHECK-OUT */}
      <div className="mb-6 p-6 bg-gray-100 rounded-lg shadow-md flex items-start">
      <img src={images.Iconout} alt="" className="w-8 h-8 mr-3"/>
        <div>
          <h3 className="text-xl font-semibold mb-2">CHECK OUT</h3>
          <p>At noon - 12:00 pm.</p>
          <p>The hotel will collect half the room price if you check out late after 12:00 pm and collect the entire room price if you check out after 6:00 pm.</p>
        </div>
      </div>

      {/* CHILDREN AND BEDS */}
      <div className="mb-6 p-6 bg-gray-100 rounded-lg shadow-md flex items-start">
      <img src={images.IconChild} alt="" className="w-8 h-8 mr-3"/>
        <div>
          <h3 className="text-xl font-semibold mb-2">CHILDREN AND BEDS</h3>
          <p>Children Sharing Bed: One child under 12 can share a bed with parents.</p>
          <ul className="list-disc pl-5">
            <li>Under 5 years: Free of charge.</li>
            <li>Ages 5 - 11: Surcharge of 175,000 VND/day.</li>
          </ul>
          <p>Children 12+: Considered adults and require an extra bed.</p>
          <p>Extra Bed Fee: 800,000 VND/night; one extra bed per room.</p>
          <p>Payment: Extra charges are not included in the room rate and must be paid at the hotel. For details, contact the booking department.</p>
        </div>
      </div>

      {/* CANCELLATION RULES */}
      <div className="mb-6 p-6 bg-gray-100 rounded-lg shadow-md flex items-start">
      <img src={images.IconCancellation} alt="" className="w-8 h-8 mr-3"/>
        <div>
          <h3 className="text-xl font-semibold mb-2">CANCELLATION RULES</h3>
          <h4 className="text-lg font-semibold mb-2">Standard Price Reservations:</h4>
          <ul className="list-disc pl-5">
            <li>14+ Days Before Check-In: No charge.</li>
            <li>7-14 Days Before Check-In: 50% of the total booking fee charged.</li>
            <li>Less than 7 Days Before Check-In: Full booking fee charged.</li>
          </ul>
          <h4 className="text-lg font-semibold mt-4 mb-2">Promotional Price Reservations:</h4>
          <ul className="list-disc pl-5">
            <li>No Cancellations Allowed after booking confirmation.</li>
            <li>No-Show: Full payment of the booking fee applies.</li>
          </ul>
          <p>Credit card, Visa, E-wallet, Cash</p>
        </div>
      </div>
      <div className="mb-6 p-6 bg-gray-100 rounded-lg shadow-md flex items-start">
        <FaCreditCard className="text-2xl mr-4 text-gray-600" />
        <div>
          <p>Credit card, Visa, E-wallet, Cash</p>
        </div>
      </div>

      {/* PETS */}
      <div className="mb-6 p-6 bg-gray-100 rounded-lg shadow-md flex items-start">
      <img src={images.IconPet} alt="" className="w-8 h-8 mr-3"/>
        <div>
          <h3 className="text-xl font-semibold mb-2">PETS</h3>
          <p>Only dogs or cats are allowed as pets in the Hotel.</p>
          <p>Pets are allowed only in the rooms in which they are registered.</p>
          <p>A maximum of two pets are permitted per room.</p>
          <p>All pet vaccinations, especially anti-rabies, must be current and valid.</p>
          <p>Keep your pet leashed at all times as you head out of your room and must be accompanied by their owners in public places at all times.</p>
        </div>
      </div>
    </div>

    );
  };

  return (
    <>
    <div className="container mx-auto px-4 py-10 bg-gray-100">
    <div className=" text-center p-16 bg-slate-200 w-[1000px] mx-auto my-7">
        <h1 className="text-4xl font-bold">ROOMS & SUITES</h1>
        <p className="mt-6 text-xl font-light">Immerse yourself in the comfort of our Rooms and Suites with modern </p>
        <p className="text-xl font-light">designs imbued with Vietnamese culture amidst the stunning natural</p>
        <p className="mt-2 text-xl font-light">landscape of Nha Trang</p>
      </div>

      {/* Rooms Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4">ROOMS</h3>
        <p className="mb-8">Our rooms are where luxury meets breathtaking beach views of Nha Trang. Each space is crafted for comfort and elegance, with private balconies and modern amenities, creating the perfect escape by the sea.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="border rounded-lg shadow-lg">
              {/* Image */}
              <div className="w-full h-64 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${room.image})` }}></div>

              {/* Description */}
              <div className="p-6">
                <h4 className="text-xl font-semibold">{room.title}</h4>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">{<FaBed className="text-blue-500" />}</div>
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="mr-2">{<FaRuler className="text-green-500" />}</div>
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mr-2">{<FaUser className="text-red-500" />}</div>
                    <span>{room.capacity}</span>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">BOOK NOW</button>
                  <button
                    onClick={() => handleViewMore(room.detailsUrl)}
                    className="bg-[#B89881] text-white px-4 py-2 rounded-md hover:bg-[rgba(184,152,129,0.7)] transition-colors"
                  >
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suites Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4">SUITES</h3>
        <p className="mb-8">Our luxurious hotel suites redefine glamor and are ideal for both leisure and business travelers. With ample space that seamlessly integrates sleeping and living areas, each suite envelops you in an atmosphere of intimate elegance.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {suites.map((suite, index) => (
            <div key={index} className="border rounded-lg shadow-lg">
              {/* Image */}
              <div className="w-full h-64 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${suite.image})` }}></div>

              {/* Description */}
              <div className="p-6">
                <h4 className="text-xl font-semibold">{suite.title}</h4>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">{<FaBed className="text-blue-500" />}</div>
                    <span>{suite.bed}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="mr-2">{<FaRuler className="text-green-500" />}</div>
                    <span>{suite.size}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mr-2">{<FaUser className="text-red-500" />}</div>
                    <span>{suite.capacity}</span>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">BOOK NOW</button>
                  <button
                    onClick={() => handleViewMore(suite.detailsUrl)}
                    className="bg-[#B89881] text-white px-4 py-2 rounded-md hover:bg-[rgba(184,152,129,0.7)] transition-colors"
                  >
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Policies />
    </div>
    </>
    
  );
};

export default Rooms;
