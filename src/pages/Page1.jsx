import React, { useEffect, useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../index.css'
import ProjectSection from '../components/ProjectSection';
import Services from '../components/Services';
import Marquee from '../components/Marquee';
import TechStack from '../components/TechStack';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import About from '../components/About';
import Courses from '../components/Courses';

gsap.registerPlugin(ScrollTrigger);
const Page1 = () => {
  const tiltRef = useRef(null)

  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)
  const mouseMoving = (event) => {
    setXVal(-(event.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20)
    setYVal((event.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 60)
  }
  useGSAP(function () {
    gsap.to(tiltRef.current, {
      transform: 'rotateX(' + xVal + 'deg) rotateY(' + yVal + 'deg)',
      duration: 0.5,
    })
  }, [xVal, yVal])


  return (
    <div onMouseMove={(e) => {
      mouseMoving(e)
    }} className='h-screen p-6'>
      <div
        id="page-in"
        className="relative h-full py-20 px-24 w-full bg-black bg-cover bg-center rounded-[50px] shadow-xl shadow-zinc-900 overflow-hidden"
        style={{ backgroundImage: 'url("./assets/portflio_home.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-[50px]">
          <img
            className="h-24 transition-all p-4 duration-500 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
            alt="Logo"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center h-full text-white">

          <TiltText refer={tiltRef} />

          <div className="absolute bottom-10 left-10 p-6 w-96 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg shadow-black/20">
            <h3 className="text-xl font-semibold">Welcome to My Portfolio</h3>
            <p className="text-gray-300 text-sm mt-2">
              Crafting digital experiences with innovation and precision.
            </p>
          </div>
        </div>
      </div>
      <About />
      <TechStack />
      <Courses />  
      <ProjectSection />
      <div className='bg-gray-50'>
        <Timeline />
      </div>
        {/* <Services /> */}
      <Marquee />
      <Contact />
    </div>
  )
}

export default Page1