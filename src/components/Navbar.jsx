import React from 'react';
import logo from '../assets/images/Logo.png';

const Navbar = () => {
  const menuItems = ['Home', 'Patrocinadores', 'Palestrantes', 'Sobre', 'Atividades'];

  const handleScroll = (e, item) => {
    e.preventDefault();
    const sectionId = item.toLowerCase();
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-center lg:justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="SE7I Logo" className="h-6 md:h-8 w-auto" />
          </div>
          
          <ul className="hidden lg:flex space-x-4 xl:space-x-8 text-sm xl:text-base">
            {menuItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item)}
                  className="hover:text-seti-orange transition-colors duration-300 cursor-pointer"
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
