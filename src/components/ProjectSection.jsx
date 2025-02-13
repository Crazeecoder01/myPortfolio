import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import img from "../assets/image.png";
import img2 from "../assets/image copy.png";
import img3 from "../assets/image copy 2.png";
import img4 from "../assets/image copy 3.png";
const ProjectSection = () => {
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
      link: "#",
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
        "A Sustainable Waste Management Platform dedicated to eco-friendly and handmade crafts, incentivizing skills.",
      image: `${img3}`,
      link: "https://eco-craft-corner-rho.vercel.app/",
      tech: ["Next.js", "Nodejs", "MongoDB", "TailwindCSS", "ChakraUI", "Bcrypt"],
    },
  ];

  return (

    <section className="h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mt-10 text-gray-950 mb-12 tracking-wide uppercase">
          My Projects{" "}
          <Link to={"/projects"}>
            <i className="text-gray-400 hover:bg-gray-200 hover:rounded-full hover:cursor-pointer font-thin ri-arrow-right-up-long-line"></i>
          </Link>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="relative z-0 mySwiper h-[480px] overflow-hidden"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="relative z-0">
              <div className="py-5">

                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:duration-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end items-center">
                      <a
                        href={project.link}
                        className="flex justify-end px-6 py-2 border-2 border-gray-800 font-semibold rounded-full text-gray-800 hover:bg-gray-950 hover:text-white transition-colors duration-300"
                      >
                        View Project <i className="ri-arrow-right-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSection;