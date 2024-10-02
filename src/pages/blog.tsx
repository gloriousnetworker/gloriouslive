import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js for navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import the back arrow icon

const Blog = () => {
  const router = useRouter(); // Initialize router

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Back Arrow */}
        <button 
          onClick={() => router.back()} 
          className="flex items-center text-blue-500 mb-4 hover:underline"
        >
          <FaArrowLeft className="mr-2" /> {/* Back Arrow Icon */}
          Back
        </button>

        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">My Blog</h1>
        <p className="text-lg text-gray-600 text-center">
          Welcome to my blog! Here you can find technical articles and tutorials on various topics.
        </p>

        {/* Blog Article List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800">Understanding React Hooks</h2>
            <p className="text-gray-600 mt-4">
              A comprehensive guide to React hooks and how they help manage state and lifecycle in functional components.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800">Getting Started with Next.js</h2>
            <p className="text-gray-600 mt-4">
              Learn the fundamentals of Next.js and how to build scalable web applications.
            </p>
          </div>
          {/* Add more blog posts */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Iniubong Udofot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
