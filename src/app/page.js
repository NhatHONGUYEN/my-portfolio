'use client';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
