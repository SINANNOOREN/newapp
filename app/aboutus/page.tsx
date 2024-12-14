
import React from "react";

const About: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12 bg-white">
      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          About <span className="text-blue-500">Career in MERN Stack</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          A career in the MERN stack (MongoDB, Express.js, React.js, and Node.js) is one of the most sought-after paths in web development today. 
          As a MERN stack developer, you'll gain the skills to build full-stack applications that are scalable, efficient, and user-friendly.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          With the growing demand for JavaScript-based frameworks, becoming proficient in the MERN stack can open up opportunities 
          in startups, tech companies, and freelancing. Start your journey today!
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src="/about.jpg" // Replace with your image path
          alt="MERN Stack Career"
          className="w-full md:w-3/4 lg:w-2/3 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
