import React, { useState } from 'react';
import { images } from '../images/images';
import FoodCard from '../components/FoodCard';
import ImageCard from '../components/ImageCard';
import Slideshow from '../components/Slideshow';

const arrImg = [
  images.res1,
  images.res2,
  images.res3,
];


const dishes = [
  { id: 1, main: "Appetizers" ,title: "Lobster bisque soup", description: "Lobster Bisque is a refined and elegant soup, featuring a rich and creamy texture derived from fresh lobster broth blended with smooth cream", imageUrl: images.FLobster },
  { id: 2, main: "Main Courses" ,title: "Australian Beef Tenderloin with Red Wine Sauce", description: "Australian Beef Tenderloin with Red Wine Sauce", imageUrl: images.FBeef },
  { id: 3, main: "Main Courses" ,title: "Duck Breast with Orange Glaze",description:"Pan-seared duck breast with a perfectly crispy skin, paired with a refreshing orange glaze that balances the rich flavor of the duck with a light, tangy sweetness", imageUrl: images.FDuck },
  { id: 4, main: "Dessert" ,title: "Salted caramel chocolate cake", description: "A delightful combination of rich chocolate sweetness and a subtle touch of salted caramel. This decadent chocolate cake, with its moist, smooth texture, is perfectly balanced by the savory notes of salted caramel, making each bite a memorable experience", imageUrl: images.FSalted },    
];

const DishesSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Safely get dishes with proper wrapping
  const getVisibleDishes = (startIndex) => {
    return [
      dishes[(startIndex) % dishes.length],
      dishes[(startIndex + 1) % dishes.length],
      dishes[(startIndex + 2) % dishes.length]
    ];
  };

  const [visibleDishes, setVisibleDishes] = useState(getVisibleDishes(0));

  // Hàm xử lý khi người dùng nhấn vào một món ăn
  const handleDishClick = (index) => {
    // Calculate new currentIndex and update visibleDishes
    const newIndex = (currentIndex + index - 1 + dishes.length) % dishes.length;
    setCurrentIndex(newIndex);
    setVisibleDishes(getVisibleDishes(newIndex));
  };

  return (
    <div className="relative w-full px-4 py-8 h-[660px]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">SIGNATURE DISHES</h1>
        <p className="mt-6 text-xl font-light">At La Lana, you will indulge in dishes crafted from the freshest ingredients, rich in both local and international flavors:</p>
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="flex w-full justify-center overflow-hidden">
          {visibleDishes.map((dish, index) => {
            const isSelected = index === 1; // Dish in the middle is the selected one
            return (
              <div
                key={dish.id}
                className={`relative mx-2 flex flex-col justify-between transition-all duration-500 ease-in-out ${isSelected ? 'w-full sm:w-1/3 h-[450px]' : 'w-full sm:w-1/3 h-[250px] mt-10'}`}
                onClick={() => handleDishClick(index)} // Pass the index of the clicked dish
              >
                <div className={`w-full overflow-hidden rounded-md relative transition-all duration-500 ${isSelected ? 'h-[350px]' : 'h-[250px]'}`}>
                  <img
                    src={dish.imageUrl}
                    alt={dish.title}
                    className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div className={`mt-4 text-center transition-all duration-500 ease-in-out ${isSelected ? 'mb-6' : ''}`}>
                  <h3 className="text-xs font-semibold uppercase italic">{dish.main}</h3>
                  <h3 className="text-xl font-semibold">{dish.title}</h3>
                </div>
                {isSelected && (
                  <div className="text-center mt-4">
                    <p className="text-sm mt-[-30px]">{dish.description}</p>
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

const restaurant = () => {
    return (
      <div className="bg-gray-100">
      <Slideshow anhSlide={arrImg}/>
      <div className=" text-center p-16 bg-slate-200 w-[1000px] mx-auto my-24">
        <h1 className="text-4xl font-bold">LA LANA RESTAURANT</h1>
        <p className="mt-6 text-xl font-light">A secluded gem located just 100 meters from the Wanderlust Hotel, offering a luxurious</p>
        <p className="text-xl font-light">ambiance with breathtaking panoramic views of the sea. La Terraza specializes in Mediterranean</p>
        <p className="text-xl font-light">cuisine, beautifully harmonized with distinctive Vietnamese flavors. With its modern</p>
        <p className="text-xl font-light">architectural style complemented by a warm and inviting atmosphere, the restaurant serves as the</p>
        <p className="text-xl font-light">perfect setting for family gatherings, business meetings, or romantic evenings</p>
      </div>
      <DishesSlideshow />
      <div className="container mx-auto my-12 px-6">
      {/* Đường gạch trên và dưới container */}
      <div className="border-y border-gray-300"></div>
      <div className="bg-gray-100 rounded-lg py-8 px-4 sm:px-8 lg:px-12 relative">
        <div className=" border-gray-300 w-1/2 mx-auto absolute top-0 left-1/4"></div>

        {/* Nội dung chính */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>+45454515</li>
              <li>lalanareataurant@gmail.com</li>
            </ul>
          </div>

          {/* Operating Hours Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Operating Hours</h3>
            <ul className="space-y-2">
              <li>Breakfast: 6:30 AM - 10:00 AM</li>
              <li>Lunch: 12:00 PM - 2:00 PM</li>
              <li>Dinner: 6:00 PM - 10:00 PM</li>
            </ul>
          </div>

          {/* Download Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Download</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://drive.google.com/file/d/1fNMfBLKUXU5FQDiEZPdjBxkRYy9AHmvp/view?usp=drive_link"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Appetizers
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1Rkwa9WW4cVVmgVFTZG7ndCzWtUy3bm-_/view?usp=drive_link"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Main Courses
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1iuvTpuzuQTZjOva26ZuwvyXKC4a2A1LJ/view?usp=drive_link"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dessert
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4"></div>
    </div>
    </div>
    );
};

export default restaurant;