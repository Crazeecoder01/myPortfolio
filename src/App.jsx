import React, { useEffect } from 'react'
import Page1 from './pages/Page1'
import Header from './components/Header'
import Page2 from './components/ProjectSection'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Page1bottom from './components/Footer'
import Lenis from '@studio-freight/lenis/types'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 10,
      smooth: true,
      ease: "easeOutQuart",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div id="main">
      <Header />
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact/>}/>
  
      </Routes>
      <Footer />
    </div>
  )
}

export default App