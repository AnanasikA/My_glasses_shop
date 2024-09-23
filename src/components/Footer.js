import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">My Glasses Shop</h3>
          <p className="text-sm text-gray-400">© 2024 All rights reserved.</p>
        </div>
        <ul className="flex space-x-6">
          <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
          <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
          <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;