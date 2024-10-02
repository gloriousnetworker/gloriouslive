import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Define the props type
interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  images?: string[];
}

const Hero: React.FC<HeroProps> = ({
  title = 'Welcome to My Portfolio',
  subtitle = 'I am a Fullstack Developer passionate about building amazing web applications.',
  buttonText = 'See My Work',
  images = ['/image5.jpg', '/image6.jpg', '/image7.jpg'], // Default images
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [images.length]);

  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
    >
      {/* Background image slider with gradient overlay */}
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-500">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-50"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
      </div>

      <div className="relative text-center bg-white bg-opacity-80 p-10 rounded-lg shadow-lg z-10">
        <motion.h1
          className="text-6xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
