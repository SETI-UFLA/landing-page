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

const Speakers = () => {
  const speakers = [
    {
      name: 'Arthur Viana',
      title: 'Palestrante',
      description: 'Profissional experiente na área de tecnologia, compartilhando conhecimentos e experiências sobre as tendências do mercado e desenvolvimento profissional.',
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
      description: 'Profissional renomado no setor de TI, compartilhando sua expertise e visão sobre as transformações digitais e oportunidades de carreira.',
      image: nelsonImg
    },
    {
      name: 'Rafael Almeida',
      title: 'Palestrante',
      description: 'Especialista em tecnologia e inovação, com ampla experiência em desenvolvimento de soluções e liderança de equipes.',
      image: rafaelAlmeidaImg
    },
    {
      name: 'Tsunoda',
      title: 'Palestrante',
      description: 'Referência na área de tecnologia, trazendo conhecimentos práticos e estratégicos sobre o mercado de TI e desenvolvimento profissional.',
      image: tsunodaImg
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-12"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:scale-105 transition-transform duration-300 h-[580px] flex flex-col">
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
      </div>
    </section>
  );
};

export default Speakers;
