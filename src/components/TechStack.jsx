import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TechStacks = () => {
  const techStacks = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gradient-to-br bg-gray-50 mt-10 overflow-hidden relative"
      style={{
        opacity: isInView ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      {/* Container to prevent overflow */}
      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 text-center mb-12 uppercase bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tech Stacks
        </motion.h2>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStacks.map((tech, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 group overflow-hidden"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500 -z-10" />

              {/* Tech Icon */}
              <motion.img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 mb-6 filter group-hover:drop-shadow-[0_0_20px_rgba(192,132,252,0.8)] transition-all duration-500"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              />

              {/* Tech Name */}
              <motion.p
                className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {tech.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 opacity-0 pointer-events-none -z-10"
        animate={{
          opacity: isInView ? 0.3 : 0,
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "100vw", 
          height: "100vh", 
        }}
      />
    </motion.section>
  );
};

export default TechStacks;