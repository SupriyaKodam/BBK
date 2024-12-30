import React from 'react';

const stores = [
  {
    name: "Biryani by Kilo - Pimpri, Pune",
    hours: "10 AM - 11 PM",
    status: "Open",
    services: "Delivery Only",
    location: "Pimpri, Pune",
  },
  {
    name: "Biryani by Kilo - Kanpur",
    hours: "10 AM - 11 PM",
    status: "Open",
    services: "Dine-in, Delivery",
    location: "Kanpur",
  },
  {
    name: "Biryani by Kilo - Indore",
    hours: "10 AM - 10 PM",
    status: "Closed",
    services: "Delivery Only",
    location: "Indore",
  },
  {
    name: "Biryani by Kilo - Delhi",
    hours: "10 AM - 12 AM",
    status: "Open",
    services: "Dine-in, Delivery",
    location: "Delhi",
  },
  {
    name: "Biryani by Kilo - Mumbai",
    hours: "9 AM - 11 PM",
    status: "Open",
    services: "Dine-in, Delivery, Takeaway",
    location: "Mumbai",
  },
  {
    name: "Biryani by Kilo - Bangalore",
    hours: "10 AM - 11 PM",
    status: "Open",
    services: "Delivery Only",
    location: "Bangalore",
  },
  {
    name: "Biryani by Kilo - Ahmedabad",
    hours: "10 AM - 11 PM",
    status: "Open",
    services: "Delivery Only",
    location: "Ahmedabad",
  },
  {
    name: "Biryani by Kilo - Chennai",
    hours: "10 AM - 10 PM",
    status: "Closed",
    services: "Dine-in, Delivery",
    location: "Chennai",
  },
];

const StoreCard = ({ store }) => (
  <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden sm:mt-8">
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{store.name}</h2>
      <p className="text-gray-600 mt-1">{store.location}</p>
      <p className="text-gray-500 text-sm mt-1">{store.hours}</p>
      <p className={`text-sm mt-2 ${store.status === "Open" ? "text-green-600 font-bold" : "text-red-600 font-bold"}`}>
        {store.status}
      </p>
      <p className="text-gray-500 mt-1">{store.services}</p>
      <div className="mt-4 flex justify-between">
        <button className="text-blue-500 hover:underline">Get Direction</button>
        <button className="text-blue-500 hover:underline">Book a Table</button>
      </div>
    </div>
  </div>
);

const StoreList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Biryani by Kilo - Outlets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stores.map((store, index) => (
          <StoreCard key={index} store={store} />
        ))}
      </div>
    </div>
  );
};

export default StoreList;
