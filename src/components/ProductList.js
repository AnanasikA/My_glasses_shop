import React, { useEffect, useState } from 'react';
import Modal from './Modal'; // Ensure this path is correct
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState(''); // State for notification
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products'); // Ensure this endpoint is correct
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleMoreClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
    setNotification(`${product.name} added to cart`); // Set notification
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="products py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 drop-shadow-md">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length === 0 ? (
            <p className="text-gray-600">Loading products...</p>
          ) : (
            products.map(product => (
              <div key={product.id} className="product bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h4>
                <p className="text-gray-700 mb-4">{product.price}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 ease-in-out"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => handleMoreClick(product)}
                    className="bg-gray-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 ease-in-out"
                  >
                    More
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {notification}
        </div>
      )}
    </div>
  );
};

export default ProductList;















