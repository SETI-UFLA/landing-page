import React, { useState } from 'react';

const Agenda = () => {
  const [selectedDay, setSelectedDay] = useState('Dia 1');

  const scheduleByDay = {
    'Dia 1': [
      {
        time: '13:00 - 14:00',
        title: 'ABERTURA E CREDENCIAMENTO',
        description: 'Abertura e entrega das credenciais aos participantes do evento',
        type: 'Presencial'
      },
      {
        time: '14:00 - 15:00',
        title: 'GitOps: The Good, the Bad, and the Ugly',
        speaker: 'Rafael Durelli',
        type: 'Presencial'
      },
      {
        time: '15:00 - 16:00',
        title: 'Os bastidores de uma solução Low Code - Plataforma SYDLE ONE',
        speaker: 'SYDLE',
        type: 'Presencial'
      },
      {
        time: '16:00 - 17:00',
        title: 'Os bastidores de uma solução Low Code - Plataforma SYDLE ONE',
        speaker: 'SYDLE',
        type: 'Presencial'
      },
      {
        time: '19:00 - 20:00',
        title: 'DO ZERO AO LLM: FUNDAMENTOS DE IA NA CONSTRUÇÃO DE ASSISTENTES INTELIGENTES',
        speaker: 'Luiz',
        type: 'Presencial'
      }
    ],
    'Dia 2': [
      {
        time: '13:00 - 14:00',
        title: 'Server Driven User Interface (SDUI) no Futuro do Desenvolvimento Mobile',
        speaker: 'NEXOS',
        type: 'Presencial'
      },
      {
        time: '20:00 - 21:00',
        title: 'A plataforma Devscout',
        speaker: 'DEVSCOUT',
        type: 'Online'
      }
    ],
    'Dia 3': [
      {
        time: '15:00 - 16:00',
        title: 'AI-Driven Development: Evitando a Guerra Butleriana ',
        speaker: 'Nelson Campos - Cloudwalk',
        description: 'Construindo apps com AI na CloudWalk, fazendo silício desenvolver consciência com o JIM, e construindo a rede intergalactica de pagamentos.',
        type: 'Presencial'
      },
    ],
    'Dia 4': [
      {
        time: '16:00 - 17:00',
        title: 'Arquiteturas de agentes de IA',
        speaker: 'Arthur Viana - Cloudwalk',
        description: ' arthur é prompt engineer na Cloudwalk, começou na empresa como estagiário e hoje faz aplicações de IA voltadas para melhorar a experiência do cliente.',
        type: 'Presencial'
      },
      {
        time: '17:00 - 18:00',
        title: 'YVA: A agente inteligente que está transformando a gestão pública no Brasil',
        speaker: 'Jean Santos Diniz e  Ellen Luise Sanchez Costa - YouX',
        description: ' arthur é prompt engineer na Cloudwalk, começou na empresa como estagiário e hoje faz aplicações de IA voltadas para melhorar a experiência do cliente.',
        type: 'Presencial'
      }
    ],
    'Dia 5': [
      {
        time: '13:00 - 14:00',
        title: 'Inteligência Artificial e o Futuro do Trabalho',
        speaker: 'NEXOS',
        description: 'ENCERRAMENTO DO EVENTO E ENTREGA DE CERTIFICADOS',
        type: 'Presencial'
      },
      {
        time: '14:00 - 15:00',
        title: 'Treinando RNA utilizando estratégias evolutivas',
        speaker: 'Rafael Almeida - Cloudwalk',
        description: 'Apaixonado por tecnologia que cabe na palma da mão, é desenvolvedor mobile há mais de 10 anos e hoje é especialista na Cloudwalk criando soluções e apoiando todo o time de mobile da empresa.',
        type: 'Presencial'
      }
    ]
  };

  const days = ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5'];

  return (
    <section id="atividades" className="relative py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
          <span className="text-white">AGENDA</span>
        </h2>

        {/* Day Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                selectedDay === day
                  ? 'bg-seti-orange text-black'
                  : 'bg-transparent border-2 border-white text-white hover:border-seti-orange hover:text-seti-orange'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Items */}
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          {scheduleByDay[selectedDay].map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-black/80 to-black/60 border-l-4 border-seti-orange rounded-lg p-4 md:p-6 hover:from-black/90 hover:to-black/70 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Time and Badge Column */}
                <div className="flex flex-col gap-3 md:w-48 flex-shrink-0">
                  <div className="text-seti-orange font-bold text-lg md:text-xl">
                    {item.time}
                  </div>
                  <span className={`inline-block px-4 py-2 rounded-full text-xs md:text-sm font-bold text-center ${
                    item.type === 'Presencial'
                      ? 'bg-seti-orange text-black'
                      : 'bg-transparent border border-white text-white'
                  }`}>
                    {item.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base md:text-lg mb-2">
                    {item.title}
                  </h3>
                  {item.speaker && (
                    <p className="text-seti-orange text-sm md:text-base mb-3">
                      com <span className="font-semibold">{item.speaker}</span>
                    </p>
                  )}
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
