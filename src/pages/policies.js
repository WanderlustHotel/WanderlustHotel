import React from 'react';

const Policies = () => {
  return (
    <section className="bg-gray-100 px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">POLICIES</h2>

      <div className="space-y-8">
        {/* Booking Rules */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Booking Rules</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>
              Room rates are in Vietnamese Dong (VND) and include service and tax fees, along with breakfast for standard occupants.
            </li>
            <li>
              Payments can be made in VND or foreign currency at the hotel’s exchange rate via cash, credit card, or bank transfer.
            </li>
            <li>
              A booking is confirmed only upon receiving a written confirmation from the hotel. Room availability checks by phone do not guarantee a booking.
            </li>
            <li>
              Guests may request specific room features (e.g., bed type, non-smoking), but these are subject to availability.
            </li>
            <li>
              Extra expenses (e.g., laundry, minibar) are payable by guests upon check-out.
            </li>
            <li>
              For group bookings of 10 or more rooms, contact the hotel’s Business Department.
            </li>
          </ul>
        </div>

        {/* Check-in & Check-out Rules */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Check-in & Check-out Rules</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>Check-in: from 2:00 pm. Early check-in can be arranged if the hotel has room availability, with an additional charge.</li>
            <li>Check-out: at 12:00 pm. Half room price applies if check-out is after 12:00 pm, and full room price if after 6:00 pm.</li>
          </ul>
        </div>

        {/* Children and Extra Beds */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Regulations on Children and Extra Beds</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>One child under 12 may share a bed with parents.</li>
            <li>Children under 5 years: Free of charge.</li>
            <li>Children aged 5-11: Surcharge of 175,000 VND/day.</li>
            <li>Children 12+: Considered adults and require an extra bed (800,000 VND/night).</li>
            <li>Extra bed fee: 800,000 VND/night; one extra bed per room.</li>
          </ul>
        </div>

        {/* Cancellation Rules */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Cancellation Rules</h3>
          <p className="text-gray-600 mt-4 font-semibold">For standard price reservations:</p>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>14+ Days Before Check-In: No charge.</li>
            <li>7-14 Days Before Check-In: 50% of the total booking fee charged.</li>
            <li>Less than 7 Days Before Check-In: Full booking fee charged.</li>
          </ul>
          <p className="text-gray-600 mt-4 font-semibold">For promotional price reservations:</p>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>No cancellations allowed after booking confirmation.</li>
            <li>No-Show: Full payment of the booking fee applies.</li>
          </ul>
        </div>

        {/* Deposit Regulations */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Deposit Regulations</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>All reservations require a payment card guarantee at booking.</li>
            <li>Standard Rate: Full payment due 14 days before check-in.</li>
            <li>Promotional Rate: Full payment due upon booking confirmation.</li>
          </ul>
        </div>

        {/* Force Majeure */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Force Majeure</h3>
          <p className="text-gray-600 mt-4">
            The hotel is not liable for cancellations or losses caused by uncontrollable events, such as natural disasters or civil unrest.
          </p>
        </div>

        {/* Pet Policy */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Pets</h3>
          <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
            <li>Only dogs and cats are allowed, with a maximum of two pets per room.</li>
            <li>All pet vaccinations, especially anti-rabies, must be current and valid.</li>
            <li>Pets must be leashed and accompanied by their owners in public areas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Policies;