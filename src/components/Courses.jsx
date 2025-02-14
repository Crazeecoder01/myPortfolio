import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaNetworkWired, FaCogs, FaServer, FaCloud, FaCode } from "react-icons/fa";
import { FaLaptopFile } from "react-icons/fa6";

const courses = [
  { name: "Operating Systems", icon: <FaServer /> },
  { name: "DBMS", icon: <FaDatabase /> },
  { name: "Computer Networks", icon: <FaNetworkWired /> },
  { name: "System Design", icon: <FaCogs /> },
  { name: "OOPS", icon: <FaLaptopFile /> },
  { name: "SQL", icon: <FaCloud /> },
  { name: "C/C++", icon: <FaCode /> }
];

const Courses = () => {
  return (
    <section className="relative py-10 min-h-screen flex items-center justify-center bg-gray-50 text-white overflow-hidden">
      <div className="bg-black flex justify-center h-full rounded-3xl items-center w-full m-5 p-6 md:p-10 shadow-xl shadow-zinc-900">

        {/* Title */}

        {/* Circular Layout */}
        <div className="relative w-[90vw] max-w-[400px] h-[90vw] max-h-[400px] md:max-w-[600px] md:max-h-[600px] flex items-center justify-center">
          {/* Center Glow */}
          <h2 className="lg:text-3xl sm:text-sm md:text-2xl font-bold uppercase tracking-wide text-center">Courses</h2>
          <motion.div
            className="absolute w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-gray-600 to-white rounded-full blur-3xl opacity-30"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Course Items */}
          {courses.map((course, index) => {
            const angle = (index / courses.length) * (2 * Math.PI);
            const radius = window.innerWidth < 768 ? 100 : 200; // Dynamic radius
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center justify-center w-20 h-20 md:w-32 md:h-32 bg-white/10 backdrop-blur-lg rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform border border-white/10 hover:border-white/30"
                initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                transition={{ duration: 1.2, delay: index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)" }}
              >

                <div className="text-2xl md:text-4xl text-white">{course.icon}</div>
                <p className="text-xs md:text-sm font-semibold mt-2 text-center text-white">{course.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
