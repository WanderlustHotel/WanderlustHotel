import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const BookingHeader = () => {
  const [showArriveCalendar, setShowArriveCalendar] = useState(false);
  const [showDepartCalendar, setShowDepartCalendar] = useState(false);
  const [showRoomSelector, setShowRoomSelector] = useState(false);
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState(1);
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [arriveDate, setArriveDate] = useState(new Date());
  const [departDate, setDepartDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
  
  const handleSelectorClick = (selector) => {
    switch(selector) {
      case 'arrive':
        setShowArriveCalendar(!showArriveCalendar);
        setShowDepartCalendar(false);
        setShowRoomSelector(false);
        setShowGuestSelector(false);
        break;
      case 'depart':
        setShowDepartCalendar(!showDepartCalendar);
        setShowArriveCalendar(false);
        setShowRoomSelector(false);
        setShowGuestSelector(false);
        break;
      case 'rooms':
        setShowRoomSelector(!showRoomSelector);
        setShowArriveCalendar(false);
        setShowDepartCalendar(false);
        setShowGuestSelector(false);
        break;
      case 'guests':
        setShowGuestSelector(!showGuestSelector);
        setShowArriveCalendar(false);
        setShowDepartCalendar(false);
        setShowRoomSelector(false);
        break;
    }
  };

  const CustomDatePicker = ({ selected, onChange, minDate, highlightDate }) => (
    <div className="absolute top-full left-0 z-50">
      <DatePicker
        selected={selected}
        onChange={onChange}
        inline
        minDate={minDate}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div className="bg-[#3F3F3F] text-white px-4 py-2 flex justify-between items-center">
            <ChevronLeft 
              className="w-5 h-5 cursor-pointer" 
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            />
            <span>{format(date, 'MMM yyyy')}</span>
            <ChevronRight 
              className="w-5 h-5 cursor-pointer" 
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            />
          </div>
        )}
        calendarClassName="bg-white shadow-lg"
        dayClassName={date => {
          const isHighlighted = highlightDate && 
            date.getDate() === highlightDate.getDate() && 
            date.getMonth() === highlightDate.getMonth() && 
            date.getYear() === highlightDate.getYear();
          return `text-center p-1 hover:bg-gray-100 cursor-pointer ${isHighlighted ? 'bg-[#C5A992] text-white hover:bg-[#C5A992]' : ''}`;
        }}
      />
    </div>
  );

  const NumberSelector = ({ max = 9, onSelect, selectedValue }) => (
    <div className="absolute top-full left-0 bg-white shadow-lg z-50 min-w-[120px]">
      <div className="grid grid-cols-3 gap-px bg-gray-100">
        {[...Array(max)].map((_, i) => (
          <div
            key={i + 1}
            onClick={() => {
              onSelect(i + 1);
              setShowRoomSelector(false);
              setShowGuestSelector(false);
            }}
            className={`
              text-center p-2 cursor-pointer bg-white hover:bg-gray-50
              ${i + 1 === selectedValue ? 'bg-[#C5A992] text-white hover:bg-[#C5A992]' : ''}
            `}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Arrive Section */}
            <div className="relative">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 uppercase text-sm tracking-wide">Check in</span>
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSelectorClick('arrive')}
                >
                  <span className="text-2xl font-light">{format(arriveDate, 'd')}</span>
                  <span className="text-sm text-gray-500 ml-1">{format(arriveDate, 'MMM').toUpperCase()}</span>
                  <ChevronDown className="h-4 w-4 text-[#C5A992] ml-1" />
                </div>
              </div>
              {showArriveCalendar && (
                <CustomDatePicker
                  selected={arriveDate}
                  highlightDate={arriveDate}
                  onChange={(date) => {
                    setArriveDate(date);
                    setShowArriveCalendar(false);
                    // If depart date is before new arrive date, update it
                    if (departDate < date) {
                      setDepartDate(new Date(date.setDate(date.getDate() + 1)));
                    }
                  }}
                  minDate={new Date()}
                />
              )}
            </div>

            {/* Depart Section */}
            <div className="relative">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 uppercase text-sm tracking-wide">Check out</span>
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSelectorClick('depart')}
                >
                  <span className="text-2xl font-light">{format(departDate, 'd')}</span>
                  <span className="text-sm text-gray-500 ml-1">{format(departDate, 'MMM').toUpperCase()}</span>
                  <ChevronDown className="h-4 w-4 text-[#C5A992] ml-1" />
                </div>
              </div>
              {showDepartCalendar && (
                <CustomDatePicker
                  selected={departDate}
                  highlightDate={departDate}
                  onChange={(date) => {
                    setDepartDate(date);
                    setShowDepartCalendar(false);
                  }}
                  minDate={new Date(arriveDate.getTime() + 86400000)} // Add 1 day in milliseconds
                />
              )}
            </div>

            {/* Rooms Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSelectorClick('rooms')}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-light">{selectedRooms}</span>
                    <span className="text-gray-600 uppercase text-sm tracking-wide">Rooms</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-[#C5A992] ml-1" />
                </div>
                {showRoomSelector && (
                  <NumberSelector 
                    max={9} 
                    onSelect={setSelectedRooms}
                    selectedValue={selectedRooms}
                  />
                )}
              </div>

              <span className="text-gray-300">|</span>

              {/* Guests Section */}
              <div className="relative">
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSelectorClick('guests')}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-light">{selectedGuests}</span>
                    <span className="text-gray-600 uppercase text-sm tracking-wide">Guests</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-[#C5A992] ml-1" />
                </div>
                {showGuestSelector && (
                  <NumberSelector 
                    max={6} 
                    onSelect={setSelectedGuests}
                    selectedValue={selectedGuests}
                  />
                )}
              </div>

              <span className="text-gray-300">|</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="grid grid-cols-2 gap-4">
              
            </div>
            
            <button className="bg-[#C5A992] text-white px-6 py-2 uppercase text-sm hover:bg-[#B89881] transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;