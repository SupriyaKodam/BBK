import React, { useState } from 'react';
import CityList from './CityList';
import Footer from './Footer';

const BulkOrderPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Show the popup after form is submitted
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-8 mt-20">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
          
          {/* Left Side: Bulk Order Information */}
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-700 mb-8 lg:mb-0">
            {/* Bulk Order Heading */}
            <h1 className="text-4xl font-bold text-gradient text-black mb-4">
              BULK ORDER FOR CELEBRATIONS
            </h1>
            <p className="text-lg text-gray-800 mb-4">
              Whether it's an office celebration, a social gathering, or a house party, we've got you covered. Bond over an authentic treat of Dum Biryani, Kebabs, Kormas, and much more with your colleagues, friends, or family. Enjoy a freshly cooked feast with India's most loved Biryani & Kebab chain.
            </p>
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">AUTHENTIC TASTE, DELIVERED FRESH ON EVERY ORDER!</h2>
            <p className="text-lg text-gray-700 mb-4">
              Biryani By Kilo understands the growing sentiments regarding food hygiene. Hence, every order is prepared fresh by following strict safety and hygiene protocols. The company delivers fresh Handi Biryani in the same Handi it is prepared in by heat-sealing them with Aata so the customer is the first and only one to open it.
            </p>
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">Delivering fresh feast on precise demand!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Enjoy personalized corporate services like Bulk orders, caterings, gift vouchers, and more.
            </p>
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">ADD DUM TO CELEBRATIONS</h2>
            <p className="text-lg text-gray-700 mb-4">
              Celebrate the authentic Dum of India's most loved Biryani & Kebab chain with your colleagues. Let the conversations flow and let your tastebuds rejoice at the freshest & most delicious Biryani & Kebabs.
            </p>
            <p className="text-lg text-blue-500">
              Feel free to write to us at <a href="mailto:sales@biryanibykilo.com" className="underline hover:text-blue-700">sales@biryanibykilo.com</a>
            </p>

            {/* Two Images Below the Content */}
            <div className="mt-8 space-y-4">
              <img 
                src="./Images/v.JPEG" 
                alt="Bulk Order 1" 
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" 
              />
              <img 
                src="./Images/banner.JPEG" 
                alt="Bulk Order 2" 
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>
          </div>

          {/* Right Side: Contact Form & Images */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border-2 border-indigo-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">Please let us know your query</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Name*" 
                className="w-full p-3 bg-gradient-to-r from-indigo-300 to-blue-400 text-white border border-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-500" 
                required 
              />
              <input 
                type="text" 
                name="organization" 
                placeholder="Organisation (optional)" 
                className="w-full p-3 bg-gradient-to-r from-indigo-300 to-blue-400 text-white border border-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-500" 
              />
              <input 
                type="text" 
                name="contact-number" 
                placeholder="Contact Number*" 
                className="w-full p-3 bg-gradient-to-r from-indigo-300 to-blue-400 text-white border border-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-500" 
                required 
              />
              <input 
                type="text" 
                name="city" 
                placeholder="Your City*" 
                className="w-full p-3 bg-gradient-to-r from-indigo-300 to-blue-400 text-white border border-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-500" 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email*" 
                className="w-full p-3 bg-gradient-to-r from-indigo-300 to-blue-400 text-white border border-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-500" 
                required 
              />
              <textarea 
                name="query" 
                placeholder="Your Query*" 
                rows="4" 
                className="w-full p-3 bg-gradient-to-r from-indigo-300 to-blue-400 text-white border border-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-500" 
                required 
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Modal Popup after Form Submission */}
        {formSubmitted && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-700 mb-4">We will get back to you shortly. Your request has been received.</p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <CityList/>
      <Footer/>
    </div>
  );
};

export default BulkOrderPage;
