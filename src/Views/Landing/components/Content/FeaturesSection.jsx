import React from "react";
import Herosection from "./Herosection";
import Products from "./Products";

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
          <p className="text-gray-600">We deliver products quickly at your doorstep.</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="font-semibold text-xl mb-2">Best Quality</h3>
          <p className="text-gray-600">We provide high quality and verified products.</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="font-semibold text-xl mb-2">24/7 Support</h3>
          <p className="text-gray-600">Our team is always available for help.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
