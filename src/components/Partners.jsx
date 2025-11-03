import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sydleLogo from '../assets/images/SYDLE.png';
import levtyLogo from '../assets/images/LEVTY.png';
import bitkaLogo from '../assets/images/BITKA.jpg';
import cloudwalkLogo from '../assets/images/CLOUDWALK.png';
import youxLogo from '../assets/images/YOUX.jpeg';
import nexosLogo from '../assets/images/NEXOS.jpeg';

const Partners = () => {
  const partners = [
    {
      name: 'SYDLE',
      logo: sydleLogo,
      description: 'O SYDLE ONE é uma plataforma integrada de negócios, que reúne uma série de funcionalidades voltadas para melhorar a performance empresarial.',
    },
    {
      name: 'LEVTY',
      logo: levtyLogo,
      description: 'A LEVTY é formada por times de profissionais especializados em transformação digital corporativa, que trabalham de forma dedicada como parte da sua organização.',
    },
    {
      name: 'BITKA',
      logo: bitkaLogo,
      description: 'Fundada em 2020, a BITKA é uma empresa brasileira especializada em Advanced Analytics. Com uma equipe altamente qualificada, implementa soluções analíticas de alta complexidade para grandes corporações.',
    },
    {
      name: 'CLOUDWALK',
      logo: cloudwalkLogo,
      description: 'CloudWalk é uma empresa brasileira de tecnologia financeira (fintech) fundada em 2013 que opera como uma rede de pagamentos inteligentes, com o objetivo de democratizar o acesso a serviços financeiros para empreendedores',
    },
    {
      name: 'YOUX',
      logo: youxLogo,
      description: 'O Grupo YouX reúne pessoas comprometidas com o potencial humano e com o avanço da inovação tecnológica no Brasil. Atua conectando iniciativas e desenvolvendo soluções colaborativas e criativas, com o propósito de descomplicar o complexo e gerar impacto positivo.',
    },
    {
      name: 'NEXOS',
      logo: nexosLogo,
      description: 'Com um time de especialistas, te ajudamos a desenvolver o software que você precisa, de ponta a ponta. Com foco em inovar, construir e escalar. Trabalhamos de perto para simplificar o seu dia-a-dia com tecnologia!',
    },
  ];

  return (
    <section id="patrocinadores" className="relative py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 px-4">
          CONHEÇA NOSSOS <span className="text-seti-orange">PATROCINADORES</span>
        </h2>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 30000, disableOnInteraction: false }}
            className="pb-12"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black p-6 rounded-lg mx-4 h-[420px] flex flex-col">
                  <div className="h-40 flex items-center justify-center mb-4 flex-shrink-0">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-justify font-medium overflow-auto" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", fontWeight: 500 }}>
                    {partner.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 30000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black p-6 md:p-8 rounded-lg hover:scale-105 transition-transform duration-300 h-[420px] md:h-[440px] flex flex-col">
                  <div className="h-32 md:h-40 flex items-center justify-center mb-4 flex-shrink-0">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-justify font-medium overflow-auto" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", fontWeight: 500 }}>
                    {partner.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
