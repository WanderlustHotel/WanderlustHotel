import React from 'react';
import { images } from '../images/images';
import { FaBed, FaBath, FaWifi, FaTv, FaSnowflake, FaRegWindowMinimize, FaCity } from 'react-icons/fa';
import { Gi3dGlasses , GiIsland, GiWineGlass } from 'react-icons/gi';
import { AiOutlineSound ,AiOutlineApartment } from 'react-icons/ai';
const SuiteExecutiveRoom = () => {
    return (
      <section className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Suite Executive Room</h2>
      <img src={images.RoomExecutiveSuite} alt="Wanderlust Hotel" class="w-full h-auto" />
        <div className='flex mt-9'>
        <div className="mb-8 w-1/2">
          <h3 className="text-xl font-semibold text-gray-700">Room Features</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><FaBed className="inline-block mr-2 text-blue-500" /> 1 large double bed</li>
            <li><FaRegWindowMinimize className="inline-block mr-2 text-blue-500" /> 36m² room</li>
            <li><GiIsland className="inline-block mr-2 text-blue-500" /> Sea view</li>
            <li><FaCity className="inline-block mr-2 text-blue-500" /> City view</li>
            <li><AiOutlineApartment className="inline-block mr-2 text-blue-500" /> Balcony</li>
            <li><FaSnowflake className="inline-block mr-2 text-blue-500" /> Air conditioning</li>
            <li><FaBath className="inline-block mr-2 text-blue-500" /> Private bathroom</li>
            <li><FaTv className="inline-block mr-2 text-blue-500" /> Flat-screen TV</li>
            <li><AiOutlineSound className="inline-block mr-2 text-blue-500" /> Soundproofing</li>
            <li><GiWineGlass className="inline-block mr-2 text-blue-500" /> Minibar</li>
            <li><FaWifi className="inline-block mr-2 text-blue-500" /> Free wifi</li>
          </ul>
        </div>

        {/* Tùy chọn giá */}
        <div className='w-1/2'>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Pricing Options</h3>

          {/* Giá 1 */}
          <div className="border rounded-lg p-4 mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Option 1: ( 2 people )</h4>
            <p className="text-gray-600">Tax and fees are included</p>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>✓ Free parking</li>
              <li>✓ High-speed internet</li>
            </ul>
            <p className="text-blue-600 font-bold mt-4">Price: 3.490.000 VND / night</p>
          </div>

          {/* Giá 2 */}
          <div className="border rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-800">Option 2: ( 2 people )</h4>
            <p className="text-gray-600">Tax and fees are included</p>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>✓ Continental breakfast</li>
              <li>✓ Free parking</li>
              <li>✓ High-speed internet</li>
            </ul>
            <p className="text-blue-600 font-bold mt-4">Price: 4.390.000 VND / night</p>
          </div>
        </div>
        </div>
        
      </div>
    </section>
    );
};

export default SuiteExecutiveRoom;