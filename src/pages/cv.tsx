import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if Navbar is in a different directory

const CvPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar /> {/* Add the Navbar component here */}

      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Outstanding Heading Styling */}
        <h1 className="text-4xl font-extrabold mb-4 text-indigo-600 sm:text-3xl md:text-4xl lg:text-5xl">
          MY RESUME
        </h1>

        {/* Responsive Iframe for PDF */}
        <div className="w-full flex justify-center">
          <iframe
            src="/RESUME.pdf"
            className="w-full h-[80vh] sm:h-[70vh] md:h-[80vh] border border-gray-300"
            title="Resume"
            style={{
              minHeight: '80vh',
              maxHeight: '80vh',
              transform: 'scale(0.9)', // Scale down the iframe for small screens
              transformOrigin: 'top left', // Ensures scaling occurs from the top-left corner
              width: '100%', // Full width for mobile devices
              maxWidth: '600px', // Maximum width for larger screens
            }}
          />
        </div>

        <a
          href="/RESUME.pdf"
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

      {/* Custom styles for iPhone-like small screens */}
      <style jsx>{`
        @media only screen and (max-width: 375px) {
          iframe {
            transform: scale(0.8); /* Further scale down for smaller iPhone screens */
          }
        }
      `}</style>
    </div>
  );
};

export default CvPage;
