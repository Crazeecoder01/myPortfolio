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

const projects = [
  {
    id: 1,
    title: "bookMyShow",
    description: "An event booking platform with live booking updates, and payment integration.",
    image: "https://th.bing.com/th/id/OIP.MYdoQ5JQ4iCMktQOtf3JSwHaEJ?w=1120&h=628&rs=1&pid=ImgDetMain",
    link: "https://github.com/Crazeecoder01/bookMyShow",
    tech: ["Next.js", "PostgreSQL", "TailwindCSS", "PrismaORM", "Vitest"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personalized responsive portfolio website with modern UI.",
    image: img2,
    link: "#",
    tech: ["React", "TailwindCSS", "Framer Motion", "Gsap"],
  },
  {
    id: 3,
    title: "GoEasy-Cab Booking App",
    description: "A cab-booking portal with driver proximity search, real-time updates, and payment.",
    image: "https://th.bing.com/th/id/OIP.JqRBTydEfD7r4tKAYCfOvQHaDz?rs=1&pid=ImgDetMain",
    link: "https://github.com/Crazeecoder01/GoEasy",
    tech: ["React", "Node.js", "MongoDB", "GoogleMaps API", "Socket.io", "JWT"],
  },
  {
    id: 4,
    title: "Sukoon-Mental Health Coach",
    description: "An AI-powered mental health coach with tests and assistance.",
    image: img,
    link: "https://sukoon-next.vercel.app/",
    tech: ["React", "TailwindCSS", "Material UI", "TensorFlow", "Socket.io", "Auth0"],
  },
  {
    id: 5,
    title: "Eco-Craft Corner",
    description: "A sustainable waste management platform dedicated to eco-friendly handmade crafts.",
    image: img3,
    link: "https://eco-craft-corner-rho.vercel.app/",
    tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "Chakra UI", "Bcrypt"],
  },
];

const ProjectSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 mb-10 text-center sm:text-left uppercase tracking-wide">
          My Projects{" "}
          <Link to={"/projects"} className="transition">
            <i className="text-gray-400 hover:bg-gray-200 font-light rounded-full ri-arrow-right-up-line"></i>
          </Link>
        </h2>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mySwiper max-h-[540px] sm:h-[540px] overflow-hidden"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="flex justify-center">
              <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-[95%] min-h-[500px]">
                {/* Image */}
                <img src={project.image} alt={project.title} className="w-full h-44 sm:h-48  object-cover" />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-2 flex-grow">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="flex justify-end mt-auto">
                    <a
                      href={project.link}
                      className="px-4 py-2 border-2 border-gray-800 font-semibold rounded-full text-gray-800 hover:bg-gray-950 hover:text-white transition-all duration-300 text-sm sm:text-base"
                    >
                      View Project <i className="ri-arrow-right-fill"></i>
                    </a>
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
