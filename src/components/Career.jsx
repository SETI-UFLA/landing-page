import React from 'react';

const Career = () => {
  const opportunities = [
    {
      title: 'NETWORKING DE IMPACTO',
      description: 'CONVERSE DIRETAMENTE COM AS EMPRESAS E OS TALENTOS QUE PODEM ACELERAR SUA CARREIRA PROFISSIONAL.',
    },
    {
      title: 'VISÃO DE MERCADO 360°',
      description: 'DESCUBRA AS PRÓXIMAS TENDÊNCIAS DIRETO DAS EMPRESAS LÍDERES E POSICIONE-SE ESTRATEGICAMENTE PARA O FUTURO.',
    },
    {
      title: 'MENTORIA COM OS MELHORES',
      description: 'APRENDA O QUE OS RECRUTADORES REALMENTE BUSCAM E RECEBA CONSELHOS PRÁTICOS DE QUEM TOMA AS DECISÕES DE CONTRATAÇÃO.',
    },
    {
      title: 'CARREIA A PRAIA DE FUTURO',
      description: 'APRENDA A CONSTRUIR UMA TRAJETÓRIA SÓLIDA E RELEVANTE, GARANTINDO SEU ESPAÇO NO MERCADO DE AMANHÃ.',
    },
  ];

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
                SEU UPGRADE DE CARREIRA <span className="text-seti-orange">CONECTA AQUI</span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-seti-orange"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {opportunities.map((opportunity, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-seti-orange transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-seti-blue">
                {opportunity.title}
              </h3>
              <p className="text-gray-300 text-justify">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
