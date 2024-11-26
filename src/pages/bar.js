import React, { useState } from 'react';
import Slideshow from '../components/Slideshow';
import { images } from '../images/images';

const arrImg = [
    images.bar4,
    images.bar5,
    images.bar6,
  ];
  const bars = [
      { id: 1, title: "Sunset Breeze", description: "A vibrant cocktail embodying the hues of twilight, combining rum, fresh orange juice, and a hint of crushed strawberries.", imageUrl: images.Cosunset },
      { id: 2, title: "Martini", description: "A timeless classic, this cocktail is a refined blend of gin and dry vermouth, served chilled with an olive or twist, embodying elegance and sophistication.", imageUrl: images.CoMartini },
      { id: 3, title: "Aperol Spritz", description: "A vibrant and refreshing cocktail, mixing Aperol, Prosecco, and a splash of soda, capturing the spirit of Italian aperitivo with its bright, orange glow.", imageUrl: images.CoAperol },
      { id: 4, title: "Cosmopolitan", description: "A stylish mix of vodka, cranberry juice, and a hint of citrus, this pink-hued cocktail is as bold and glamorous as the city that inspired it.", imageUrl: images.CoCosmopolitan },  
  ];
  
  const BarSlideshow = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
  
      // Safely get bars with proper wrapping
      const getVisibleBars = (startIndex) => {
          return [
              bars[(startIndex) % bars.length],
              bars[(startIndex + 1) % bars.length],
              bars[(startIndex + 2) % bars.length]
          ];
      };
  
      const [visibleBars, setVisibleBars] = useState(getVisibleBars(0));
  
      // Hàm xử lý khi người dùng nhấn vào một cocktail
      const handleBarClick = (index) => {
          // Calculate new currentIndex and update visibleBars
          const newIndex = (currentIndex + index - 1 + bars.length) % bars.length;
          setCurrentIndex(newIndex);
          setVisibleBars(getVisibleBars(newIndex));
      };
  
      return (
          <div className="relative w-full px-4 py-8 h-[660px]">
              <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold">SIGNATURE COCKTAIL</h1>
              </div>
              <div className="flex justify-center items-center mb-4">
                  <div className="flex w-full justify-center overflow-hidden">
                      {visibleBars.map((bar, index) => {
                          const isSelected = index === 1; // Cocktail in the middle is selected
                          return (
                              <div
                                  key={bar.id}
                                  className={`relative mx-2 flex flex-col justify-between transition-all duration-500 ease-in-out ${isSelected ? 'w-full sm:w-1/3 h-[450px]' : 'w-full sm:w-1/3 h-[250px] mt-10'}`}
                                  onClick={() => handleBarClick(index)} // Pass the index of the clicked cocktail
                              >
                                  <div className={`w-full overflow-hidden rounded-md relative transition-all duration-500 ${isSelected ? 'h-[350px]' : 'h-[250px]'}`}>
                                      <img
                                          src={bar.imageUrl}
                                          alt={bar.title}
                                          className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
                                      />
                                  </div>
                                  <div className={`mt-4 text-center transition-all duration-500 ease-in-out ${isSelected ? 'mb-6' : ''}`}>
                                      <h3 className="text-xl font-semibold">{bar.title}</h3>
                                  </div>
                                  {isSelected && (
                                      <div className="text-center mt-4">
                                          <p className="text-sm mt-[-30px]">{bar.description}</p>
                                      </div>
                                  )}
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      );
  };
const bar = () => {
    return (
        <div className=" bg-gray-100">
        <Slideshow anhSlide={arrImg}/>
        <div className=" text-center p-16 bg-slate-200 w-[1000px] mx-auto my-24">
        <h1 className="text-4xl font-bold">SKY BAR</h1>
        <p className="mt-6 text-xl font-light">Nestled beside the rooftop pool of our hotel, offers the perfect setting to savor exquisite cocktails </p>
        <p className="text-xl font-light">against the backdrop of breathtaking sunsets. Our bar features a diverse beverage menu, ranging</p>
        <p className="text-xl font-light">from fine wines to innovative cocktails</p>
        <h1 className="text-2xl font-bold mt-6">Open daily from 5:00 PM - 11:00 PM</h1>
      </div>
      <BarSlideshow />
      <div className='text-center'>
      <a
                  href="https://drive.google.com/file/d/1JDSeq1N6qvhwMG10edeqBGVfYvyD9zjx/view?usp=drive_link"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
      </div>
        </div>
    );
};

export default bar;