import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-lg z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className="fixed top-0 right-0 h-full w-64 md:w-80 bg-black shadow-2xl z-50 flex flex-col items-start p-6 border-l border-gray-700"
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="text-gray-300 text-3xl self-end mb-8 hover:text-red-500 transition"
        >
          <i className="ri-close-line"></i>
        </button>

        {/* Menu Items */}
        <nav className="space-y-6 text-white text-lg w-full">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
              className="block py-2 px-4 rounded-lg text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-6 mt-auto justify-center w-full pt-8 border-t border-gray-700">
          <a href="https://github.com/Crazeecoder01" className="text-gray-400 text-2xl hover:text-white transition">
            <i className="ri-github-fill"></i>
          </a>
          <a href="https://www.linkedin.com/in/himanshu-gupta-15703a250/" className="text-gray-400 text-2xl hover:text-white transition">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://leetcode.com/u/Crazeecoder01/" className="text-gray-400 text-2xl hover:text-white transition">
            <i className="ri-code-s-slash-fill"></i>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
