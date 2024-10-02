import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const certificates = document.querySelectorAll('.certificate-card');
    certificates.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      cardElement.style.opacity = '0';
      cardElement.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        cardElement.style.transition = 'all 0.5s ease-in-out';
        cardElement.style.opacity = '1';
        cardElement.style.transform = 'translateX(0)';
      }, index * 300); // Delayed animation for each card
    });
  }, []);

  return (
    <div>
      <Head>
        <title>About Me - My Portfolio</title>
        <meta name="description" content="Learn more about me, my skills, and my experience." />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <img
                src="image8.jpg" // Replace with your profile image URL
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl font-semibold">Hello! I'm Glorious</h2>
              <p className="mt-4 leading-relaxed">
                I am a passionate Fullstack Developer with a strong focus on building interactive and dynamic web applications.
                My journey started with a love for solving complex problems and creating efficient digital solutions.
              </p>
              <p className="mt-4 leading-relaxed">
                Outside of coding, I enjoy playing musical instruments, attending concerts, exploring nature, and writing my own songs.
                I value creativity, teamwork, and continuous learning.
              </p>
              <Link href="/skills" className="inline-block mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                See My Skills
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 bg-blue-100"> {/* Matching background */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Certificate 1: HackerRank Frontend Developer */}
            <div className="p-6 bg-white shadow-md rounded-lg text-center certificate-card">
              <h4 className="text-xl font-bold text-gray-800">HackerRank Frontend Developer</h4>
              <p className="mt-2 text-gray-600">Certified Frontend Developer by HackerRank.</p>
              <a href="frontend.jpg" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  View Certificate
                </button>
              </a>
            </div>

            {/* Certificate 2: HackerRank ReactJS Developer */}
            <div className="p-6 bg-white shadow-md rounded-lg text-center certificate-card">
              <h4 className="text-xl font-bold text-gray-800">HackerRank ReactJS Developer</h4>
              <p className="mt-2 text-gray-600">Certified ReactJS Developer by HackerRank.</p>
              <a href="frontend2.jpg" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  View Certificate
                </button>
              </a>
            </div>

            {/* Certificate 3: HNG Internship */}
            <div className="p-6 bg-white shadow-md rounded-lg text-center certificate-card">
              <h4 className="text-xl font-bold text-gray-800">HNG Internship Certificate</h4>
              <p className="mt-2 text-gray-600">Successfully completed the HNG Internship program.</p>
              <a href="HNG.jpg" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  View Certificate
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-200"> {/* Updated background color */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 shadow-md rounded-lg hover:bg-gray-300 transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Fullstack Developer - Freelance</h3>
              <p className="mt-4 text-gray-600">
                Worked on various projects, creating full-stack web applications from concept to deployment.
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Technologies:</strong> React, Node.js, MongoDB, Express, Tailwind CSS.
              </p>
            </div>

            <div className="p-6 bg-gray-100 shadow-md rounded-lg hover:bg-gray-300 transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Frontend Developer - Sohclick Technologies</h3>
              <p className="mt-4 text-gray-600">
                Collaborated with cross-functional teams to design and implement responsive UIs for client-facing applications.
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Technologies:</strong> React, JavaScript, CSS, Git.
              </p>
            </div>

            <div className="p-6 bg-gray-100 shadow-md rounded-lg hover:bg-gray-300 transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Frontend Developer Intern - HNG</h3>
              <p className="mt-4 text-gray-600">
                Assisted in developing and maintaining web applications, focusing on user experience and interface design.
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Technologies:</strong> React, HTML, CSS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Iniubong Udofot. All rights reserved.</p>
      </footer>
    </div>
  );
}
