import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import handlePayment from "./PaymentHandler";

const Checkout = () => {
  const location = useLocation();
  const { price, title, imgUrl } = location.state || {}; // Get data passed from De component

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    totalAmount: price || "", // Default to price passed from previous page
  });

  useEffect(() => {
    // Update the price if it's passed through the location state
    if (price) {
      setFormData((prevState) => ({ ...prevState, totalAmount: price }));
    }
  }, [price]); // Dependency array ensures it only updates when price changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment(formData); // Trigger payment with form data
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-300 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
          Checkout Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Item Details */}
          <div className="text-center">
            <img src={imgUrl} alt={title} className="w-40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-lg text-gray-700">₹{formData.totalAmount}</p>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="First Name"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Last Name"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email and Mobile */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Mobile"
              name="mobile"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          {/* Country and City */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          {/* State and Pincode */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>

          {/* Total Amount */}
          <input
            type="number"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Total Amount (INR)"
            name="totalAmount"
            min="1"
            value={formData.totalAmount}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700 transition duration-200"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
