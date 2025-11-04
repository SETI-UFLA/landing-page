import React from 'react';
import logo from '../assets/images/Logo.png';

const Hero = () => {
  const scrollToAgenda = () => {
    const agendaSection = document.getElementById('atividades');
    if (agendaSection) {
      agendaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
          CONECTANDO IDEIAS,{' '}
          <span className="text-seti-blue">CRIANDO FUTUROS</span>
        </h1>
        
        <div className="mb-6 md:mb-8 flex justify-center">
          <img src={logo} alt="SE7I Logo" className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto" />
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-gray-300">
          VII SEMANA DE TECNOLOGIA DA INFORMAÇÃO
        </p>

        {/* Event Info Box */}
        <div className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8 max-w-xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
            DE <span className="text-seti-orange">03 A 07 DE NOVEMBRO</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-1 md:mb-2">
            PRESENCIAL NA UFLA OU ONLINE
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            A TARDE E NOITE TODA
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-seti-orange mt-3 md:mt-4">
            100% GRATUITO
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToAgenda}
            className="bg-seti-orange hover:bg-orange-600 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Inscreva-se Agora
          </button>

          <a
            href="/palestras"
            className="bg-seti-blue hover:bg-blue-600 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Palestras Passadas
          </a>
          
          {/*
          <a
            href="/live"
            className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Assistir Live
          </a>*/
          }
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-seti-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-seti-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
