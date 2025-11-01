import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const menuItems = ['Home', 'Palestrantes', 'Sobre', 'Atividades'];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`hidden lg:fixed lg:left-1/2 lg:-translate-x-1/2 lg:flex z-50 transition-all duration-500 ease-in-out ${
      scrolled
        ? 'top-2 lg:top-6 w-[90%] rounded-2xl shadow-2xl shadow-black/50'
        : 'top-0 w-full rounded-none'
    } bg-black/90 backdrop-blur-md border-b border-gray-800`}>
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="SE7I Logo" className="h-6 md:h-8 w-auto" />
          </div>
          
          <ul className="hidden lg:flex space-x-4 xl:space-x-8 text-sm xl:text-base">
            {menuItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-seti-orange transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
