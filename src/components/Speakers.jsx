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
import alvaroImg from '../assets/images/palestrantes/alvaro.jpg'
import luizImg from '../assets/images/palestrantes/luiz.jpg'
import vitorImg from '../assets/images/palestrantes/vitão.jpeg'
import pamelaImg from '../assets/images/palestrantes/pamela.jpeg'
import danielImg from '../assets/images/palestrantes/daniel.png'
import pedroImg from '../assets/images/palestrantes/pedro-nexos.jpeg'
import ellenImg from '../assets/images/palestrantes/Ellen Luise Sanchez Costa.jpg'
import jeanImg from '../assets/images/palestrantes/Jean Santos Diniz.jpeg'

const Speakers = () => {
  const speakers = [
    {
      name: 'Pâmela Marinho',
      title: 'Palestrante',
      description: 'Graduada em Ciência da Computação pela Universidade Federal de Lavras (UFLA), mestre em Biotecnologia também pela UFLA e doutora em Bioinformática pela Universidade Federal de Minas Gerais (UFMG), Pâmela atua atualmente como Data Science Manager no Nubank.',
      image: pamelaImg
    },
    {
      name: 'Álvaro Espíndola',
      title: 'Palestrante',
      description: 'Álvaro Martins Espíndola é Cientista de Dados Prescritivo na Bitka Analytics, formado em Ciência da Computação pela Universidade Federal de Lavras (UFLA) e mestrando em Otimização Quântica pela Universidade Federal de Minas Gerais (UFMG). Atua no desenvolvimento de modelos matemáticos e heurísticos para problemas industriais de grande escala, aplicando técnicas avançadas de Pesquisa Operacional e Programação Matemática. Sua pesquisa concentra-se na integração entre Otimização Clássica e Computação Quântica, explorando como conceitos de dualidade, sobreposição e entropia podem ser incorporados a modelos robustos e métodos híbridos quântico-clássicos, visando ampliar a eficiência e a interpretabilidade de algoritmos prescritivos em ambientes complexos.',
      image: alvaroImg
    },
    {
      name: 'Luiz Soares',
      title: 'Palestrante',
      description: 'Luiz Soares é Tech Lead na Buildaz, empresa da Alemanha, especialista em arquitetura e desenvolvimento Full Stack atuando também com Inteligência Artificial. Mestrando em Ciência da Computação pela UFLA, une visão acadêmica e prática para criar soluções digitais inovadoras e escaláveis.',
      image: luizImg
    },
    {
      name: 'Arthur Viana',
      title: 'Palestrante',
      description: 'Arthur é prompt engineer na Cloudwalk, começou na empresa como estagiário e hoje faz aplicações de IA voltadas para melhorar a experiência do cliente.',
      image: arthurVianaImg
    },
    {
      name: 'Marlon',
      title: 'Palestrante',
      description: 'Especialista em tecnologia com vasta experiência em projetos inovadores, trazendo insights valiosos sobre o futuro da área.',
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
      description: 'Referência na área de tecnologia, trazendo conhecimentos práticos e estratégicos sobre o mercado de TI e desenvolvimento profissional.',
      image: tsunodaImg
    },
    {
      name: 'Vitor Tenório',
      title: 'Palestrante',
      description: 'Formado em Ciência da Computação pela Universidade Federal de Lavras (UFLA), Vitor Tenório é fundador da Zeeway, uma empresa inovadora no ramo de tecnologia, atuando nela atualmente como gerente.',
      image: vitorImg
    },
    {
      name: 'Daniel Oliveira Ferreira',
      title: 'Palestrante',
      description: 'Engenheiro Aeronáutico e Mestre pelo Instituto Tecnológico de Aeronáutica (ITA), é CEO da Dafer Technology e atua também como CEA (Certificado de Especialista em Investimentos ANBIMA). Desenvolveu uma inteligência artificial voltada para auxiliar gestores de fundos de investimento em ações e multimercado, com o objetivo de superar a estratégia tradicional de Buy and Hold de um ativo.',
      image: danielImg
    },
    {
      name: 'Pedro Moura',
      title: 'Palestrante',
      description: 'Especialista em Android Nativo com mais de 15 anos de experiência na área de tecnologia, é empreendedor, mentor e entusiasta da inovação. Com uma sólida trajetória como engenheiro Android e cofundador de startup, atua impulsionando o ecossistema de tecnologia e empreendedorismo em Uberlândia. Além de seu trabalho com desenvolvimento de software, compartilha sua experiência como mentor, contribuindo para o crescimento de novos profissionais e projetos tecnológicos',
      image: pedroImg
    },
    {
      name: 'Ellen Luise Sanchez Costa',
      title: 'Palestrante',
      description: 'Engenheira de Alimentos formada pela Universidade Federal de Lavras (UFLA), Ellen Costa construiu sua trajetória unindo inovação, tecnologia e propósito. Atua como Coordenadorade Marketing e Inovação na YouX, liderando as frentes de Comunicação, Experiência doCliente, Service Design, Inovação e Novos Negócios.',
      image: ellenImg
    },
    {
      name: 'Jean Santos Diniz',
      title: 'Palestrante',
      description: 'Jean Diniz é Analista de Sistemas na YouX, graduando em Sistemas de Informação e atua no desenvolvimento de soluções digitais que unem tecnologia e propósito. Tem se dedicadoao estudo e aplicação de IA generativa e RAG (Retrieval-Augmented Generation) emprodutos voltados à transformação digital da gestão pública.',
      image: jeanImg
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-12"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-200 transition-all duration-300 mx-4 h-[580px] flex flex-col">
                  <div className="h-80 bg-white flex-shrink-0">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className={`w-full h-full object-cover ${speaker.name === 'Luiz Soares' ? 'object-center' : 'object-top'}`}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col overflow-auto">
                    <h3 className="text-xl font-bold mb-2 flex-shrink-0 text-black">{speaker.name}</h3>
                    <p className="text-seti-orange mb-4 text-base flex-shrink-0">{speaker.title}</p>
                    <p className="text-sm text-black leading-relaxed text-justify">
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-12"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:scale-105 transition-transform duration-300 h-[580px] flex flex-col">
                  <div className="h-80 bg-gray-200 flex-shrink-0">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className={`w-full h-full object-cover ${speaker.name === 'Luiz Soares' ? 'object-center' : 'object-top'}`}
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
