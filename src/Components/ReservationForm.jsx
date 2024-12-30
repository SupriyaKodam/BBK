import React, { useState } from "react";
import { Add, Remove } from "@mui/icons-material";

const ReservationForm = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  const cities = ["New York", "Los Angeles", "Chicago"]; // Example cities

  const handleGuestsChange = (type) => {
    if (type === "increment") setGuests(guests + 1);
    if (type === "decrement" && guests > 1) setGuests(guests - 1);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Reserve Your Table</h2>

      {/* Select City */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Your City
        </label>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Choose a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Date Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          When are you visiting?
        </label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Time Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          At what time?
        </label>
        <input
          type="time"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      {/* Guests Counter */}
      <div className="flex items-center mb-4">
        <label className="text-sm font-medium text-gray-700 mr-4">
          Number of guest(s):
        </label>
        <div className="flex items-center">
          <div
            className="p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
            onClick={() => handleGuestsChange("decrement")}
          >
            <Remove />
          </div>
          <span className="mx-4 text-lg">{guests}</span>
          <div
            className="p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
            onClick={() => handleGuestsChange("increment")}
          >
            <Add />
          </div>
        </div>
      </div>

      {/* Reserve Button */}
      <div
        className="w-full bg-red-600 text-white text-center py-2 rounded cursor-pointer hover:bg-red-700"
        onClick={() => alert("Table Reserved!")}
      >
        Reserve Table
      </div>
    </div>
  );
};

export default ReservationForm;