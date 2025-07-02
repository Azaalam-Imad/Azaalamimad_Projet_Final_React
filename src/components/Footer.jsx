import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-black font-bold uppercase mb-4 text-sm">Get in Touch</h3>
          <p className="mb-4">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on
            (+1) 96 716 6879
          </p>
          <div className="flex space-x-4 text-gray-600 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaGooglePlusG />
            <FaInstagram />
          </div>
        </div>

        <div>
          <h3 className="text-black font-bold uppercase mb-4 text-sm">Categories</h3>
          <ul className="space-y-2">
            <li>Men</li>
            <li>Women</li>
            <li>Dresses</li>
            <li>Sunglasses</li>
          </ul>
        </div>

        <div>
          <h3 className="text-black font-bold uppercase mb-4 text-sm">Links</h3>
          <ul className="space-y-2">
            <li>Search</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
          <h3 className="text-black font-bold uppercase mb-4 text-sm">Help</h3>
          <ul className="space-y-2">
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-black font-bold uppercase mb-4 text-sm">Newsletter</h3>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-gray-400 bg-transparent outline-none py-2 mb-4 placeholder:text-gray-500"
          />
          <button className="w-full bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center text-xs py-4 text-gray-500">
        Copyright © 2022 <span className="text-blue-600 font-medium">Shopify Theme</span> Developed by <span className="text-blue-600 font-medium">MassTechnologist</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
