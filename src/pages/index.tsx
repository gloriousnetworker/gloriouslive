import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; // Importing Hero component
import { useEffect, useState } from 'react';

const typingTexts = [
  "JavaScript", "Angular", "React", "Vue", "Node.js", 
  "Java", "PHP", "Git", "Firebase", "MongoDB", "Supabase"
];

const About = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (index < typingTexts.length) {
        setCurrentText((prev) => prev + typingTexts[index].charAt(prev.length));
        if (currentText.length === typingTexts[index].length) {
          setTimeout(() => {
            setIndex((prev) => prev + 1);
            setCurrentText("");
          }, 1000);
        } else {
          setTimeout(type, 100);
        }
      }
    };
    type();
  }, [currentText, index]);

  return (
    <section id="about" className="py-16 bg-gradient-to-r from-blue-500 to-teal-500 text-center text-white">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-4 text-lg">
        I am a passionate full-stack developer with experience in building responsive and user-friendly web applications.
      </p>
      <p className="mt-4 text-lg">
        My tech stack includes: 
        <span className="font-mono"> {currentText}</span>
      </p>
      <p className="mt-2 text-lg">
        Let's create something amazing together!
      </p>
      <a
        href="/about"
        className="mt-8 inline-block bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
      >
        Learn More
      </a>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Chat Application",
      imageUrl: "chat.jpg", // Replace with your image path
      link: "https://ydkm-chatapp.vercel.app/" // Replace with your project link
    },
    {
      title: "Birthday Feedback App",
      imageUrl: "birthday.jpg", // Replace with your image path
      link: "https://wish-me-a-happy-birthday-september-04.vercel.app/" // Replace with your project link
    },
    {
      title: "Link Sharing App",
      imageUrl: "links.jpg", // Replace with your image path
      link: "https://link-sharing-apps.netlify.app/" // Replace with your project link
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-blue-300 to-blue-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
      <p className="mt-4 text-lg text-gray-600">
        Here are some of the projects I have worked on that showcase my skills and expertise.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => window.open(project.link, '_blank')}
          >
            <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">
                Click to view the project.
              </p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="/projects"
        className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        View All Projects
      </a>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-center text-white">
        <h2 className="text-4xl font-bold">My Skills</h2>
        <p className="mt-4 text-lg">
          I am proficient in various technologies and tools for full stack web development, Administrative Management, and other tech stacks you might be interested in. Not only am I versatile in Tech, but I also have an outstanding Gospel Music career. Check out my skills.
        </p>
        <a
          href="/skills"
          className="mt-8 inline-block bg-white text-teal-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          View Skills
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-600">
          I would love to hear from you! Feel free to reach out for any inquiries.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Iniubong Udofot. All rights reserved.</p>
      </footer>
    </div>
  );
}
