import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/image.png";
import img2 from "../assets/image copy.png";
import img3 from "../assets/image copy 2.png";
import img4 from "../assets/image copy 3.png";
import img5 from "../assets/image copy 4.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "bookMyShow",
      description:
        "A fully functional event booking platform with user authentication, live booking update, and payment integration.",
      image: "https://th.bing.com/th/id/OIP.MYdoQ5JQ4iCMktQOtf3JSwHaEJ?w=1120&h=628&rs=1&pid=ImgDetMain",
      link: "https://github.com/Crazeecoder01/bookMyShow",
      tech: ["Next.js", "Postgresql", "TailwindCSS", "PrismaORM", "Vitest"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website showcasing my skills, projects, and contact information.",
      image: `${img2}`,
      link: "https://himanshugupta.vercel.app/",
      tech: ["React", "TailwindCSS", "Framer Motion", "Gsap"],
    },
    {
      id: 3,
      title: "GoEasy-Cab Booking App",
      description:
        "A cab-booking application with driver proximity search, real-time updates, and payment.",
      image: "https://th.bing.com/th/id/OIP.JqRBTydEfD7r4tKAYCfOvQHaDz?rs=1&pid=ImgDetMain",
      link: "https://github.com/Crazeecoder01/GoEasy",
      tech: ["React", "Nodejs", "TailwindCSS", "MongoDB", "GoogleMapsAPI", "Socket.io", "JWT"],
    },
    {
      id: 4,
      title: "Sukoon-Mental health coach",
      description:
        "An AI-powered mental health coach with test and assistance.",
      image: `${img}`,
      link: "https://sukoon-next.vercel.app/",
      tech: ["React", "TailwindCSS", "MaterialUI", "Tensorflow", "socket.io", "Auth0"],
    },
    {
      id: 5,
      title: "Eco-Craft Corner",
      description:
        "An e-commerce platform dedicated to eco-friendly and handmade crafts.",
      image: `${img3}`,
      link: "https://eco-craft-corner-rho.vercel.app/",
      tech: ["Next.js", "MongoDB", "TailwindCSS"],
    },
    {
      id: 6,
      title: "FindMeInn",
      description:
        "A hotel-finding application with advanced search and filtering features, along with user authentication and booking options.",
      image: "https://via.placeholder.com/600x400",
      link: "https://github.com/Crazeecoder01/FindMeInn",
      tech: ["React", "Firebase", "TailwindCSS"],
    },
    {
      id: 7,
      title: "Bee",
      description:
        "A news web application with pagination and topic based filtering.",
      image: `${img5}`,
      link: "https://bee-ivory.vercel.app/",
      tech: ["React", "Firebase", "TailwindCSS"],
    },
    {
      id: 9,
      title: "ToDo List App",
      description:
        "A minimalistic and efficient task management app with persistent storage and task categorization.",
      image: "https://via.placeholder.com/600x400",
      link: "https://github.com/Crazeecoder01/todo-list",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 8,
      title: "Weather App",
      description:
        "A real-time weather forecast application with location-based weather data and interactive UI.",
      image: `${img4}`,
      link: "https://github.com/Crazeecoder01/Weather-App",
      tech: ["React", "OpenWeatherAPI", "TailwindCSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mt-5 mx-auto px-4">
        <Link to={"/"}>
          <div className="hover:cursor-pointer">
            <i className="text-3xl ri-arrow-left-circle-fill"></i>
          </div>
        </Link>
        {/* Page Title */}
        <h1 className="text-5xl font-bold uppercase text-center text-gray-900 dark:text-white mb-4">
          My Projects
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          A collection of my work that showcases my skills and creativity.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transform transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-6 py-2 border-2 border-gray-800 dark:border-gray-200 font-semibold rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-800 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
