import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Udofot&apos;s Portfolio  {/* Escape the apostrophe */}
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-white hover:text-blue-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-300">
            About Me
          </Link>
          <Link href="/skills" className="text-white hover:text-blue-300">
            Skills
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-300">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-300">
            Contact
          </Link>
          <Link href="/blog" className="text-white hover:text-blue-300">
            Blog
          </Link>
          {/* Link to the CV page */}
          <Link href="/cv" className="text-white hover:text-blue-300">
            Download CV
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600 shadow-md">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block text-white hover:text-blue-300">
              Home
            </Link>
            <Link href="/about" className="block text-white hover:text-blue-300">
              About Me
            </Link>
            <Link href="/skills" className="block text-white hover:text-blue-300">
              Skills
            </Link>
            <Link href="/projects" className="block text-white hover:text-blue-300">
              Projects
            </Link>
            <Link href="/contact" className="block text-white hover:text-blue-300">
              Contact
            </Link>
            <Link href="/blog" className="block text-white hover:text-blue-300">
              Blog
            </Link>
            {/* Link to the CV page */}
            <Link href="/cv" className="block text-white hover:text-blue-300">
              Download CV
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
