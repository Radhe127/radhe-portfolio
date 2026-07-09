import { useState, useEffect, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import BackgroundScene from './components/BackgroundScene';
import { LoadingProvider } from './context/LoadingProvider';
import { initLenis, stopLenis } from './utils/lenis';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    initLenis();
    stopLenis();

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LoadingProvider>
      <div className="app-container">
        {!isMobile && <Cursor />}

        <div className="gradient-overlay"></div>
        <div className="noise-overlay"></div>
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>

        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>

        <div className="main-content">
          <Navbar />
          <Hero />
          <div className="page-stack">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </LoadingProvider>
  );
}

export default App;
