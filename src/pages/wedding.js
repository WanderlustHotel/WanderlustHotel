import React, { useEffect, useRef } from 'react';
import { images } from "../images/images";
import Slideshow from '../components/Slideshow';
import ContactForm from '../components/ContactForm';
const arrImg = [
  images.dr1,
  images.dr2,
  images.dr3,
  images.dr4,
];
const Wedding = () => {
    const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-x-[-50px]');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
    return (
        <div className="bg-gray-100">
            <Slideshow anhSlide={arrImg}/>
            <div className=" text-center p-16 bg-slate-200 w-[1000px] mx-auto my-24">
                <h1 className="text-4xl font-bold">WEDDINGS</h1>
                <p className="mt-6 text-xl font-light">Every fairytale begins with a magical moment, and at <span className='font-bold'>Wanderlust Hotel</span>, we are honored to be </p>
                <p className="text-xl font-light">part of your journey. Your wedding will transform into a masterpiece, adorned with meticulously</p>
                <p className="text-xl font-light">arranged floral decorations, radiant lighting illuminating the beaming smiles of both families,</p>
                <p className="text-xl font-light">and exquisite culinary delights that will enchant all your guests. Every detail is carefully curated,</p>
                <p className="text-xl font-light">creating a perfect beginning to a fulfilling journey together</p>
            </div>

            <div ref={sectionRef} className="bg-gradient-to-b from-gray-700 to-gray-900 text-white p-8 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 animate-item opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out">
          Additional Inclusions
        </h1>
        
        <div className="space-y-6">
          <div className="animate-item opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out delay-100">
            <h3 className="text-xl font-semibold mb-2">Complimentary Honeymoon Suite</h3>
            <p className="text-gray-300">
              Following your reception, couples with over 100 guests may enjoy a complimentary suite on the night of the wedding.
            </p>
          </div>

          <div className="animate-item opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out delay-200">
            <h3 className="text-xl font-semibold mb-2">Menu Tasting</h3>
            <p className="text-gray-300">
              For all weddings of 75 or more guests, a dinner menu tasting is available gratis. Scheduled 3 months prior to the wedding date, we will custom prepare a tasting experience for two guests.
            </p>
          </div>

          <div className="animate-item opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out delay-300">
            <h3 className="text-xl font-semibold mb-2">Parking</h3>
            <p className="text-gray-300">
              We provide valet parking for all events. Day and evening parking is available for a reduced rate when paid by and posted to the client's master account.
            </p>
          </div>

          <div className="animate-item opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out delay-400">
            <h3 className="text-xl font-semibold mb-2">Special Services</h3>
            <p className="text-gray-300">
              Should you require entertainment, photography, decor or custom ice carvings, your catering representative will be pleased to help bring your wishes to life.
            </p>
          </div>
        </div>
      </div>
    </div>
    <ContactForm />
        </div>
    );
};

export default Wedding;


