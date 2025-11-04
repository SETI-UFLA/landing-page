import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import arthurVianaImg from '../assets/images/palestrantes/arthur-viana.png';
import marlonImg from '../assets/images/palestrantes/marlon.png';
import nelsonImg from '../assets/images/palestrantes/nelson.png';
import rafaelAlmeidaImg from '../assets/images/palestrantes/rafael-almeida.png';
import tsunodaImg from '../assets/images/palestrantes/tsunoda.jpg';
import alvaroEspindolaImg from '../assets/images/palestrantes/alvaro-espindola.jpg';
import luisSoaresaImg from '../assets/images/palestrantes/luis-soares.jpeg';
import vitorTenorioImg from '../assets/images/palestrantes/vitor-tenorio.png';
import pamelaMarinhoImg from '../assets/images/palestrantes/pamela-marinho.png';
import danielOliveiraImg from '../assets/images/palestrantes/daniel-oliveira.png';
import felipeAmorimImg from '../assets/images/palestrantes/felipe-amorim.jpeg';
import talesImg from '../assets/images/palestrantes/talesImg.jpg';

const Speakers = () => {
  const speakers = [
    {
      name: 'Arthur Viana',
      title: 'Palestrante',
      description: 'Arthur é prompt engineer na Cloudwalk, começou na empresa como estagiário e hoje faz aplicações de IA voltadas para melhorar a experiência do cliente.',
      image: arthurVianaImg
    },
    {
      name: 'Marlon',
      title: 'Palestrante',
      description: 'Marlon é estudante de Ciência da Computação na UFSCar e atua como estagiário nas áreas de segurança e desenvolvimento. É cofundador do grupo Patos, voltado a projetos open source e à troca de conhecimento entre estudantes. Atualmente, trabalha com cibersegurança, criptografia e hardware.',
      image: marlonImg
    },
    {
      name: 'Nelson',
      title: 'Palestrante',
      description: 'Engenheiro de Software, construindo apps com AI na CloudWalk, fazendo silício desenvolver consciência com o JIM, e construindo a rede intergaláctica de pagamentos.',
      image: nelsonImg
    },
    {
      name: 'Rafael Almeida',
      title: 'Palestrante',
      description: 'Apaixonado por tecnologia que cabe na palma da mão, é desenvolvedor mobile há mais de 10 anos e hoje é especialista na Cloudwalk criando soluções e apoiando todo o time de mobile da empresa.',
      image: rafaelAlmeidaImg
    },
    {
      name: 'Tsunoda',
      title: 'Palestrante',
      description: 'Referência na área de tecnologia, pela bolhadev, fazendo grandes contribuições para a comunidade de desenvolvedores no Brasil. Atualmente criando sua startup focado em incrições automatizadas para vagas tech devscout, fazendo build em público.',
      image: tsunodaImg
    },
    {
      name: 'Álvaro Espíndola',
      title: 'Palestrante',
      description: 'Álvaro Martins Espíndola é Cientista de Dados Prescritivo na Bitka Analytics, formado em Ciência da Computação pela Universidade Federal de Lavras (UFLA) e mestrando em Otimização Quântica pela Universidade Federal de Minas Gerais (UFMG). Atua no desenvolvimento de modelos matemáticos e heurísticos para problemas industriais de grande escala, aplicando técnicas avançadas de Pesquisa Operacional e Programação Matemática. Sua pesquisa concentra-se na integração entre Otimização Clássica e Computação Quântica, explorando como conceitos de dualidade, sobreposição e entropia podem ser incorporados a modelos robustos e métodos híbridos quântico-clássicos, visando ampliar a eficiência e a interpretabilidade de algoritmos prescritivos em ambientes complexos.',
      image: alvaroEspindolaImg
    },
    {
      name: 'Luiz Soares',
      title: 'Palestrante',
      description: 'Luiz Soares é Tech Lead na Buildaz (Alemanhã), especialista em arquitetura e desenvolvimento Full Stack atuando também com Inteligência Artificial. Mestrando em Ciência da Computação pela UFLA, une visão acadêmica e prática para criar soluções digitais inovadoras e escaláveis.',
      image: luisSoaresaImg
    },
    {
      name: 'Vitor Tenorio',
      title: 'Palestrante',
      description: 'Formado em Ciência da Computação pela Universidade Federal de Lavras (UFLA), Vitor Tenório é fundador da Zeeway, uma empresa inovadora no ramo de tecnologia, atuando nela atualmente como gerente.',
      image: vitorTenorioImg
    },
    {
      name: 'Pamela Marinho',
      title: 'Palestrante',
      description: 'Graduada em Ciência da Computação pela Universidade Federal de Lavras (UFLA), mestre em Biotecnologia também pela UFLA e doutora em Bioinformática pela Universidade Federal de Minas Gerais (UFMG), Pâmela atua atualmente como Data Science Manager no Nubank.',
      image: pamelaMarinhoImg
    },
    {
      name: 'Daniel Oliveira',
      title: 'Palestrante',
      description: 'Engenheiro Aeronáutico e Mestre pelo Instituto Tecnológico de Aeronáutica (ITA), é CEO da Dafer Technology e atua também como consultor de investimentos. Desenvolveu uma inteligência artificial voltada para auxiliar gestores de fundos de investimento em ações e multimercado, com o objetivo de superar a estratégia tradicional de Buy and Hold de um ativo.',
      image: danielOliveiraImg
    },
    {
      name: 'Felipe Amorim',
      title: 'Palestrante',
      description: 'Desenvolvedor iOS com mais de 6 anos de experiência, formado em Ciência da Computação e atualmente cursando MBA em Inteligência Artificial e Analytics Aplicadas a Negócios na FGV.',
      image: felipeAmorimImg
    },
    {
      name: 'Tales Vieira',
      title: 'Palestrante',
      description: 'Tales Vieira é Perito Criminal da Polícia Civil de Minas Gerais há 21 anos, atualmente coordenando as Perícias do 6º Departamento. Possui Doutorado em Química e Pós-Doutorado em Ciência de Dados, atuando na integração entre tecnologia, investigação e análise inteligente de informações. Professor universitário há 22 anos e coordenador do Grupo de Estudos em Perícia e Investigação Digital do Unilavras, dedica-se à aplicação de Python, machine learning e cibersegurança em contextos forenses e de segurança pública.',
      image: talesImg
    },
  ];

  return (
    <section id="palestrantes" className="relative py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 px-4">
          CONHEÇA ALGUNS DE NOSSOS <span className="text-seti-orange">PALESTRANTES</span>
        </h2>

        {/* Mobile Carousel */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 30000, disableOnInteraction: false }}
            className="pb-12"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-200 transition-all duration-300 mx-4 h-[580px] flex flex-col">
                  <div className="h-64 bg-gray-200 flex-shrink-0">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col overflow-auto">
                    <h3 className="text-xl font-bold mb-2 flex-shrink-0 text-black">{speaker.name}</h3>
                    <p className="text-seti-orange mb-4 text-base flex-shrink-0">{speaker.title}</p>
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 30000, disableOnInteraction: false }}
            className="pb-12"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:scale-105 transition-transform duration-300 h-[580px] flex flex-col">
                  <div className="h-72 bg-gray-200 flex-shrink-0">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col overflow-auto">
                    <h3 className="text-xl font-bold mb-2 flex-shrink-0 text-black">{speaker.name}</h3>
                    <p className="text-seti-orange mb-4 text-base flex-shrink-0">{speaker.title}</p>
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Speakers;