import React from 'react';
import uflaLogo from '../assets/images/UFLA.png';
import dacLogo from '../assets/images/DAC.png';
import dccLogo from '../assets/images/DCC.png';

const Support = () => {
  return (
    <section className="relative py-12 md:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Address */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm text-gray-400">
            Endereço da palestra presencial: Av. Central UFLA - Departamento de Ciência da Computação Centro, Lavras - MG, 37200-000
          </p>
        </div>

        {/* Support Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            APOIO
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 max-w-4xl mx-auto">
          {/* UFLA Logo */}
          <div className="flex items-center justify-center">
            <img 
              src={uflaLogo} 
              alt="UFLA - Universidade Federal de Lavras" 
              className="h-10 md:h-14 w-auto object-contain filter brightness-0 invert"
            />
          </div>

          {/* DAC Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <img 
              src={dacLogo} 
              alt="DAC - Departamento de Computação Aplicada" 
              className="h-10 md:h-14 w-auto object-contain filter brightness-0 invert"
            />
          </div>

          {/* DCC Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <img 
              src={dccLogo} 
              alt="DCC - Departamento de Ciência da Computação" 
              className="h-10 md:h-14 w-auto object-contain filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
