import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Speakers from './components/Speakers';
// import Interest from './components/Interest';
import Career from './components/Career';
import Agenda from './components/Agenda';
import About from './components/About';
// import Contact from './components/Contact';
import Sponsors from './components/Sponsors';
import Support from './components/Support';
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
        {/* <Interest /> */}
        <Career />
        <Agenda />
        <About />
        {/* <Contact /> */}
        <Sponsors />
        <Support />
        <Footer />
      </div>
    </div>
  );
}

export default App;
