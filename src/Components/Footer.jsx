import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube'; // Adjust the path to the image as per your project structure.

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Upper Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section with Icon */}
          <div className="flex items-start space-x-4">
            <img
              src="./Images/Icon.WEBP"
              alt="BBK Icon"
              className="w-20 h-16 object-cover"
            />
            <div>
              <h4 className="text-xl font-bold mb-4">BBK</h4>
              <p className="text-base leading-6">
                Explore the best biryani delivered with love and care.
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Useful Links</h4>
            <ul className="space-y-3 text-base leading-6">
              <li>About BBK</li>
              <li>Table Reservation</li>
              <li>Loyalty Program</li>
              <li>Bulk Order</li>
              <li>Media</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Unsubscribe</li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">More Info</h4>
            <ul className="space-y-3 text-base leading-6">
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <p className="text-base mb-6 leading-6">Call: 1800-212-2-212</p>
            <div className="flex space-x-4">
              <img src="./Images/image (1).WEBP" className="w-40 h-16"/>
              <img src="./Images/image (2).WEBP" className="w-40 h-16"/>
            </div>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-white text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="flex space-x-2 mt-3">
                <h1 className="text-white text-xl font-semibold">Follow us:</h1>
                <FacebookIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
                <TwitterIcon/>
                <YouTubeIcon/>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-400 my-8 w-full" />

        {/* Copyright Section */}
        <div className="text-center text-sm mt-6">
          <p className="text-gray-700">
            &copy; 2024 Sky Gate Hospitality Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
