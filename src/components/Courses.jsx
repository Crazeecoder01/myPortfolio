import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaNetworkWired, FaCogs, FaLaptopCode, FaServer, FaCloud, FaCode, FaCalendarPlus } from "react-icons/fa";
import { FaLaptopFile } from "react-icons/fa6";

const courses = [
  { name: "Operating Systems", icon: <FaServer /> },
  { name: "DBMS", icon: <FaDatabase /> },
  { name: "Computer Networks", icon: <FaNetworkWired /> },
  { name: "System Design", icon: <FaCogs /> },
  { name: "OOPS", icon: <FaLaptopFile /> },
  { name: "SQL", icon: <FaCloud /> },
  {name: "C/C++", icon:<FaCode />}
];

const Courses = () => {
  return (
    <section className="relative py-10 min-h-screen flex items-center justify-center bg-gray-50 text-white overflow-hidden">
        <div className="bg-black flex justify-center h-full rounded-3xl items-center w-full m-5 p-10 shadow-xl shadow-zinc-900">

      <div className="absolute inset-0 w-full h-full  opacity-90" />

      {/* Circular Layout */}
      <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] flex items-center justify-center">
        {/* Center Glow (White) */}
        <motion.div
          className="absolute w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-gray-600 to-white rounded-full blur-3xl opacity-30"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <h2 className="text-3xl uppercase font-bold tracking-wide">Courses</h2>
        {/* Course Items */}
        {courses.map((course, index) => {
          const angle = (index / courses.length) * (2 * Math.PI);
          const radius = 200; // Adjust radius for spacing
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
              <motion.div
              key={index}
              className="absolute flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-lg rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform border border-white/10 hover:border-white/30"
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, x, y }}
              transition={{ duration: 1.2, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)" }}
              >
              <div className="text-3xl md:text-4xl text-white">{course.icon}</div>
              <p className="text-sm md:text-base font-semibold mt-2 text-center text-white">{course.name}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Particles Effect (White) */}
      {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full opacity-50"
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, scale: 0 }}
          animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
            }}
            />
        ))}
        </div>
    </section>
  );
};

export default Courses;