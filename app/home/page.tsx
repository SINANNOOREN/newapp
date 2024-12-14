import React from "react";

const CareerInMERN: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12 bg-gray-50">
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Build Your <span className="text-blue-500">Career in MERN Stack</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Dive into one of the most in-demand skills of today. Master MongoDB, 
          Express.js, React.js, and Node.js to create powerful web applications and unlock career opportunities in web development.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none">
          Get Started
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/hero.jpg" // Replace with your image path
          alt="Career in MERN Stack"
          className="w-full md:w-3/4 lg:w-2/3 rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default CareerInMERN;
