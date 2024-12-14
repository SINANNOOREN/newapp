import React from "react";

const Career: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose a <span className="text-blue-500">Career in MERN Stack?</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          The MERN stack (MongoDB, Express.js, React.js, Node.js) is one of the most in-demand 
          skill sets in web development. Here’s why it could be the right choice for you:
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {/* Benefit 1 */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">High Demand</h3>
          <p className="mt-2 text-gray-600">
            Companies worldwide are actively hiring MERN stack developers to build scalable web applications.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Full-Stack Skills</h3>
          <p className="mt-2 text-gray-600">
            Gain expertise in front-end, back-end, and database management with just one stack.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Lucrative Salaries</h3>
          <p className="mt-2 text-gray-600">
            MERN stack developers command competitive salaries in the tech industry.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Flexible Opportunities</h3>
          <p className="mt-2 text-gray-600">
            Work in startups, established companies, or as a freelancer – the choice is yours.
          </p>
        </div>

        {/* Benefit 5 */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">JavaScript Mastery</h3>
          <p className="mt-2 text-gray-600">
            Strengthen your JavaScript skills, the most widely-used programming language in the world.
          </p>
        </div>

        {/* Benefit 6 */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">Community Support</h3>
          <p className="mt-2 text-gray-600">
            Join a vibrant community of developers, with endless resources and tutorials available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
