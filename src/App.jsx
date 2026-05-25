import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Testimonials from"./sections/Testimonials";
import Navbar from './layout/Navbar'
import { Experience } from './sections/Experience';
import {Contact} from "./sections/Contact" ;
const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>

      <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Projects/>
     <Experience/>
      <Testimonials/>
      <Contact/>
    </main>
      
    </div>
  )
}

export default App
