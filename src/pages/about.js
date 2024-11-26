import React from 'react';
import { images } from '../images/images';
const About = () => {
  return (
    <div className="bg-white text-black py-16 px-4">
      <div className="container mx-auto">
        {/* Large Image Section */}
        <div className="relative mb-16">
          <img 
            src={images.xq5} 
            alt="Wanderlust Nha Trang Hotel" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-8 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-4">
            <h2 className="text-3xl font-semibold">Wanderlust Nha Trang Hotel</h2>
            <p className="text-lg mt-2">Proudly located on the shore of Tran Phu beach, known for its stunning natural beauty and fine white sand.</p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row mb-16">
          <div className="lg:w-1/2">
            <img 
              src={images.xq6} 
              alt="The Founder" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">The Founder</h2>
            <p className="text-lg">
              Established in 2004, by Tran Huu Loc – a Vietnamese businessman, the hotel quickly became a symbol of luxury and hospitality in the coastal city.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse mb-16">
          <div className="lg:w-1/2">
            <img 
              src={images.xq5} 
              alt="How we develop" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pr-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">How We Develop</h2>
            <p className="text-lg">
              From the early days, Wanderlust has focused on building as a delicate resort space, harmoniously combining modern architecture and natural beauty. After two decades of operation, the hotel has gone through many stages of strong development.
            </p>
            <p className="text-lg">
              In 2010, with a comprehensive upgrade investment, Wanderlust launched luxuriously designed new rooms, along with modern facilities such as swimming pools, meeting rooms, relaxing spas, and restaurants serving local and international cuisine.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row mb-16">
          <div className="lg:w-1/2">
            <img 
              src="https://your-image-url.com/success.jpg" 
              alt="How we succeed" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">How We Succeed</h2>
            <p className="text-lg">
              Hotels are not just a resort; but also an important part of Nha Trang tourism development. Every year, Wanderlust attracts millions of domestic and foreign tourists, creates hundreds of jobs for local people, and contributes positively to the regional economy.
            </p>
            <p className="text-lg">
              The hotel regularly organizes cultural events and environmental protection activities, in order to raise community awareness and preserve the natural beauty of Nha Trang.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col lg:flex-row-reverse mb-16">
          <div className="lg:w-1/2">
            <img 
              src={images.weare} 
              alt="Our Service" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pr-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Our Service</h2>
            <p className="text-lg">
              At Wanderlust, every visitor is welcomed by the dedication and professionalism of the staff. Our staff is not only well-trained but also has a passion and enthusiasm for the profession.
            </p>
            <p className="text-lg">
              We are committed to bringing memorable experiences, from the beautiful sunrise by the sea to romantic evenings under the shimmering lights.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="flex flex-col lg:flex-row mb-16">
          <div className="lg:w-1/2">
            <img 
              src="https://your-image-url.com/mission.jpg" 
              alt="Mission" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Mission</h2>
            <p className="text-lg">
              Our mission is to bring great resort experiences, connecting visitors with the beauty and culture of Nha Trang. We are committed to constantly improving our services to ensure that every customer is satisfied and comes back.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="flex flex-col lg:flex-row-reverse mb-16">
          <div className="lg:w-1/2">
            <img 
              src="https://your-image-url.com/values.jpg" 
              alt="Core Values" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pr-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
            <p className="text-lg">
              The core values of Wanderlust Hotel include dedication, quality and sustainability. We always put the interests of our customers first, carry out activities to protect the environment and support the community, in order to create a better living environment for everyone.
            </p>
          </div>
        </div>

        {/* Section 7 */}
        <div className="flex flex-col lg:flex-row mb-16">
          <div className="lg:w-1/2">
            <img 
              src="https://your-image-url.com/future.jpg" 
              alt="Future Vision" 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Future Vision</h2>
            <p className="text-lg">
              Looking to the future, Wanderlust Nha Trang Hotel is constantly innovating and developing, with the goal of becoming the top destination for those who seek peace and luxury in the heart of this beautiful coastal city.
            </p>
            <p className="text-lg">
              Come and feel the beauty, warmth and hospitality that we have reserved for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;