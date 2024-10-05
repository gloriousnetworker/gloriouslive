import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if Navbar is in a different directory

const CvPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar /> {/* Add the Navbar component here */}
      <h1 className="text-3xl font-bold mb-4">My CV</h1>
      <iframe
        src="/RESUME.pdf" // Ensure this matches your file name
        className="w-full h-[80vh] border border-gray-300"
        title="CV"
      />
      <a
        href="/RESUME.pdf" // Ensure this matches your file name
        download
        className="mt-4 text-blue-600 hover:text-blue-800"
      >
        Download CV
      </a>
    </div>
  );
};

export default CvPage;
