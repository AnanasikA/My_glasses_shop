import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Checkout</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                id="address"
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Your Address"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

