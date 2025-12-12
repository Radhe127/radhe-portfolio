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
    // Init Lenis early, but keep it stopped until the loader finishes.
    initLenis();
    stopLenis();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LoadingProvider>
      <div className="app-container">
        {/* Custom Cursor - Desktop Only */}
        {!isMobile && <Cursor />}

        {/* Background */}
        <div className="gradient-overlay"></div>
        <div className="noise-overlay"></div>

        {/* 3D Background Scene */}
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>

        {/* Main Content */}
        <div className="main-content">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </LoadingProvider>
  );
}

export default App;
