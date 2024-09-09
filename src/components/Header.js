import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-extrabold">My Glasses Shop</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-300 transition">Products</Link></li>
            <li className="relative">
              <Link to="/cart" className="hover:text-gray-300 transition flex items-center">
                Cart
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
            <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-gray-300 transition">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



