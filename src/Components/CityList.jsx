import React from 'react';

const cities = [
  "Agra", "Amritsar", "Bangalore", "Bhopal", "Bhubaneswar",
  "Chandigarh", "Dehradun", "Dhanbad", "Durgapur", "Faridabad",
  "Guwahati", "Gorakhpur", "Gurgaon", "Ghaziabad", "Greater Noida",
  "Gwalior", "Goa", "Hyderabad", "Indore", "Jamshedpur",
  "Jammu", "Jaipur", "Jodhpur", "Jalandhar", "Kolkata",
  "Kanpur", "Kharar", "Lucknow", "Ludhiana", "Meerut",
  "Mumbai", "Mysore", "Mohali", "Nagpur", "Noida",
  "New Delhi", "Pimpri", "Panchkula", "Pune", "Patiala",
  "Patna", "Raipur", "Rourkela", "Ranchi", "Siliguri",
  "Thane", "Udaipur"
];

const CityList = () => {
  return (
    <div className="p-10 md:p-28 bg-gray-100">
      <h1 className="text-3xl font-extrabold mb-4 text-black">Biryani By Kilo - Cities We Are Serving</h1>
      <p className="text-lg text-gray-700 mb-6">Quick Biryani Delivery Near You!</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="text-black text-lg font-semibold hover:text-yellow-600 transition-all duration-300"
          >
            {city}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;
