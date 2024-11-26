import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 px-6 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">AMENITIES</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Accommodation Options:</h3>
            <p>Variety of rooms with standard features like comfortable beds, smart TVs, and beach views.</p>
          </div>
          <div>
            <h3 className="font-semibold">Dining Options:</h3>
            <p>Access to restaurants and bars for guest use.</p>
          </div>
          <div>
            <h3 className="font-semibold">Swimming Pool:</h3>
            <p>Outdoor pool available for relaxation.</p>
          </div>
          <div>
            <h3 className="font-semibold">Spa:</h3>
            <p>Unwind with our range of spa treatments</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold">Meeting Rooms:</h3>
            <p>Spaces available for use by guests for events.</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-cente">OUR SERVICES</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Transportation Services:</h3>
            <p>To make your travels effortless and comfortable, our hotel provides convenient pick-up and drop-off services from the airport, train station, and renowned attractions in the city. Our professional and friendly drivers are always ready to greet and assist you.</p>
          </div>
          <div>
            <h3 className="font-semibold">Laundry Services:</h3>
            <p>We understand that during your travels, you require attentive care and fresh attire. Our laundry service ensures your clothing is always pristine and well-organized, utilizing a professional process and eco-friendly products.</p>
          </div>
          <div>
            <h3 className="font-semibold">Luggage Storage:</h3>
            <p>If you arrive early or wish to explore Nha Trang after check-out, our luggage storage service will provide you peace of mind. Your belongings will be securely and conveniently stored, allowing you to enjoy your exploration without worry.</p>
          </div>
          <div>
            <h3 className="font-semibold">24-Hour Multilingual Concierge Team:</h3>
            <p>Always available to assist you with any requests or inquiries.</p>
          </div>
          <div>
            <h3 className="font-semibold">24-Hour In-Room Dining:</h3>
            <p>Enjoy meals and refreshments in the comfort of your room at any time.</p>
          </div>
          <div>
            <h3 className="font-semibold">Daily Housekeeping:</h3>
            <p>Twice-daily housekeeping, including evening turndown service.</p>
          </div>
          <div>
            <h3 className="font-semibold">Event and Meeting Services:</h3>
            <p>Conference rooms and event planning support, such as catering and audio-visual equipment setup.</p>
          </div>
          <div>
            <h3 className="font-semibold">On-Site Parking:</h3>
            <p>Convenient parking facilities for guest vehicles.</p>
          </div>
          <div>
            <h3 className="font-semibold">Security Services:</h3>
            <p>On-site security personnel and surveillance for guest safety.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-cente">COMPLIMENTARY SERVICES</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="flex items-center justify-center p-4 bg-gray-400 rounded">
            <span className="text-center">Multilingual Concierge</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-400 rounded">
            <span className="text-center">Premium Wi-Fi</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-400 rounded">
            <span className="text-center">High-end Toiletries</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-400 rounded">
            <span className="text-center">Turn Down Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
