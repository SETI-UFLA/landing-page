import React from 'react';

const Interest = () => {
  return (
    <section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-seti-orange"></div>
              <h2 className="text-4xl md:text-5xl font-bold">
                SEU INTERESSE NOS <span className="text-seti-orange">CONECTA</span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-seti-orange"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-seti-orange">
              QUER VIR ANIMAR ESTE EVENTO?
            </h3>
            <p className="text-gray-300 mb-8">
              Nossa meta é proporcionar uma experiência marcante aos nossos participantes, repleta de networking e oportunidades.
            </p>
            <button className="bg-seti-orange hover:bg-orange-600 px-8 py-3 rounded-full font-bold transition-all duration-300 w-full">
              ENTRE EM CONTATO
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-seti-orange">
              VINHA AQUI, VOCÊ É TECH E AGORA?
            </h3>
            <p className="text-gray-300 mb-8">
              Quer compartilhar suas ideias com a nossa comunidade? Envie suas sugestões de palestras, workshops ou atividades.
            </p>
            <button className="bg-seti-orange hover:bg-orange-600 px-8 py-3 rounded-full font-bold transition-all duration-300 w-full">
              CADASTRE-SE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
