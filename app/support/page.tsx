import React from "react";

// Define the support type without JSX.Element for icons
interface SupportOption {
  title: string;
  description: string;
}

// List of support options
const supportOptions: SupportOption[] = [
  {
    title: "24/7 Technical Support",
    description:
      "Access expert help anytime to resolve technical challenges in MERN stack development.",
  },
  {
    title: "Mentorship Program",
    description:
      "Work with experienced developers to get guidance on your MERN stack projects and career.",
  },
  {
    title: "Community Forums",
    description:
      "Join a community of MERN stack learners and developers to share knowledge and solve problems.",
  },
  {
    title: "Job Placement Assistance",
    description:
      "Get career support with resume reviews, interview preparation, and job placement opportunities.",
  },
];

// Helper function to dynamically render icons
const getSupportIcon = (index: number) => {
  const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      key={index}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11c0-1.1.9-2 2-2h8a2 2 0 100-4h-8c-3.314 0-6 2.686-6 6v7H4a2 2 0 100 4h6v-7c0-1.1.9-2 2-2h8a2 2 0 100-4h-8c-1.1 0-2-.9-2-2z"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      key={index}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12c2.5 0 4-1.5 4-3s-1.5-3-4-3-4 1.5-4 3 1.5 3 4 3zm0 0c2.5 0 4 1.5 4 3v2H8v-2c0-1.5 1.5-3 4-3z"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      key={index}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a2 2 0 00-2-2h-3v4zM9 20H4v-2a2 2 0 012-2h3v4zM7 4h10v4H7z"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      key={index}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h11M9 21V3m0 18l3-3m-3 3L6 18"
      />
    </svg>,
  ];

  return icons[index % icons.length];
};

const SupportMERN: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-blue-500">Support</span> for MERN Stack Careers
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We’re here to help you at every step of your MERN stack career journey. Explore our comprehensive support options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">
        {supportOptions.map((option, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center">{getSupportIcon(index)}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
              {option.title}
            </h3>
            <p className="mt-2 text-gray-600 text-center">{option.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportMERN;
