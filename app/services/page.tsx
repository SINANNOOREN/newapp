import React from "react";

// Define the service type without JSX.Element for icons
interface Service {
  title: string;
  description: string;
}

// List of services
const services: Service[] = [
  {
    title: "Comprehensive Training",
    description:
      "Master MERN stack technologies with structured learning paths and hands-on projects.",
  },
  {
    title: "Project-Based Learning",
    description:
      "Work on real-world projects to build a portfolio showcasing your expertise in MERN stack.",
  },
  {
    title: "Mentorship & Support",
    description:
      "Get personalized guidance from industry experts to accelerate your learning.",
  },
  {
    title: "Career Assistance",
    description:
      "Prepare for interviews, build your resume, and connect with recruiters hiring MERN developers.",
  },
];

// Helper function to render icons based on the service index
const getServiceIcon = (index: number) => {
  const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m0-7l-9-5m9 5l9-5"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-6.219-8.485"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c1.656 0 3-1.343 3-3s-1.344-3-3-3c-1.657 0-3 1.343-3 3s1.343 3 3 3zm0 4c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"
      />
    </svg>,
  ];
  return icons[index % icons.length];
};

const Services: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Services for a <span className="text-blue-500">MERN Stack Career</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore our services designed to help you succeed in your MERN stack career. Learn, practice, and excel with expert support.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center">{getServiceIcon(index)}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
