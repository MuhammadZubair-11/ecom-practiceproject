import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="py-16 bg-black/30 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6 text-gray-300">
        Get latest updates, offers and discounts.
      </p>

      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 w-64 text-white border border-blackrounded-l-lg outline-none"
        />
        <button className="bg-white text-black px-6 rounded-r-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;