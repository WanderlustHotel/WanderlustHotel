import React, { useEffect } from 'react';
import { X as XIcon } from 'lucide-react';
import { images } from '../images/images';

const Modal = ({ isOpen, onClose,number,image, cost }) => {
    useEffect(() => {
        if (isOpen) {
          // Disable scroll on body when modal is open
          document.body.style.overflow = 'hidden';
        } else {
          // Re-enable scroll on body when modal is closed
          document.body.style.overflow = 'auto';
        }
    
        // Cleanup: Reset scroll when component unmounts or modal is closed
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <div className="relative bg-white rounded-lg shadow-xl transform transition-all w-full max-w-3xl">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-60"
            onClick={onClose}
          >
            <XIcon className="w-6 h-6" />
          </button>

          {/* Modal Body */}
          {number === 1 && (
            <div>
            <img 
              src={image} 
              alt="Resort" 
              className="w-full h-80 object-cover rounded-t-lg" 
            />
            
            <div className="p-6">
              <ul className="list-disc pl-6 space-y-2 list-none">
                <li>• A 2-night stay includes a daily buffet breakfast</li>
                <li>• A 90-minute romantic treatment (30-minute floral foot massage and 60-minute relaxing body massage) for 2 persons at Wanderlust Spa</li>
                <li>• A romantic dinner with 1 glass of wine, flowers and candles at the villa</li>
                <li>• Welcome drink upon check-in</li>
                <li>• In-room honeymoon set up upon check-in</li>
                <li>• Complimentary use of swimming pool,and beach</li>
                <li>• Complimentary round-trip airport shuttle service to the hotel</li>
              </ul>
              
              <div className="text-center mt-6">
                <button className="bg-[#B89881] hover:bg-[rgba(184,152,129,0.7)] text-white font-bold py-2 px-6 rounded">
                  BOOK NOW
                </button>
                <p className="text-gray-500 mt-2">AVAILABLE From {cost} VND</p>
              </div>
            </div>
          </div>
        )}
        {number === 2 && (
            <div>
            <img 
              src={image} 
              alt="Resort" 
              className="w-full h-80 object-cover rounded-t-lg" 
            />
            
            <div className="p-6">
              <h3 className="text-xl font-bold mt-4 mb-2">Benefit including in accommodation rate:</h3>
              <ul className="list-disc pl-6 space-y-2 list-none">
                <li>• 02 staying nights including daily buffet breakfast for 8 persons.</li>
                <li>• 01 Spa treatment 60 minutes for 8 persons per stay at Ana Mandara Spa.</li>
                <li>• 1 set menu lunch and 1 BBQ dinner, private server.</li>
                <li>• Welcome Wine & Fruit on Arrival.</li>
                <li>• 10% off on F&B, 20% off on Spa (except alcohol, special menus, not combine with other promotions)</li>
                <li>• Free round-trip airport shuttle service to the Hotel by the private 16 seat car.</li>
                <li>• Welcome drink upon check-in.</li>
                <li>• Free usage of Bicycle, Swimming Pools, and beach.</li>
              </ul>
              
              <div className="text-center mt-6">
                <button className="bg-[#B89881] hover:bg-[rgba(184,152,129,0.7)] text-white font-bold py-2 px-6 rounded">
                  BOOK NOW
                </button>
                <p className="text-gray-500 mt-2">AVAILABLE From {cost} VND</p>
              </div>
            </div>
          </div>
        )}
        {number === 3 && (
        <div>
            <img 
              src={image} 
              alt="Resort" 
              className="w-full h-80 object-cover rounded-t-lg" 
            />
            
            <div className="p-6">
              <ul className="list-disc pl-6 space-y-2 list-none">
                <li>• Complimentary room upgrade applied for Deluxe and Suite</li>
                <li>• Complimentary Late check-out until 17:00, applied for Deluxe and Suite rooms and subject to availability</li>
                <li>• 20% discount on Spa services (cannot be used in conjunction with any other offer or promotion)</li>
                <li>• 10% discount on Food and Beverages (not applicable for alcohols, room service, special menus and other promotion)</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-4 mb-2">Inclusion in room rate:</h3>
              <ul className="list-disc pl-6 space-y-2 list-none">
                <li>• Daily breakfast</li>
                <li>• Daily 02 bottles of water, tea and coffee in the room</li>
                <li>• Welcome drinks and cold towels upon arrival</li>
                <li>• Welcome fruits in the room</li>
                <li>• Complimentary 01 child under 12 years old sharing the existing beds</li>
                <li>• Free Swimming pool access</li>
                <li>• Free shuttle bus service to city center (advance order at least 24 hours)</li>
              </ul>
              
              <div className="text-center mt-6">
                <button className="bg-[#B89881] hover:bg-[rgba(184,152,129,0.7)] text-white font-bold py-2 px-6 rounded">
                  BOOK NOW
                </button>
                <p className="text-gray-500 mt-2">AVAILABLE From {cost} VND</p>
              </div>
            </div>
          </div>
        )}
        {number === 4 && (
            <div>
            <img 
              src={image} 
              alt="Resort" 
              className="w-full h-80 object-cover rounded-t-lg" 
            />
            
            <div className="p-6">
              <ul className="list-disc pl-6 space-y-2 list-none">
              <h3 className="text-xl font-bold mt-4 mb-2">Exclusive Benefits:</h3>
                <li>• Complimentary room upgrade applied for  Deluxe and Suite</li>
                <li>• Complimentary Late check-out until 17:00, applied for Deluxe and Suite rooms and subject to availability </li>
                <li>• 20% discount on Spa services (cannot be used in conjunction with any other offer or promotion)</li>
                <li>• 10% discount on Food and Beverages (not applicable for alcohols, room service, special menus and other promotion)</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-4 mb-2">Inclusion in room rate:</h3>
              <ul className="list-disc pl-6 space-y-2 list-none">
                <li>• Daily breakfast</li>
                <li>• Daily 02 bottles of water, tea and coffee in the room</li>
                <li>• Welcome drinks and cold towels upon arrival</li>
                <li>• Welcome fruits in the room</li>
                <li>• Complimentary 01 child under 12 years old sharing the existing beds</li>
                <li>• Free Swimming pool access</li>
                <li>• Free shuttle bus service to city center (advance order at least 24 hours)</li>
              </ul>
              
              <div className="text-center mt-6">
                <button className="bg-[#B89881] hover:bg-[rgba(184,152,129,0.7)] text-white font-bold py-2 px-6 rounded">
                  BOOK NOW
                </button>
                <p className="text-gray-500 mt-2">AVAILABLE From {cost} VND</p>
              </div>
            </div>
          </div>
        )}
        {number === 5 && (
            <div>
            <img 
              src={image} 
              alt="Resort" 
              className="w-full h-80 object-cover rounded-t-lg" 
            />
            
            <div className="p-6">
                <div className='text-center text-2xl underline font-bold'>Experience VIP treatment when you book direct! Enjoy early check-in, late check-out, and exclusive discounts on our dining and spa services. Booking directly through our website brings you closer to a truly exceptional stay.</div>
                <h3 className="text-xl font-bold mt-4 mb-2">Exclusive Benefits:</h3>
              <ul className="list-disc pl-6 space-y-2 list-none">
                <li>• Early check-in and late check-out (subject to availability).</li>
                <li>• Complimentary room upgrades for Deluxe and Suite bookings.</li>
                <li>• 20% discount on spa treatments (not combinable with other promotions).</li>
                <li>• 10% discount on dining (excluding alcohol, special menus, and other promotions).</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-4 mb-2">Inclusion in room rate:</h3>
              <ul className="list-disc pl-6 space-y-2 list-none">
                <li>• Daily breakfast</li>
                <li>• Daily bottled water, tea, and coffee in the room.</li>
                <li>• Welcome drinks, cold towels, and a fruit platter upon arrival.</li>
                <li>• Complimentary access to the swimming pool and premium Wi-Fi.</li>
              </ul>
              
              <div className="text-center mt-6">
                <button className="bg-[#B89881] hover:bg-[rgba(184,152,129,0.7)] text-white font-bold py-2 px-6 rounded">
                  BOOK NOW
                </button>
                <p className="text-gray-500 mt-2">AVAILABLE From {cost} VND</p>
              </div>
            </div>
          </div>
        )}
        {number === 6 && (
            <div>
            <img 
              src={image} 
              alt="Resort" 
              className="w-full h-80 object-cover rounded-t-lg" 
            />
            
            <div className="p-6">
                <div className='text-center text-2xl underline font-bold'>Balance productivity with paradise! Our Work & Relax package includes high-speed Wi-Fi, executive lounge access, and a sunset cocktail session-perfectly blending business with leisure. Enjoy the best of both worlds with inspiring views and seamless work amenities.</div>
                <h3 className="text-xl font-bold mt-4 mb-2">Exclusive Benefits:</h3>
              <ul className="list-disc pl-6 space-y-2 list-none">
                <li>• High-speed Wi-Fi for seamless connectivity.</li>
                <li>• Access to the Executive Lounge for a productive workspace with premium amenities.</li>
                <li>• Complimentary sunset cocktail session to unwind after work.</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-4 mb-2">Inclusion in room rate:</h3>
              <ul className="list-disc pl-6 space-y-2 list-none">
                <li>• Daily breakfast</li>
                <li>• Daily bottled water, tea, and coffee in the room.</li>
                <li>• Welcome drinks, cold towels, and a fruit platter upon arrival.</li>
                <li>• Complimentary access to the swimming pool and premium Wi-Fi.</li>
                <li>• Complimentary access to the swimming pool and premium Wi-Fi.</li>
              </ul>
              
              <div className="text-center mt-6">
                <button className="bg-[#B89881] hover:bg-[rgba(184,152,129,0.7)] text-white font-bold py-2 px-6 rounded">
                  BOOK NOW
                </button>
                <p className="text-gray-500 mt-2">AVAILABLE From {cost} VND</p>
              </div>
            </div>
          </div>
        )}
          
        </div>
      </div>
    </div>
  );
};

export default Modal