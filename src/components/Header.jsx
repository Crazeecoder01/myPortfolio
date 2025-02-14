import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Header */}
      <div className='fixed w-full pt-10 px-14 z-10 flex items-center justify-end'>
        <div className='flex justify-center align-center gap-4'>
          <div>
            <Link to='/contact'>
              <button className="bg-black rounded-full text-white shadow-sm shadow-slate-800 
                border-4 text-xl py-3 px-6 transition-all duration-500 ease-in-out hover:bg-zinc-400 animate-resize">
                Hire me
              </button>
            </Link>
          </div>

          {/* Sidebar Toggle Button (Dots) */}
          <div className='my-auto hover:cursor-pointer' onClick={toggleSidebar}>
            <button className="grid grid-cols-3 gap-1 w-10 h-10 p-1 rounded-full transition-transform duration-500 hover:rotate-90">
              {[...Array(9)].map((_, index) => (
                <span key={index} className="w-2 h-2 bg-zinc-300 rounded-full"></span>
              ))}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
