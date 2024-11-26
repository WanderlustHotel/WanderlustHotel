import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    phone: '',
    preferredDate: '',
    alternativeDate: '',
    numberOfGuests: '',
    estimatedBudget: '',
    timeFrame: '',
    requireAccommodation: 'No',
    services: {
      ceremony: false,
      reception: false,
      rehearsalDinner: false,
      welcomeReception: false,
      postWeddingBrunch: false
    },
    hearAboutUs: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50">
      <h1 className="text-4xl mb-8 text-[#C5A992] font-light">Contact Us</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-lg mb-4 text-gray-700 border-b pb-2">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Event Information */}
        <div className="mb-8">
          <h2 className="text-lg mb-4 text-gray-700 border-b pb-2">Event Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Preferred Date *</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="MM/DD/YYYY"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Alternative Date *</label>
              <input
                type="date"
                name="alternativeDate"
                value={formData.alternativeDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="MM/DD/YYYY"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Number of Guests *</label>
              <input
                type="number"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Estimated Budget per Person</label>
              <input
                type="number"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Time Frame of Event *</label>
              <input
                type="text"
                name="timeFrame"
                value={formData.timeFrame}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-3">Will your event require accommodation?</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="requireAccommodation"
                    value="Yes"
                    checked={formData.requireAccommodation === 'Yes'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="requireAccommodation"
                    value="No"
                    checked={formData.requireAccommodation === 'No'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-3">Service(s) you are interested in: *</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="ceremony"
                    checked={formData.services.ceremony}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Ceremony
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="reception"
                    checked={formData.services.reception}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Reception
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rehearsalDinner"
                    checked={formData.services.rehearsalDinner}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Rehearsal Dinner
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="welcomeReception"
                    checked={formData.services.welcomeReception}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Welcome Reception
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="postWeddingBrunch"
                    checked={formData.services.postWeddingBrunch}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Post-Wedding Brunch
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h2 className="text-lg mb-4 text-gray-700 border-b pb-2">Additional Information</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">How did you hear about The Wharf? *</label>
              <input
                type="text"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Additional Comments</label>
              <textarea
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded h-32"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#C5A992] text-white px-8 py-2 rounded hover:bg-[#B89881] transition-colors"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;