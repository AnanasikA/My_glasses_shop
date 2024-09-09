import React, { useState } from 'react';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, product }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative p-6 mx-4 md:mx-0 max-h-[90vh] flex flex-col">
        {/* Main Modal Content */}
        <div className="relative flex items-start">
          <div className="relative flex-shrink-0 group">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-auto max-h-64 object-contain rounded-lg ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={isZoomed ? handleCloseZoom : handleImageClick}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl opacity-0 group-hover:opacity-100 pointer-events-none">
              <FaSearchPlus />
            </div>
          </div>
          {!isZoomed && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none z-10"
            >
              <FaTimes className="text-2xl" />
            </button>
          )}
        </div>
        <div className="flex-1 pt-4 overflow-y-auto">
          <h4 className="text-2xl font-semibold mb-2 text-gray-900">{product.name}</h4>
          <p className="text-gray-700 mb-4 text-lg">{product.price}</p>
          <p className="text-gray-600 mb-4 text-base">{product.description}</p>
          <button
            onClick={() => {
              // Implement add to cart functionality if needed
              onClose();
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-[90vh] object-contain cursor-zoom-out"
              onClick={handleCloseZoom}
            />
            <button
              onClick={handleCloseZoom}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none z-10"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;








