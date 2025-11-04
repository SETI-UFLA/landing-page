import React from 'react';
import logo from '../assets/images/Logo.png';

const Live = () => {
  // Substitua pelo ID do vídeo/live do YouTube (apenas o ID, sem parâmetros)
  // Exemplo: 'dQw4w9WgXcQ' ou 'gEZ6DNc-teg'
  const youtubeVideoId = 'fbTnUsg16qY';
  
  return (
    <section className="relative min-h-screen bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header com Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="SETI Logo" className="h-16 md:h-20 w-auto" />
        </div>

        {/* Título */}
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 text-white">
          <span className="text-seti-orange">TRANSMISSÃO AO VIVO</span>
        </h1>

        {/* Container do Player e Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[1800px] mx-auto items-start">
          {/* Player do YouTube - 2/3 da tela no desktop */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&modestbranding=1&rel=0`}
                title="SETI Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Informações adicionais abaixo do vídeo */}
            <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-2">
                VII Semana de Tecnologia da Informação
              </h2>
              <p className="text-gray-300 text-sm">
                Acompanhe ao vivo as palestras e workshops do SETI 2025
              </p>
            </div>
          </div>

          {/* Chat do YouTube - 1/3 da tela no desktop */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden h-[600px] lg:h-[670px]">
              <div className="bg-gray-800 p-3 border-b border-gray-700">
                <h3 className="text-white font-bold text-center">Chat ao Vivo</h3>
              </div>
              <div className="h-[calc(100%-48px)]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/live_chat?v=${youtubeVideoId}&embed_domain=${window.location.hostname}&dark_theme=1`}
                  title="YouTube Live Chat"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Botão para voltar à landing page */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block bg-seti-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
          >
            ← Voltar para o Site
          </a>
        </div>
      </div>
    </section>
  );
};

export default Live;
