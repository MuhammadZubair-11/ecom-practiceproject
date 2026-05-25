import React from "react";

const Herosection = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
          Discover Your <br />
          Dream Style
        </h1>

        <p className="text-gray-200 mt-6 max-w-2xl text-lg md:text-xl">
          Explore premium fashion, modern accessories, and the latest trends
          crafted for your lifestyle.
        </p>

        <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-xl">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Herosection;