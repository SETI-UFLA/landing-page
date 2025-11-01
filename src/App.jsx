import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Speakers from './components/Speakers';
import Career from './components/Career';
import Agenda from './components/Agenda';
import About from './components/About';
import Footer from './components/Footer';
import fundoImage from './assets/images/fundo.png';

function App() {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: `url(${fundoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Partners />
        <Speakers />
        <Career />
        <Agenda />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
