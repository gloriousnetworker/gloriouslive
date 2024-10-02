import React, { useState } from 'react'; // Import useState
import Image from 'next/image'; // Import Image component from Next.js
import Navbar from '../components/Navbar';

// Define types for Modal props
interface ModalProps {
  message: string; // message prop type
  onClose: () => void; // onClose prop type
}

// Modal component to show success message
const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">{message}</h2>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [message, setMessage] = useState(''); // State for modal message
  const [showToast, setShowToast] = useState(false); // State for toast notification
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); // State for form data

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Update form data
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // Show the modal message
    setMessage('Message Sent Successfully to Iniubong Udofot. Thank you for reaching out.');

    // Open the modal
    setIsModalOpen(true);

    // Show toast notification
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false); // Hide toast notification after 3 seconds
    }, 3000);

    // Reset form data
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <Navbar /> {/* Navbar Component */}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Contact Me</h1>
        <p className="mb-8 text-center text-gray-600">Feel free to reach out to me via the form below:</p>

        <form className="bg-white rounded-lg shadow-md p-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name" // Added name attribute
              value={formData.name} // Bind input value to form data
              onChange={handleChange} // Handle change for input
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email" // Added name attribute
              value={formData.email} // Bind input value to form data
              onChange={handleChange} // Handle change for input
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message" // Added name attribute
              value={formData.message} // Bind textarea value to form data
              onChange={handleChange} // Handle change for textarea
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
              <Image src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/gloriousudofot/" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width={40} height={40} />
            </a>
            <a href="https://wa.link/z5m8si" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={40} height={40} />
            </a>
            <a href="https://github.com/gloriousnetworker" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" width={40} height={40} />
            </a>
            <a href="https://www.facebook.com/glorious.udofot/" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width={40} height={40} />
            </a>
            <a href="https://x.com/Gloriouz0" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" width={40} height={40} />
            </a>
            <a href="https://www.youtube.com/@iniubongudofot3146" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" width={40} height={40} />
            </a>
            <a href="mailto:iniubongudofot2000@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Logo_Gmail_%282015-2020%29.svg" alt="Gmail" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Iniubong Udofot. All rights reserved.</p>
      </footer>

      {/* Render Modal */}
      {isModalOpen && <Modal message={message} onClose={handleCloseModal} />}

      {/* Toast Notification at the Top */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
