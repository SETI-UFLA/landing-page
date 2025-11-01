import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import compjuniorLogo from '../assets/images/CompJUNIOR.png';
import emakersLogo from '../assets/images/Emakers Jr..png';
import catiLogo from '../assets/images/CATI.png';

const About = () => {
  const companies = [
    {
      title: 'QUEM É A COMPJUNIOR?',
      logo: compjuniorLogo,
      description: 'Somos uma empresa júnior que já atua no desenvolvimento de projetos de tecnologia há mais de 25 anos. Nosso início foi no dia 11 de Agosto de 1999 e, desde então, trabalhamos em diversos projetos de consultoria em web design, desenvolvimento de sistemas online e mobile, capacitações em ferramentas de tecnologia e até análise de dados.',
    },
    {
      title: 'QUEM É A EMAKERS JR.?',
      logo: emakersLogo,
      description: 'Somos a Emakers Jr, uma empresa júnior de tecnologia da UFLA, fundada em 2018, com o propósito de formar jovens líderes e profissionais preparados para os desafios do mercado de trabalho. Nosso diferencial é uma abordagem inovadora e ousada, sempre buscando projetos que nos desafiem e nos tirem da zona de conforto, promovendo soluções tecnológicas de impacto.',
    },
    {
      title: 'QUEM É A CATI?',
      logo: catiLogo,
      description: 'O CATI - Centro Academico de Tecnologia e Informação é uma iniciativa que oferece suporte ao corpo discente da UFLA, promovendo a integração entre alunos e empresas do setor de tecnologia. Nosso objetivo é proporcionar experiências práticas e oportunidades de desenvolvimento profissional para os estudantes, e melhorar o convivío contidiano durante a formação acadêmica.',
    },
  ];

  return (
    <section id="sobre" className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-seti-orange">QUEM SOMOS?</span>
        </h2>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-12"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-8 hover:border-seti-orange transition-all duration-300 mx-4 h-[520px] flex flex-col">
                  {/* Logo */}
                  <div className="flex justify-center mb-6 mt-4 flex-shrink-0">
                    <div className="w-32 h-24 flex items-center justify-center">
                      <img 
                        src={company.logo} 
                        alt={company.title}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-center flex-shrink-0">
                    {company.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-justify flex-1 overflow-auto">
                    {company.description}
                  </p>
                  
                  <div className="mt-8 text-center flex-shrink-0">
                    <button className="bg-seti-orange hover:bg-orange-600 px-8 py-3 rounded-full font-bold transition-all duration-300">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-8 hover:border-seti-orange transition-all duration-300 h-[520px] flex flex-col"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6 mt-4 flex-shrink-0">
                <div className="w-32 h-24 flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.title}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-center flex-shrink-0">
                {company.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-justify flex-1 overflow-auto">
                {company.description}
              </p>
              
              <div className="mt-8 text-center flex-shrink-0">
                <button className="bg-seti-orange hover:bg-orange-600 px-8 py-3 rounded-full font-bold transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative plus signs */}
        <div className="absolute left-10 top-1/2 text-seti-orange text-4xl opacity-30">+</div>
        <div className="absolute right-10 top-1/3 text-seti-orange text-4xl opacity-30">+</div>
        <div className="absolute right-20 bottom-20 text-seti-orange text-4xl opacity-30">+</div>
      </div>
    </section>
  );
};

export default About;
