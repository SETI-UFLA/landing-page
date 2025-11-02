import React from 'react';
import logo from '../assets/images/Logo.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden lg:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
        >
          <span className="inline-block animate-slide-in-left">CONECTANDO IDEIAS,</span>{' '}
          <span className="inline-block text-seti-blue animate-slide-in-right">CRIANDO FUTUROS</span>
        </h1>
        
        <div className="mb-6 md:mb-8 flex justify-center animate-slide-in-up">
          <img src={logo} alt="SE7I Logo" className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto" />
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-gray-300 animate-slide-in-up">
          VII SEMANA DE TECNOLOGIA DA INFORMAÇÃO
        </p>

        {/* Event Info Box */}
        <div className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8 max-w-xl mx-auto animate-slide-in-up">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
            DE <span className="text-seti-orange">03 A 07 DE NOVEMBRO</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-1 md:mb-2">
            PRESENCIAL NA UFLA OU ONLINE
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            O DIA TODO
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-seti-orange mt-3 md:mt-4">
            100% GRATUITO
          </p>
        </div>

        <div className="animate-slide-in-up">
          <button className="bg-seti-orange hover:bg-orange-600 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105">
            Inscreva-se Agora
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-seti-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-seti-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
