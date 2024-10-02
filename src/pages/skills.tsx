import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Image from 'next/image'; // Import Image from next/image

const skills = [
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'React.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://reactjs.org/',
  },
  {
    name: 'Next.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    link: 'https://nextjs.org/',
  },
  {
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    link: 'https://nodejs.org/en/',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'HTML & CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
  },
  {
    name: 'Git & GitHub',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg',
    link: 'https://github.com/',
  },
  {
    name: 'Angular',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    link: 'https://angular.io/',
  },
  {
    name: 'Vue.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
    link: 'https://vuejs.org/',
  },
  {
    name: 'WordPress',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg',
    link: 'https://wordpress.org/',
  },
  {
    name: 'PHP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    link: 'https://www.php.net/',
  },
  // New Java skill
  {
    name: 'Java',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    link: 'https://www.java.com/',
  },
];

const Skills = () => {
  const router = useRouter(); // Initialize useRouter for navigation

  const handleBackClick = () => {
    router.back(); // This takes the user to the previous page
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 py-16 bg-gradient-to-b from-gray-100 to-gray-300">
        {/* Back Arrow */}
        <button
          className="absolute top-4 left-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
          onClick={handleBackClick}
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          Back
        </button>

        {/* Skills Section */}
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">Skills & Technologies</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center"
            >
              <Image 
                src={skill.logo} 
                alt={`${skill.name} logo`} 
                className="w-20 h-20 object-contain mb-4" 
                width={80} // Set the desired width
                height={80} // Set the desired height
              />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{skill.name}</h2>
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Iniubong Udofot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Skills;
