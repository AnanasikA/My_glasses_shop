import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę wysyłania pytania do serwera lub innego systemu.
    setSubmitted(true);
  };

  return (
    <section className="faq bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h3>
        <div className="space-y-8">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="faq-item bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-300">{item.question}</h4>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Ask Your Own Question</h4>
          {submitted ? (
            <p className="text-green-600">Thank you for your question, {formData.name}. We will get back to you soon!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="question" className="block text-gray-700 mb-2">Your Question</label>
                <textarea
                  id="question"
                  value={formData.question}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Your Question"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Question
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Stripe."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship internationally. Additional shipping fees may apply."
  },
  {
    question: "What is your return policy?",
    answer: "You can return any product within 30 days of purchase if it is in original condition."
  }
];

export default FAQ;
