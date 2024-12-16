import React from 'react';
import ThreeScene from './components/Threescene';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { gsap } from 'gsap';

function App() {
  return (
    <div className="App">
      <ThreeScene />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;