import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import ShufflingPictureGrid from "./ShuffleGrid";

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".section-title", { opacity: 0, y: -50, duration: 1, delay: 0.5, ease: "power3.out" });
    gsap.from(".about-card, .hobby-card", { opacity: 0, y: 50, stagger: 0.2, duration: 1, delay: 1, ease: "power3.out" });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen py-20 mt-10 bg-white text-black overflow-hidden relative">

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <h2 className="section-title text-4xl uppercase text-gray-950 tracking-wide font-bold text-center mb-20">About Me & Hobbies</h2>
        {/* About Me Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 mb-20">
          <motion.div className="about-card bg-gray-100 rounded-xl shadow-xl overflow-hidden p-8 flex flex-col justify-center items-center text-center" whileHover={{ scale: 1.05 }}>
            <h3 className="text-3xl font-bold mb-4">About Me</h3>
            <p className="text-gray-700 mb-6 text-justify">I am an aspiring software engineer with a background in electrical engineering, passionate about leveraging technology to solve real-world problems. My work spans across web development, AI/ML, and system simulations, with a strong focus on innovation, collaboration, and continuous learning.

              I have a solid grasp of data structures and algorithms. My understanding of computer science fundamentals, including operating systems, system design architecture, databases, and networking, allows me to design robust and scalable solutions.

              I am actively seeking opportunities as a Software Developer and Full Stack Developer, where I can apply my technical expertise, problem-solving mindset, and passion for innovation to make a meaningful contribution.</p>
           
          </motion.div>

          {/* <motion.div className="about-card overflow-hidden rounded-xl shadow-xl" whileHover={{ scale: 1.05 }}>
            <img src="https://source.unsplash.com/600x400/?developer,technology" alt="Himanshu Gupta" className="w-full h-full object-cover rounded-xl" />
            <ShufflingPictureGrid />
          </motion.div> */}

        </div>

        {/* Hobbies Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Traveling", description: "Exploring new places and cultures.", img: "https://images.unsplash.com/photo-1519055548599-6d4d129508c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
            { title: "Painting", description: "Portrait painting is my peacetime activity.", img: "https://images.unsplash.com/photo-1510832842230-87253f48d74f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D" },
            { title: "Music", description: "I like playing guitar and flute.", img: "https://images.unsplash.com/photo-1543062094-d22540cadf2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D" }
          ].map((hobby, index) => (
            <motion.div key={index} className="hobby-card bg-gray-100 rounded-xl shadow-xl overflow-hidden" whileHover={{ scale: 1.05 }}>
              <img src={hobby.img} alt={hobby.title} className="w-full h-52 object-cover rounded-t-xl" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">{hobby.title}</h3>
                <p className="text-gray-700 mb-4">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
