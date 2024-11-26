import React from 'react';
import { images } from '../images/images';
const attractions = [
    {
      name: 'Vinpearl Land',
      description: 'A popular entertainment complex located on Hon Tre Island in Nha Trang, Vietnam. The large complex features various zones, including a water park, amusement park, and hotel facilities.',
      activities: [
        'Water Park with numerous attractions',
        'Amusement Park with thrilling rides',
        'Aquarium with unique marine life',
        'Entertainment Shows',
        'Outdoor Activities like hiking and kayaking'
      ],
      imageUrl: images.Vinpearl
    },
    {
      name: 'Mini Beach',
      description: 'An appealing destination located near the center of Nha Trang, standing out for its tranquil atmosphere and various recreational activities.',
      activities: [
        'Swimming in clear waters',
        'Water sports like beach volleyball',
        'Sunset watching',
        'Fresh seafood dining',
        'Photography opportunities'
      ],
      imageUrl: images.minibeach
    },
    {
      name: 'Nha Trang Stone Church',
      description: 'A prominent attraction known for its unique Gothic-style architecture, located on Hoang Dieu Hill about 1 km from the city center.',
      activities: [
        'Architectural exploration',
        'Photography',
        'Panoramic city views',
        'Cultural and religious events'
      ],
      imageUrl: images.nhatho
    },
    {
      name: 'Monkey Island',
      description: 'An exciting destination in Nha Trang Bay, known for its unique recreational activities and wild natural scenery.',
      activities: [
        'Observe and feed monkeys',
        'Swimming at clean beaches',
        'Hiking and kayaking',
        'Photography',
        'Local seafood dining'
      ],
      imageUrl: images.islandMonkey
    },
    {
      name: 'Dam Market',
      description: 'A famous traditional market in the city center, serving as both a shopping destination and a cultural hotspot.',
      activities: [
        'Shopping for local products',
        'Culinary experiences',
        'Cultural exploration',
        'Photography in a vibrant atmosphere'
      ],
      imageUrl: images.chodam
    }
  ];
const Things = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-6 text-[rgb(195,144,107)]">EXPERIENCE THE BEAUTY OF NHA TRANG</h1>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        Welcome to The Wanderlust Hotel, your gateway to the stunning coastal wonders of Nha Trang City, Khanh Hoa, Vietnam. Our hotel offers the perfect blend of tranquility and adventure amidst breathtaking mountain landscapes and pristine beaches. Allow us to guide you as we explore the enchanting destinations awaiting you.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 bg-[rgba(184,152,129,0.2)]">Discovering Nha Trang: A Coastal Paradise</h2>
        <p className="text-gray-700 leading-relaxed">
          Nha Trang beckons with its captivating blend of sun-kissed beaches and azure waters, making it a haven for relaxation and exploration. Whether you seek the thrill of water sports, cultural discoveries, or simply unwinding on the soft sands, Nha Trang promises an unforgettable experience.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 bg-[rgba(184,152,129,0.2)]">When to Visit Nha Trang: Embrace Every Season</h2>
        <p className="mb-4 text-gray-700">
          The Wanderlust Hotel welcomes you year-round, but knowing the best time to visit ensures optimal enjoyment of your stay. Nha Trang experiences two distinct seasons:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[rgba(184,152,129,0.2)] p-4 rounded-lg">
            <h3 className="font-bold text-[rgb(195,144,107)] mb-2">Dry Season (December to August)</h3>
            <p className="text-gray-700">
              Ideal for sun-seekers, this period offers pleasant temperatures ranging from 25 to 34°C, perfect for basking in the warmth of the tropical sun and indulging in water activities.
            </p>
          </div>
          <div className="bg-[rgba(184,152,129,0.2)] p-4 rounded-lg">
            <h3 className="font-bold text-[rgb(195,144,107)] mb-2">Rainy Season (September to early December)</h3>
            <p className="text-gray-700">
              While rainfall is intermittent during this season, cooler temperatures ranging from 20 to 25°C prevail. Don't let the rain deter you; Nha Trang's charm shines through, offering unique experiences amidst lush landscapes.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 bg-[rgba(184,152,129,0.2)]">What to Pack: Essentials for Your Journey</h2>
        <p className="mb-4 text-gray-700">
          Preparing for your Nha Trang adventure is key to a comfortable and enjoyable stay. Here's what we recommend packing:
        </p>
        
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>A hat or cap to shield from the sun</li>
          <li>Spare T-shirts and underwear for changing</li>
          <li>Swimwear to dive into the crystalline waters</li>
          <li>A light jacket for cooler evenings</li>
          <li>Lip balm and sunscreen for sun protection</li>
          <li>Sturdy shoes for exploring and adventure</li>
          <li>And, of course, your camera to capture every unforgettable moment</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 bg-[rgba(184,152,129,0.2)]">How to Get There: Your Journey Begins</h2>
        <p className="mb-4 text-gray-700">Embark on your journey to Nha Trang with ease:</p>
        
        <div className="mb-4">
          <h3 className="font-bold text-[rgb(195,144,107)] mb-2">By Plane</h3>
          <p className="text-gray-700">
            Enjoy direct international flights to Cam Ranh Airport (CXR) from major cities like Hong Kong, Seoul, Bangkok, and Kuala Lumpur. Domestic flights connect Nha Trang to Ho Chi Minh City, Hanoi, and Danang, ensuring convenient access to this coastal paradise.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-[rgb(195,144,107)] mb-2">By Land</h3>
          <p className="text-gray-700">
            For those seeking a scenic journey overland, explore alternative routes via Nha Trang Railway Station or Provincial Bus Station.
          </p>
        </div>
      </div>
{/* sssssssssssssssssss */}
        <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-[rgb(195,144,107)]">
            Discover Nha Trang's Attractions
        </h1>
        
        {attractions.map((attraction, index) => (
            <div 
            key={attraction.name} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12 gap-6`}
            >
            <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-[rgb(195,144,107)]">{attraction.name}</h2>
                <p className="mb-4 text-gray-700">{attraction.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                {attraction.activities.map((activity, actIndex) => (
                    <li key={actIndex}>{activity}</li>
                ))}
                </ul>
            </div>
            <div className="md:w-1/2">
                <img 
                src={attraction.imageUrl} 
                alt={attraction.name} 
                className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Things;
