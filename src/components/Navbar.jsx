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

  // ============================================
  // BANNER DE LIVE ATIVO
  // Para DESATIVAR o banner quando não houver live, comente todo o bloco abaixo
  // (desde const showLiveBanner até o fechamento do </> antes do return)
  // ============================================
  const showLiveBanner = false; // Mude para false ou comente este bloco inteiro para desativar
  
  const LiveBanner = () => (
    <div className="fixed top-0 w-full bg-red-600 text-white py-2 px-4 text-center z-50">
      <a 
        href="/live" 
        className="flex items-center justify-center gap-2 hover:text-gray-200 transition-colors"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="font-bold text-sm md:text-base">
          🔴 AO VIVO AGORA! Palestra em andamento - Clique para assistir
        </span>
      </a>
    </div>
  );
  // ============================================
  // FIM DO BLOCO DO BANNER DE LIVE
  // ============================================

  return (
    <>
      {/* Renderiza o banner se showLiveBanner for true */}
      {showLiveBanner && <LiveBanner />}
      
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-40 border-b border-gray-800" style={{ top: showLiveBanner ? '40px' : '0' }}>
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
    </>
  );
};

export default Navbar;
