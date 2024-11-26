import React, { useState } from 'react';
import { images } from '../images/images';

const anhs = [
  images.Of2night, images.OfBird, images.OfBooking, images.OfFamily, images.OfHoneymoon, images.OfWork,
  images.FBeef, images.FDuck, images.FLobster, images.FSalted,
  images.meeting1, images.meeting2, images.meeting3, images.menu,
  images.VNO_Amiana, images.VNO_Anvanbay, images.VNO_Ariyana, images.VNO_Citadines, images.VNO_Evason,
  images.VNO_Mia, images.VNO_Mường, images.VNO_Sheraton, images.VNO_Queen, images.VNO_Six, images.VNO_Vinpearl, images.VNO_Wanderlus,
  images.CoAperol, images.CoCosmopolitan, images.CoMartini, images.Cosunset,
  images.earlybird, images.earlyfamily, images.earlyhoney,
  images.xq1, images.xq2, images.xq3, images.xq4,
  images.sanhchinh,
  images.pool, images.pool2, images.pool3, images.pool4, images.pool5, images.pool6, images.pool7, images.pool8, images.pool9, images.pool10,
  images.res1, images.res2, images.res3, images.res4, images.res6,
  images.spa1, images.spa2, images.spa3, images.spa4, images.spa5, images.spa6, images.spa9, images.spa10, images.spa11,
  images.food1, images.food2, images.food3, images.cake, images.beef, images.salmon, images.salad,
  images.nhatho,images.islandMonkey, images.Vinpearl,images.chodam, images.xq5,images.xq6, images.bar2, images.bar3, images.bar4, images.bar5, images.bar6,
  images.RoomDeluxeKingdouble, images.RoomDeluxTwin, images.RoomExecutiveSuite, images.RoomKing, images.RoomSuite,
  images.RoomSuperDouble, images.RoomSuperTubl, images.RoomTwin, images.DoubleDeluxeRoom, images.superior3people,
  images.dr1, images.dr2, images.dr3, images.dr4,
];
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
        {anhs.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden group"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <p className="text-white font-semibold text-lg">View</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
