import React from 'react';
import { images } from '../images/images';

const vietnamonline = () => {
    const hotels = [
      { id: 'vinpearl', title: 'Vinpearl Nha Trang', description: 'Namely the best resort complex in Vietnam and a tourist attraction in its own right, Vinpearl stands out as the best option one can afford. Beside hundreds of designer rooms available, the resort accommodates luxurious amusements including refined restaurants, fitness centers, sport facilities and other gathering hubs. Especially, in Vinpearl, one has access to a unique shopping center and amusement park that never fail to entertain any residents. Come to Vinpearl and see for yourself the alleged best of its ilk in the country.', image: images.VNO_Vinpearl },
      { id: 'amiana', title: 'Amiana Resort Nha Trang', description: 'The awarded Amiana Resort will complete your journey around the city with a luxurious and supreme living experience. From private beaches, bars, restaurants, spa and other facilities including swimming pool, recreational center to water sports service,  Amiana Resort will make your stay the highlight of the trip by engaging you in a modern and comfortable accommodation, meanwhile securing the close contact with Mother Nature.', image: images.VNO_Amiana },
      { id: 'sheraton', title: 'Nha Trang Sheraton Hotel and Spa', description: 'You cannot enjoy your stay without the open space of a resort and the modern comfort of the urban? Nha Trang Sheraton Hotel and Spa ensures you have the best of both worlds, accommodating a pool complex and other facilities out in the open despite its location in the middle of a busy city. One member of the popular Sheraton, Nha Trang Sheraton Hotel and Spa is renowned for its traditional designer rooms and interiors, which will perfect your experience visually.', image: images.VNO_Sheraton },
      { id: 'muong-thanh', title: 'Mường Thanh Hotel', description: 'Unlike Vinpearl, which is located on a separate and private islet, Mường Thanh appeals to the prospective customers by the virtue for its strategic location on Trần Phú Street. With all the most boisterous places within walking distance, the residents find it easy to enjoy all the funs the city can offer. Moreover, the hotel is famous for its diverse and impeccable menus along with the delicately designed rooms and attentive staff.', image: images.VNO_Mường },
      { id: 'mia', title: 'Mia Resort Nha Trang', description: "On the rim of the outrageously beautiful Cam Ranh Bay, Mia Resort is among the region's most luxurious and eco-friendly beachfront residence. It leans on the tree-clad steep mountain and overlooks the blue beach. The property thoughtfully utilizes natural materials for its rooms and villas and offers a blissful wellness retreat for pure escapism.", image: images.VNO_Mia },
      { id: 'wanderlust', title: 'The Wanderlust Hotel', description: "The Wanderlust Hotel - a 4-star beachfront retreat in Nha Trang designed to blend luxury and local charm. Overlooking the stunning East Sea, the hotel offers elegantly appointed rooms, suites, and modern amenities, all wrapped in warm Vietnamese hospitality. Whether you're here to unwind, explore, or indulge, The Wanderlust Hotel promises a memorable escape in one of Vietnam’s most captivating coastal cities.", image: images.VNO_Wanderlus },
      { id: 'citadines', title: 'Citadines Bayfront Nha Trang', description: 'Citadines Bayfront Nha Trang is a high-rise building within acres of pristine sandy beach stretch. The hotel features a contemporary design with sleek, compact accommodations and state-of-the-art amenities. Yet, it remains an intimate feel with a natural sandy strip to the quiet beach and a large outdoor swimming pool shaded by swaying palm trees.', image: images.VNO_Citadines},
      { id: 'queen-ann', title: 'Queen Ann Nha Trang Hotel', description: 'Queen Ann Nha Trang Hotel provides 5-star rooms and services yet at a very affordable price. The hotel boasts an opulent, marvelous outlook viewing Nha Trang Bay. Both leisure and business travelers can expect the ultimate indulgence in this hi-end property.', image: images.VNO_Queen },
      { id: 'ariyana', title: 'Ariyana Smart Condotel Nha Trang', description: 'A lot of holiday-makers dream of a convenient accommodation with smart home design and it never goes wrong at Ariyana Smart Condotel Nha Trang. The condotel has a colorful, eye-catching design and an infinitive swimming pool. You can find yourself just like right at your home with a full range of modern furniture and facilities.', image: images.VNO_Ariyana },
      { id: 'six-senses', title: 'Six Senses Ninh Van Bay', description: 'Lodgings go far beyond your imagination at Six Sense Ninh Van Bay. In a secluded location surrounded by lush wilderness, each thatched villa comes with a private swimming pool and majestic views of the bay. The upscale resort offers an opportunity to escape in an environmental-friendly and massive space.', image: images.VNO_Six },
      { id: 'an-lam', title: 'An Lam Ninh Van Bay', description: 'An Lam retreat possesses a dramatic locale, nestled in the tranquil peninsula with crystal clear beaches and lush jungles. This adult-only resort comprises timber villas with pools, a sumptuous spa, and a range of strenuous activities for adventure seekers.', image: images.VNO_Anvanbay },
      { id: 'ana-mandara', title: 'Evason Ana Mandara Resort', description: 'This secluded beachfront resort is ideally adjacent to the city so you can easily ramble around or ride a bike to visit the center. Accommodations are not only spacious but also provide spectacular views either to the bay or the tropical garden. The rustic vibe of the Vietnamese village is awash here with traditional, wooden furniture and mosquito nets.', image: images.VNO_Evason },
    ];
  
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">12 Best Luxury Hotels & Resorts in Nha Trang</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          With its tourism fully developed, Nha Trang allows for a wide array of accommodations competing for tourists’ attention...
        </p>
  
        {/* Navigation Links */}
        <div className="bg-gray-100 p-4 rounded-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">In This Article</h2>
          <ul className="list-disc list-inside">
            {hotels.map((hotel) => (
              <li key={hotel.id}>
                <a href={`#${hotel.id}`} className="text-blue-600 hover:underline">
                  {hotel.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Hotel Sections */}
        {hotels.map((hotel) => (
          <section
            key={hotel.id}
            id={hotel.id}
            className="mb-12 border-b pb-6"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {hotel.title}
            </h2>
            <img
              src={hotel.image}
              alt={hotel.title}
              className="w-full max-w-3xl h-auto mb-4 rounded-md shadow-md"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              {hotel.description}
            </p>
          </section>
        ))}
      </div>
    );
  };

export default vietnamonline;