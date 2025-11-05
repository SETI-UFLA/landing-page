import React from 'react';
import logo from '../assets/images/Logo.png';

const PalestrasPassadas = () => {
  // Array com as palestras passadas - adicione novas palestras aqui
  const palestras = [
    {
      id: 1,
      titulo: 'CiberSegurança Em Aplicações Web Com Um Plus de Criptografia',
      palestrante: 'Marlon Henrique',
      data: '03/11/2025',
      duracao: '1h 30min',
      videoId: 'KhAr292VG3U', // Substitua pelo ID real do vídeo do YouTube
      descricao: 'Palestra sobre os principais conceitos e práticas de cibersegurança no mundo atual.',
    },
        {
      id: 2,
      titulo: 'Server Driven User Interface (SDUI) no Futuro do Desenvolvimento Mobile',
      palestrante: 'Felipe Amorim',
      data: '04/11/2025',
      duracao: '1h',
      videoId: 'd_ciMM-DfHk', // Substitua pelo ID real do vídeo do YouTube
      descricao: 'Palestra sobre os principais conceitos e práticas de SDUI no mundo atual e no uso no mobile.',
    },
    {
      id: 3,
      titulo: 'A Plataforma Devscout',
      palestrante: 'Tsunode e Adam Neses',
      data: '04/11/2025',
      duracao: '1h',
      videoId: 'fbTnUsg16qY', // Substitua pelo ID real do vídeo do YouTube
      descricao: 'Palestra sobre uma plataforma que promete mudar os aspecto de entregar curriculos para achar seu emprego desejado.',
    },
    {
      id: 4,
      titulo: 'A Física do Talvez: Uma Introdução a Computação Quântica',
      palestrante: 'Álvaro Martins',
      data: '05/11/2025',
      duracao: '1h',
      videoId: 'bMm8BQ6sKoA', // Substitua pelo ID real do vídeo do YouTube
      descricao: 'Palestra sobre a introdução à computação quântica e seus princípios fundamentais com topicos de fisica, e sobre qubit.',
    },
   {
      id: 5,
      titulo: 'Seo na prática: Como buscadores pensam, o que importa e como medir resultados.',
      palestrante: 'Guilherme Grego',
      data: '05/11/2025',
      duracao: '1h',
      videoId: 'W03lawnUKmo', // Substitua pelo ID real do vídeo do YouTube
      descricao: 'Palestra sobre o mecanismo de buscas na prática, como os buscadores pensam, o que realmente importa para ranquear bem e como medir resultados de SEO.',
    },
    // Adicione mais palestras aqui seguindo o mesmo formato
    // {
    //   id: 2,
    //   titulo: 'Inteligência Artificial',
    //   palestrante: 'Outro Palestrante',
    //   data: '04/11/2025',
    //   duracao: '2h',
    //   videoId: 'VIDEO_ID_AQUI',
    //   descricao: 'Descrição da palestra...',
    // },
  ];

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
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">
          <span className="text-seti-orange">PALESTRAS PASSADAS</span>
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Reveja as palestras e workshops realizados durante o SETI 2025
        </p>

        {/* Grid de Palestras */}
        <div className="max-w-7xl mx-auto space-y-8">
          {palestras.map((palestra) => (
            <div
              key={palestra.id}
              className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden hover:border-seti-orange transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* Thumbnail do Vídeo */}
                <div className="lg:col-span-1">
                  <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${palestra.videoId}`}
                      title={palestra.titulo}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* Informações da Palestra */}
                <div className="lg:col-span-2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {palestra.titulo}
                    </h2>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-seti-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{palestra.palestrante}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-seti-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{palestra.data}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-seti-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{palestra.duracao}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {palestra.descricao}
                    </p>
                  </div>

                  <div className="mt-4">
                    <a
                      href={`https://www.youtube.com/watch?v=${palestra.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Assistir no YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há palestras */}
        {palestras.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl text-gray-400 mb-2">Nenhuma palestra disponível ainda</h3>
            <p className="text-gray-500">As palestras gravadas serão disponibilizadas em breve</p>
          </div>
        )}

        {/* Botão para voltar à landing page */}
        <div className="text-center mt-12">
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

export default PalestrasPassadas;
