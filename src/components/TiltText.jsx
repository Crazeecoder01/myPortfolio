import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const TiltText = (props) => {
  return (
    <div
      id='tiltDiv'
      ref={props.refer}
      className='leading-relaxed absolute mt-5 sm:mt-10 md:mt-16 px-4 sm:px-8'
    >
      {/* Intro Text */}
      <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-[4vw] font-[woff3]'>
        <span className=''>Hi, I am</span>
      </h1>

      {/* Name */}
      <h1 className='text-3xl sm:text-5xl md:text-[7.5vw] font-[woff1] tracking-wide '>
        Himanshu
      </h1>

      {/* Roles / Titles */}
      <h1 className="text-lg sm:text-2xl md:text-[3vw] font-[woff4] tracking-wide flex flex-wrap gap-2 ml-4">
        <Link className="hover:text-gray-300 transition duration-200">Software Enthusiast</Link> |
        <Link className="hover:text-gray-300 transition duration-200">Web Developer</Link> |
        <Link className="hover:text-gray-300 transition duration-200">Electrical Engineer</Link>
      </h1>
    </div>
  );
};

export default TiltText;
