import React from 'react';
import { images } from '../images/images';

const Contact = () => {
    return (
        <div className="bg-gray-100">
              {/* Banner Image */}
              <div className="relative">
                <img
                  src={images.weare} // Thay bằng URL ảnh của bạn
                  alt="Hotel Banner"
                  className="w-full h-[500px] object-contain"
                />
              </div>
        
              {/* Contact Section */}
              <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold text-center mb-6">Contact Us & Directions</h2>
                <p className="text-lg text-center mb-6">
                  How was your stay with us? Did we meet all your expectations? We want your stays at our
                  hotel to be the best they can be. You talk, we listen.
                </p>
                <div className="text-center text-lg mb-4">
                  <p>
                    <img
                      src={images.IconPhone}
                      alt="Phone icon"
                      className="inline-block mr-2 w-4 h-4"
                    />
                    Phone:{" "}
                    <a
                      href="tel:02587765912"
                      className="text-blue-600 hover:underline"
                    >
                      0258.7765.912
                    </a>
                  </p>
                  <p>
                    <img
                      src={images.IconEmail}
                      alt="Email icon"
                      className="inline-block mr-2 w-4 h-4"
                    />
                    Email:{" "}
                    <a
                      href="mailto:Wanderlusthotel@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      Wanderlusthotel@gmail.com
                    </a>
                  </p>
                  <p>
                    <img
                      src={images.IconPosition}
                      alt="Address icon"
                      className="inline-block mr-2 w-4 h-4"
                    />
                    Address: 99/B Trần Phú, Vĩnh Hoà, Nha Trang, Việt Nam
                  </p>
                </div>
        
                {/* Footer Links */}
                <div className="flex justify-center space-x-8 mt-12 text-sm">
                  <a href="#" className="text-gray-600 hover:underline">
                    Find a Hotel
                  </a>
                  <a href="#" className="text-gray-600 hover:underline">
                    Contact Us
                  </a>
                  <a href="#" className="text-gray-600 hover:underline">
                    Careers
                  </a>
                  <a href="#" className="text-gray-600 hover:underline">
                    Best Rate Guarantee
                  </a>
                  <a href="#" className="text-gray-600 hover:underline">
                    Join RSVP Rewards
                  </a>
                </div>
              </div>
            </div>    
    );
};

export default Contact;