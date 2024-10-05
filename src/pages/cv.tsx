import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if Navbar is in a different directory

const CvPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar /> {/* Add the Navbar component here */}

      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">My CV</h1>
        <iframe
          src="/RESUME.pdf" // Ensure this matches your file name
          className="w-full h-[80vh] border border-gray-300"
          title="CV"
          style={{ minHeight: '80vh' }} // Ensures the iframe maintains minimum height
        />
        <a
          href="/RESUME.pdf" // Ensure this matches your file name
          download
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          Download CV
        </a>
      </div>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Glorious. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CvPage;
