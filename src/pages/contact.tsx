import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <Navbar /> {/* Navbar Component */}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Contact Me</h1>
        <p className="mb-8 text-center text-gray-600">Feel free to reach out to me via the form below:</p>
        
        <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              rows={5}
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </form>

        {/* Social Media Links Section */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Me</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/ini-udofot-va-net-worker/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/gloriousudofot/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="https://wa.link/z5m8si" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" />
            </a>
            <a href="https://github.com/gloriousnetworker" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-10 h-10" />
            </a>
            <a href="https://www.facebook.com/glorious.udofot/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="https://x.com/Gloriouz0" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" className="w-10 h-10" />
            </a>
            <a href="https://www.youtube.com/@iniubongudofot3146" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="w-10 h-10" />
            </a>
            <a href="mailto:iniubongudofot2000@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Logo_Gmail_%282015-2020%29.svg" alt="Gmail" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Iniubong Udofot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
