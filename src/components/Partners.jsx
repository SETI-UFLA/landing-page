import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sydleLogo from '../assets/images/SYDLE.png';
import levtyLogo from '../assets/images/LEVTY.png';
import bitkaLogo from '../assets/images/BITKA.png';
import cloudwalkLogo from '../assets/images/CLOUDWALK.png';

const Partners = () => {
  const [activePartner, setActivePartner] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

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
  ];

  // Auto-rotate partners on desktop - disabled by default
  // Users can hover to activate
  useEffect(() => {
    // Removed auto-rotate to start with all cards inactive
    // Only activates on user hover
  }, [activePartner, partners.length]);

  return (
    <section className="relative py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 px-4">
          CONHEÇA NOSSOS <span className="text-seti-orange"> <br/>PARCEIROS e APOIADORES</span>
        </h2>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            className="pb-12"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div className={`mx-4 rounded-lg p-6 transition-all duration-500 flex flex-col ${
                    isActive
                      ? 'bg-white shadow-xl shadow-seti-orange/30'
                      : 'bg-gray-900/50 backdrop-blur-sm border border-gray-700'
                  }`}>
                    {/* Logo */}
                    <div className="h-40 flex items-center justify-center mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className={`h-full w-full object-contain transition-all duration-500 ${
                          isActive ? 'grayscale-0 brightness-100' : 'grayscale brightness-0 invert opacity-40'
                        }`}
                      />
                    </div>

                    {/* Description - Only visible on active slide */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-xs leading-relaxed text-black text-justify" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", fontWeight: 500 }}>
                        {partner.description}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto items-start">
          {partners.map((partner, index) => {
            const isActive = activePartner === index;
            return (
              <div
                key={index}
                className="relative"
                style={{ minHeight: '16rem' }}
              >
                <div
                  onMouseEnter={() => setActivePartner(index)}
                  onMouseLeave={() => setActivePartner(null)}
                  className={`cursor-pointer rounded-lg transition-all duration-500 flex flex-col ${
                    isActive
                      ? 'bg-white shadow-2xl shadow-seti-orange/30 p-6 md:p-8 absolute top-0 left-0 right-0 z-20'
                      : 'bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-4 md:p-8 hover:border-gray-600 h-56 md:h-64'
                  }`}
                >
                  <div className="flex items-center justify-center relative" style={{ height: isActive ? '8rem' : '10rem', transition: 'height 500ms ease-in-out' }}>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full transition-all duration-500"
                      style={{
                        filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0) invert(1)',
                        transition: 'filter 500ms ease-in-out'
                      }}
                    />
                  </div>

                  {/* Description - Only visible when active */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isActive ? 'opacity-100' : 'hidden opacity-0'
                  }`}>
                    <p className="text-xs leading-relaxed text-black text-justify" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", fontWeight: 500 }}>
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
