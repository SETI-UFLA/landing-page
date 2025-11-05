import React, { useState } from 'react';
import marlonImg from '../assets/images/palestrantes/marlon.png';
import luisSoaresaImg from '../assets/images/palestrantes/luis-soares.jpeg';
import felipeAmorimImg from '../assets/images/palestrantes/felipe-amorim.jpeg';
import tsunodaImg from '../assets/images/palestrantes/tsunoda.jpg';
import danielOliveiraImg from '../assets/images/palestrantes/daniel-oliveira.png';
import nelsonImg from '../assets/images/palestrantes/nelson.png';
import alvaroEspindolaImg from '../assets/images/palestrantes/alvaro-espindola.jpg';
import vitorTenorioImg from '../assets/images/palestrantes/vitor-tenorio.png';
import talesImg from '../assets/images/palestrantes/talesImg.jpg';
import arthurVianaImg from '../assets/images/palestrantes/arthur-viana.png';
import pamelaMarinhoImg from '../assets/images/palestrantes/pamela-marinho.png';
import angeloNexos from '../assets/images/palestrantes/angeloNexos.jpeg';
import rafaelAlmeidaImg from '../assets/images/palestrantes/rafael-almeida.png';
import danielRodoSafra from '../assets/images/palestrantes/danielRodoSafra.jpg';
import guilhermeLevty from '../assets/images/palestrantes/guilhermeLevty.jpg';
import ellenYouX from '../assets/images/palestrantes/Ellen Luise Sanchez Costa.jpg';
import jeanYouX from '../assets/images/palestrantes/Jean Santos Diniz.jpeg';

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
        image: marlonImg,
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
        image: luisSoaresaImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScG1CcswO5jR3ZRsMELfpmtoNGHJUSy-hmaUKrqy8iml1fbSQ/viewform?usp=sharing&ouid=115159331211906572522'
      }
    ],
    '04/11': [
      {
        time: '13:00 - 14:00',
        title: 'Server Driven User Interface (SDUI) no Futuro do Desenvolvimento Mobile',
        speaker: 'Felipe Amorim',
        image: felipeAmorimImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdPZk8Bqkdes7U2KsCJNqBnLzQRYK7IKe8p4ueFA7DMutKI8w/viewform?usp=dialog'
      },
      {
        time: '20:00 - 21:00',
        title: 'A plataforma Devscout',
        speaker: 'Gabriel Tsonuda',
        image: tsunodaImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdMNXd2Up-zlV1uaYa148Kb15QdJpgv_yknNw1DfZUNu7OHyg/viewform?usp=sharing&ouid=115159331211906572522'
      }
    ],
    '05/11': [
      {
        time: '13:00 - 14:00',
        title: 'Rodosafra - integrando pessoas e tecnologia',
        speaker: 'Daniel Henrique Pinheiro - Rodosafra',
        image: danielRodoSafra,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfBD6D8OYb8SIZh-FLX8C5UAVdpdKRDGh2BPfFGlz2To9Q-8Q/viewform?usp=publish-editor'

      },
      {
        time: '14:00 - 15:00',
        title: 'Como desenvolver sua própria inteligência artificial',
        speaker: 'Daniel Oliveira',
        image: danielOliveiraImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc0GfI87YEcgcqskrYmi91xcymDjnKGhIn0l9WjPPXz3h9uYQ/viewform?usp=dialog'
      },
      {
        time: '15:00 - 16:00',
        title: 'AI-Driven Development: Evitando a Guerra Butleriana ',
        speaker: 'Nelson Campos - Cloudwalk',
        image: nelsonImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfZZ5CPUQma7NehoCxsxrcjt7vLZPvJh008myxeE7DBdjGEAA/viewform?usp=dialog'
      },
      {
        time: '16:00 - 17:00',
        title: 'Computação Quântica',
        speaker: 'Álvaro Martins',
        image: alvaroEspindolaImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe-fNOZr6y-pt1z-1O0YdyYKKsWQNSn55l0m0aZpJuAUiakvA/viewform?usp=dialog'
      },
      {
        time: '17:00 - 18:00',
        title: 'Gestão de Projetos: Pessoas, Processos e Propósito',
        speaker: 'Vitor Tenório - Fundador da Zeeway',
        image: vitorTenorioImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfZyDmOp2fcGFfsmR9K026rCNhVtR9isc2c3ojuH5PT2L6PSQ/viewform?usp=sharing&ouid=115159331211906572522'
      },
      {
        time: '18:00 - 19:00',
        title: 'Seo na prática: Como buscadores pensam, o que importa e como medir resultados.',
        speaker: 'Guilherme Grego Santos - Levty',
        image: guilhermeLevty,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeQnvsXtHGBruT2OJUNQYkYzCJGPoUR0OkYFW-BRj81jlpdhg/viewform?usp=sharing&ouid=115159331211906572522'
      },
    ],
    '06/11': [
      {
        time: '15:00 - 16:00',
        title: 'The Data Investigator: Como a Ciência dos Dados Revoluciona a Perícia Digital',
        speaker: 'Tales Vieira - Perito Criminal da Polícia Civil de Minas Gerais',
        image: talesImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdc8WOFvHO_bmEQTE5dzRyWsHaKjgAapk9oUh3hmiGpWIEqFA/viewform?usp=dialog'
      },
      {
        time: '16:00 - 17:00',
        title: 'Arquiteturas de agentes de IA',
        speaker: 'Arthur Viana - Cloudwalk',
        image: arthurVianaImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSerg5TyjoQflROPMJhV-7lzasPAyiPPhwMl9ImwbyNVp9jwcg/viewform?usp=sharing&ouid=115159331211906572522'
      },
      {
        time: '17:00 - 18:00',
        title: 'YVA: A agente inteligente que está transformando a gestão pública no Brasil',
        speaker: 'Jean Santos Diniz e  Ellen Luise Sanchez Costa - YouX',
        images: [jeanYouX, ellenYouX],
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeX3XrjSLXqEBWTKzHTmVYjT9QwynzYCFwxfLUhq6TzOlND0Q/viewform?usp=dialog'
      },
      {
        time: '20:00 - 21:00',
        title: 'De dados a decisão: a jornada do Cientista de Dados',
        speaker: 'Pâmela Marinho',
        image: pamelaMarinhoImg,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdNyopnyXxS_GLGRodultFmf1kWWIbVy2Va4kL9TxJdBqb9mQ/viewform?usp=dialog'
      },
    ],
    '07/11': [
      {
        time: '13:00 - 14:00',
        title: 'Inteligência Artificial e o Futuro do Trabalho',
        speaker: 'Ângelo Cupertino - Software Engineer na Nexos',
        image: angeloNexos,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfIvSiQ6Fe9stIgw1DsSgEWfy_OGzLZr3va_z_5OG__Hwl6tg/viewform?usp=sharing&ouid=115159331211906572522'
      },
      {
        time: '14:00 - 15:00',
        title: 'Treinando RNA utilizando estratégias evolutivas',
        speaker: 'Rafael Almeida - Cloudwalk',
        image: rafaelAlmeidaImg,
       formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdvMacyy-8r_ZkWxt6lBzSy5LEQ7-RKTo_YhZCc3e1j0eUn1Q/viewform?usp=dialog'
      },
      {
        time: '14:00 - 15:00',
        title: 'Realidade Virtual para além do entretenimento: aplicações na educação, saúde e ambiente corporativo.',
        speaker: 'Gabriel Barros, Hugo Lima, Lucca Guedes e Nina Ribeiro',
       formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc_nmk9z7T2OKwYzTLdhKhGm-JBSI6UIsRgD58eHvr2_tqmkA/viewform?usp=publish-editor'
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
  const pastDays = ['03/11', '04/11']; // Dias que já passaram

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
          {days.map((day) => {
            const isPast = pastDays.includes(day);
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                  selectedDay === day
                    ? isPast
                      ? 'bg-gray-600 text-white'
                      : 'bg-seti-orange text-black'
                    : isPast
                    ? 'bg-transparent border-2 border-gray-500 text-gray-400 hover:border-gray-400 hover:text-gray-300'
                    : 'bg-transparent border-2 border-white text-white hover:border-seti-orange hover:text-seti-orange'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Schedule Items */}
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          {scheduleByDay[selectedDay].map((item, index) => {
            const isPastDay = pastDays.includes(selectedDay);
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-r rounded-lg overflow-hidden transition-all duration-300 ${
                  isPastDay
                    ? 'from-gray-800/60 to-gray-900/60 border-l-4 border-gray-500 opacity-75 hover:opacity-90'
                    : 'from-black/80 to-black/60 border-l-4 border-seti-orange hover:from-black/90 hover:to-black/70'
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left Content Section */}
                  <div className="flex-1 p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                      {/* Time Column */}
                      <div className="md:w-40 shrink-0">
                        <div className={`font-bold text-lg md:text-xl ${isPastDay ? 'text-gray-400' : 'text-seti-orange'}`}>
                          {item.time}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`font-bold text-base md:text-lg mb-2 ${isPastDay ? 'text-gray-300' : 'text-white'}`}>
                          {item.title}
                        </h3>
                        {item.speaker && (
                          <p className={`text-sm md:text-base mb-3 ${isPastDay ? 'text-gray-400' : 'text-seti-orange'}`}>
                            com <span className="font-semibold">{item.speaker}</span>
                          </p>
                        )}
                        {item.description && (
                          <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                            {item.description}
                          </p>
                        )}
                        {isPastDay ? (
                          <button
                            disabled
                            className="inline-flex items-center gap-2 bg-green-700 text-white font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm cursor-not-allowed opacity-80"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Realizado
                          </button>
                        ) : (
                          <a
                            href={item.formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-seti-orange hover:bg-orange-600 text-black font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm transition-all duration-300 transform hover:scale-105"
                          >
                            Inscrever-se
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Speaker Image(s) - Right Side */}
                  {item.images ? (
                    <div className="w-full md:w-32 lg:w-40 h-32 md:h-auto shrink-0 flex md:flex-col">
                      {item.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="flex-1 h-full">
                          <img
                            src={img}
                            alt={item.speaker}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ) : item.image ? (
                    <div className="w-full md:w-32 lg:w-40 h-32 md:h-auto shrink-0">
                      <img
                        src={item.image}
                        alt={item.speaker}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
