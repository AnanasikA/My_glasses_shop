import React from 'react';
import { FaShippingFast, FaDollarSign, FaHeadset } from 'react-icons/fa'; // Ikony z react-icons

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero relative py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div> {/* Zwiększona przezroczystość */}
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            Welcome to My Glasses Shop
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Discover our curated collection of premium eyewear designed to complement your style and provide exceptional comfort. Whether you need prescription glasses, sunglasses, or just a stylish new look, we've got you covered.
          </p>
          <a
            href="/products"
            className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 ease-in-out inline-block"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-12 drop-shadow-md">
            Our Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="feature bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="mb-4">
                <FaDollarSign className="text-4xl text-blue-600 mx-auto mb-2" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Quality Products</h4>
              <p className="text-gray-700">
                We offer a wide range of high-quality eyewear, including the latest trends in fashion and technology. Each product is meticulously crafted to meet the highest standards of durability and style.
              </p>
            </div>
            <div className="feature bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="mb-4">
                <FaShippingFast className="text-4xl text-blue-600 mx-auto mb-2" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Free Shipping</h4>
              <p className="text-gray-700">
                Enjoy free shipping on all orders over $50. We ensure prompt and reliable delivery, so you can receive your products quickly and without any extra cost.
              </p>
            </div>
            <div className="feature bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="mb-4">
                <FaHeadset className="text-4xl text-blue-600 mx-auto mb-2" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">24/7 Support</h4>
              <p className="text-gray-700">
                Our dedicated support team is available around the clock to assist you with any questions or concerns. Whether you need help with your order or have product inquiries, we're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
