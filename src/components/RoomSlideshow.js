// import React, { useState } from "react";
// import { images } from '../images/images';
// import { useNavigate } from "react-router-dom";
// const rooms = [
//     { id: 1, title: "Superior Double Room", description: "Unwind in a stylish space with sweeping sea and city views. This room's cozy ambiance and balcony make it perfect for a restful escape with modern comforts.", imageUrl: images.RoomSuperDouble, detailsUrl: "/rooms/SuperiorDoubleRoom"},
//     { id: 2, title: "Superior Room for 3 people Room", description: "Ideal for small groups, this room combines comfort and convenience, with stunning city and sea views from your private balcony.", imageUrl: images.superior3people, detailsUrl: "/rooms/SuperiorRoom3" },
//     { id: 3, title: "Deluxe Twin Room", description: "Spacious and bright, this room offers two comfy beds and a view that captures the beauty of the city and sea. A perfect blend of relaxation and style.", imageUrl: images.RoomDeluxTwin, detailsUrl: "/rooms/DeluxeTwinRoom" },
//     { id: 4, title: "Suite Executive Room", description: "Indulge in luxury with this expansive suite, featuring a private balcony, hot tub, and a pool with a view. An exclusive experience for guests seeking the best.", imageUrl: images.RoomExecutiveSuite, detailsUrl: "/rooms/SuiteExecutiveRoom" },  
//     { id: 5, title: "Suite Room", description: "Enjoy elegance and serenity in this private suite, with breathtaking views and premium amenities designed for a refined stay.", imageUrl: images.RoomSuite, detailsUrl: "/rooms/SuiteRoom" },
    
//   ];
  
//   const RoomSlideshow = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const navigate = useNavigate();
//     const handleViewMore = (url) => {
//       navigate(url);
//     };
  
//     // Hiển thị chỉ 3 phòng
//     const visibleRooms = [
//       rooms[(currentIndex + 0) % rooms.length],
//       rooms[(currentIndex + 1) % rooms.length],
//       rooms[(currentIndex + 2) % rooms.length],
//     ];
  
//     // Hàm xử lý khi người dùng nhấn vào một phòng
//     const handleRoomClick = (index) => {
//       setCurrentIndex(index); // Cập nhật chỉ số phòng được chọn
//     };
  
//     return (
//       <div className="relative w-full px-4 py-8 h-[660px]">
//       <div className=" text-center mb-8">
//         <h1 className="text-4xl font-bold">Our rooms & suites</h1>
//         <p className="mt-6 text-xl font-light">With views of the sea, every room is unique: a combination of understated luxury, intricate detail, and original design.</p>
//     </div>
//         <div className="flex justify-center items-center mb-4">
//           <div className="flex w-full justify-center overflow-hidden">
//             {visibleRooms.map((room, index) => {
//               const isSelected = index === 1; // Phòng ở giữa là phòng được chọn
//               return (
//                 <div
//                   key={room.id}
//                   className={`relative mx-2 flex flex-col justify-between transition-all duration-500 ease-in-out ${isSelected ? 'w-full sm:w-1/3 h-[450px]' : 'w-full sm:w-1/3 h-[250px] mt-10'}`}
//                   onClick={() => handleRoomClick(currentIndex + index - 1)} // Cập nhật phòng được chọn khi nhấn
//                 >
//                   <div className={`w-full overflow-hidden rounded-md relative transition-all duration-500 ${isSelected ? 'h-[350px]' : 'h-[250px]'}`}>
//                     <img
//                       src={room.imageUrl}
//                       alt={room.title}
//                       className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
//                     />
//                   </div>
//                   <div className={`mt-4 text-center transition-all duration-500 ease-in-out ${isSelected ? 'mb-6' : ''}`}>
//                     <h3 className="text-xl font-semibold">{room.title}</h3>
//                   </div>
//                   {isSelected && (
//                     <>
//                     <div className="text-center mt-4">
//                       <p className="text-sm mt-[-30px]">{room.description}</p>
//                     </div>
//                     <div className="flex mt-3 justify-around space-x-4">
//                       <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out">
//                       BOOK NOW
//                       </button>
//                       <button className="px-4 py-2 bg-[#B89881] text-white rounded-md hover:bg-[rgba(184,152,129,0.7)]0 transition-colors duration-300 ease-in-out" onClick={() => handleViewMore(room.detailsUrl)}>
//                       DETAILS
//                       </button>
//                     </div>
//                     </>

