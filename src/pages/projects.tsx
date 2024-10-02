import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

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

const Projects = () => {
    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
            <Navbar /> {/* Navbar Component */}

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">My Projects</h1>
                <p className="mb-8 text-center text-gray-600">Here are some of the projects I've worked on:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{project.title}</h2>
                                </div>
                            </div>
                        </a>
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

export default Projects;
