import React, { useState } from 'react';

const Agenda = () => {
  const [selectedDay, setSelectedDay] = useState('03/11');

  const scheduleByDay = {
    '03/11': [
      {
        time: '13:00 - 14:00',
        title: 'ABERTURA E CREDENCIAMENTO',
        description: 'Abertura e entrega das credenciais aos participantes do evento',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfZLqmzLLmX0qn9eGKDn70P4vi246hVMdAwkQTS8Da0LMtGbw/viewform?usp=dialog'
      },
      {
        time: '14:00 - 15:00',
        title: 'CiberSegurança Em Aplicações Web Com Um Plus de Criptografia',
        speaker: 'Marlon Henrique Sanches',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeFJhXzu12gQ4lD-5UXhA1Oc7VpaDD8qdxhnM5t8dFUt1W6Eg/viewform?usp=dialog'
      },
      {
        time: '15:00 - 17:00',
        title: 'Os bastidores de uma solução Low Code - Plataforma SYDLE ONE',
        speaker: 'SYDLE',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfZkj0DPjd8UUEEXlH6WYLxmUzQ9_hCgWsXIwlRGllvxOF-yA/viewform?usp=dialog'
      },
      {
        time: '19:00 - 20:00',
        title: 'DO ZERO AO LLM: FUNDAMENTOS DE IA NA CONSTRUÇÃO DE ASSISTENTES INTELIGENTES',
        speaker: 'Luiz',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScG1CcswO5jR3ZRsMELfpmtoNGHJUSy-hmaUKrqy8iml1fbSQ/viewform?usp=sharing&ouid=115159331211906572522'
      }
    ],
    '04/11': [
      {
        time: '13:00 - 14:00',
        title: 'Server Driven User Interface (SDUI) no Futuro do Desenvolvimento Mobile',
        speaker: 'Felipe Amorim',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdPZk8Bqkdes7U2KsCJNqBnLzQRYK7IKe8p4ueFA7DMutKI8w/viewform?usp=dialog'
      },
      {
        time: '20:00 - 21:00',
        title: 'A plataforma Devscout',
        speaker: 'Gabriel Tsonuda',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdMNXd2Up-zlV1uaYa148Kb15QdJpgv_yknNw1DfZUNu7OHyg/viewform?usp=sharing&ouid=115159331211906572522'
      }
    ],
    '05/11': [
      {
        time: '14:00 - 15:00',
        title: 'Como desenvolver sua própria inteligência artificial',
        speaker: 'Daniel Oliveira',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc0GfI87YEcgcqskrYmi91xcymDjnKGhIn0l9WjPPXz3h9uYQ/viewform?usp=dialog'
      },
      {
        time: '15:00 - 16:00',
        title: 'AI-Driven Development: Evitando a Guerra Butleriana ',
        speaker: 'Nelson Campos - Cloudwalk',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfZZ5CPUQma7NehoCxsxrcjt7vLZPvJh008myxeE7DBdjGEAA/viewform?usp=dialog'
      },
      {
        time: '16:00 - 17:00',
        title: 'Computação Quântica',
        speaker: 'Álvaro Martins',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe-fNOZr6y-pt1z-1O0YdyYKKsWQNSn55l0m0aZpJuAUiakvA/viewform?usp=dialog'
      },
      {
        time: '17:00 - 18:00',
        title: 'Gestão de Projetos: Pessoas, Processos e Propósito',
        speaker: 'Vitor Tenório - Fundador da Zeeway',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfZyDmOp2fcGFfsmR9K026rCNhVtR9isc2c3ojuH5PT2L6PSQ/viewform?usp=sharing&ouid=115159331211906572522'
      },
      {
        time: '18:00 - 19:00',
        title: 'Seo na prática: Como buscadores pensam, o que importa e como medir resultados.',
        speaker: 'Guilherme Grego Santos - Levty',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeQnvsXtHGBruT2OJUNQYkYzCJGPoUR0OkYFW-BRj81jlpdhg/viewform?usp=sharing&ouid=115159331211906572522'
      },
    ],
    '06/11': [
      {
        time: '15:00 - 16:00',
        title: 'The Data Investigator: Como a Ciência dos Dados Revoluciona a Perícia Digital',
        speaker: 'Tales Vieira - Perito Criminal da Polícia Civil de Minas Gerais',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdc8WOFvHO_bmEQTE5dzRyWsHaKjgAapk9oUh3hmiGpWIEqFA/viewform?usp=dialog'
      },
      {
        time: '16:00 - 17:00',
        title: 'Arquiteturas de agentes de IA',
        speaker: 'Arthur Viana - Cloudwalk',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSerg5TyjoQflROPMJhV-7lzasPAyiPPhwMl9ImwbyNVp9jwcg/viewform?usp=sharing&ouid=115159331211906572522'
      },
      {
        time: '17:00 - 18:00',
        title: 'YVA: A agente inteligente que está transformando a gestão pública no Brasil',
        speaker: 'Jean Santos Diniz e  Ellen Luise Sanchez Costa - YouX',
        description: 'Ellen Luise Sanchez Costa Coordenadora de Marketing e Inovação na YouX Engenheira de Alimentos formada pela Universidade Federal de Lavras (UFLA), Ellen Costa construiu sua trajetória unindo inovação, tecnologia e propósito. Atua como Coordenadora de Marketing e Inovação na YouX, liderando as frentes de Comunicação, Experiência do Cliente, Service Design, Inovação e Novos Negócios. Jean Santos Diniz Analista de Sistemas na YouX Jean Diniz é Analista de Sistemas na YouX, graduando em Sistemas de Informação e atua no desenvolvimento de soluções digitais que unem tecnologia e propósito. Tem se dedicado ao estudo e aplicação de IA generativa e RAG (Retrieval-Augmented Generation) em produtos voltados à transformação digital da gestão pública.',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeX3XrjSLXqEBWTKzHTmVYjT9QwynzYCFwxfLUhq6TzOlND0Q/viewform?usp=dialog'
      },
      {
        time: '20:00 - 21:00',
        title: 'De dados a decisão: a jornada do Cientista de Dados',
        speaker: 'Pâmela Marinho',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdNyopnyXxS_GLGRodultFmf1kWWIbVy2Va4kL9TxJdBqb9mQ/viewform?usp=dialog'
      },
    ],
    '07/11': [
      {
        time: '13:00 - 14:00',
        title: 'Inteligência Artificial e o Futuro do Trabalho',
        speaker: 'Nexos',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfIvSiQ6Fe9stIgw1DsSgEWfy_OGzLZr3va_z_5OG__Hwl6tg/viewform?usp=sharing&ouid=115159331211906572522'
      },
      {
        time: '14:00 - 15:00',
        title: 'Treinando RNA utilizando estratégias evolutivas',
        speaker: 'Rafael Almeida - Cloudwalk',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdvMacyy-8r_ZkWxt6lBzSy5LEQ7-RKTo_YhZCc3e1j0eUn1Q/viewform?usp=dialog'
      },
      {
        time: '17:00 - 18:00',
        title: 'Encerramento',
        speaker: 'Time SE7I',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfSOovQxDT3Orzs8fxJ_Q63iAEyt7AYAv6xHx31vR-XfjIm5A/viewform?usp=sharing&ouid=115159331211906572522'
      }
    ]
  };

  const days = ['03/11', '04/11', '05/11', '06/11', '07/11'];

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
                {/* Time Column */}
                <div className="md:w-40 shrink-0">
                  <div className="text-seti-orange font-bold text-lg md:text-xl">
                    {item.time}
                  </div>
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
                  {item.description && (
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}
                  <a
                    href={item.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-seti-orange hover:bg-orange-600 text-black font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm transition-all duration-300 transform hover:scale-105"
                  >
                    Inscrever-se
                  </a>
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