//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };
// export default RoomSlideshow;
import React, { useState } from "react";
import { images } from '../images/images';
import { useNavigate } from "react-router-dom";

const rooms = [
    { id: 1, title: "Superior Double Room", description: "Unwind in a stylish space with sweeping sea and city views. This room's cozy ambiance and balcony make it perfect for a restful escape with modern comforts.", imageUrl: images.RoomSuperDouble, detailsUrl: "/rooms/SuperiorDoubleRoom"},
    { id: 2, title: "Superior Room for 3 people Room", description: "Ideal for small groups, this room combines comfort and convenience, with stunning city and sea views from your private balcony.", imageUrl: images.superior3people, detailsUrl: "/rooms/SuperiorRoom3" },
    { id: 3, title: "Deluxe Twin Room", description: "Spacious and bright, this room offers two comfy beds and a view that captures the beauty of the city and sea. A perfect blend of relaxation and style.", imageUrl: images.RoomDeluxTwin, detailsUrl: "/rooms/DeluxeTwinRoom" },
    { id: 4, title: "Suite Executive Room", description: "Indulge in luxury with this expansive suite, featuring a private balcony, hot tub, and a pool with a view. An exclusive experience for guests seeking the best.", imageUrl: images.RoomExecutiveSuite, detailsUrl: "/rooms/SuiteExecutiveRoom" },  
    { id: 5, title: "Suite Room", description: "Enjoy elegance and serenity in this private suite, with breathtaking views and premium amenities designed for a refined stay.", imageUrl: images.RoomSuite, detailsUrl: "/rooms/SuiteRoom" },
];

const RoomSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleViewMore = (url) => {
        navigate(url);
    };

    // Safely get rooms with proper wrapping
    const getVisibleRooms = (startIndex) => {
        return [
            rooms[(startIndex) % rooms.length],
            rooms[(startIndex + 1) % rooms.length],
            rooms[(startIndex + 2) % rooms.length]
        ];
    };

    const [visibleRooms, setVisibleRooms] = useState(getVisibleRooms(0));

    // Hàm xử lý khi người dùng nhấn vào một phòng
    const handleRoomClick = (index) => {
        // Calculate new currentIndex and update visibleRooms
        const newIndex = (currentIndex + index - 1 + rooms.length) % rooms.length;
        setCurrentIndex(newIndex);
        setVisibleRooms(getVisibleRooms(newIndex));
    };

    return (
        <div className="relative w-full px-4 py-8 h-[660px]">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Our rooms & suites</h1>
                <p className="mt-6 text-xl font-light">With views of the sea, every room is unique: a combination of understated luxury, intricate detail, and original design.</p>
            </div>
            <div className="flex justify-center items-center mb-4">
                <div className="flex w-full justify-center overflow-hidden">
                    {visibleRooms.map((room, index) => {
                        const isSelected = index === 1; // Phòng ở giữa là phòng được chọn
                        return (
                            <div
                                key={room.id}
                                className={`relative mx-2 flex flex-col justify-between transition-all duration-500 ease-in-out ${isSelected ? 'w-full sm:w-1/3 h-[450px]' : 'w-full sm:w-1/3 h-[250px] mt-10'}`}
                                onClick={() => handleRoomClick(index)} // Pass the index of the clicked room
                            >
                                <div className={`w-full overflow-hidden rounded-md relative transition-all duration-500 ${isSelected ? 'h-[350px]' : 'h-[250px]'}`}>
                                    <img
                                        src={room.imageUrl}
                                        alt={room.title}
                                        className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
                                    />
                                </div>
                                <div className={`mt-4 text-center transition-all duration-500 ease-in-out ${isSelected ? 'mb-6' : ''}`}>
                                    <h3 className="text-xl font-semibold">{room.title}</h3>
                                </div>
                                {isSelected && (
                                    <>
                                        <div className="text-center mt-4">
                                            <p className="text-sm mt-[-30px]">{room.description}</p>
                                        </div>
                                        <div className="flex mt-3 justify-around space-x-4">
                                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out">
                                                BOOK NOW
                                            </button>
                                            <button 
                                                className="px-4 py-2 bg-[#B89881] text-white rounded-md hover:bg-[rgba(184,152,129,0.7)] transition-colors duration-300 ease-in-out" 
                                                onClick={() => handleViewMore(room.detailsUrl)}
                                            >
                                                DETAILS
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RoomSlideshow;