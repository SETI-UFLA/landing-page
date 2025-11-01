import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sydleLogo from '../assets/images/SYDLE.png';
import cloudwalkLogo from '../assets/images/CLOUDWALK.png';
import levtyLogo from '../assets/images/LEVTY.png';
import bitkaLogo from '../assets/images/BITKA.jpg';
import youxLogo from '../assets/images/YOUX.jpeg';
import nexosLogo from '../assets/images/NEXOS.jpeg';

const Sponsors = () => {
  const mainSponsors = [
    {
      name: 'Sydle',
      logo: sydleLogo,
    },
    {
      name: 'CloudWalk',
      logo: cloudwalkLogo,
    },
    {
      name: 'Levty',
      logo: levtyLogo,
    },
    {
      name: 'Bitka',
      logo: bitkaLogo,
    },
  ];

  const secondarySponsors = [
    {
      name: 'YouX',
      logo: youxLogo,
    },
    {
      name: 'Nexos',
      logo: nexosLogo,
    },
  ];

  return (
    <section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-seti-orange">PATROCÍNIOS</span>
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
            {mainSponsors.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white border-2 border-gray-300 rounded-2xl p-8 hover:border-seti-orange transition-all duration-300 mx-4 h-[280px] flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-w-[80%] max-h-[200px] object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {mainSponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="relative bg-white border-2 border-gray-300 rounded-2xl p-8 hover:border-seti-orange transition-all duration-300 h-[280px] flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="max-w-[80%] max-h-[200px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Sponsors Section */}
        <div className="mt-16">
          
          {/* Mobile - Secondary Sponsors */}
          <div className="flex flex-col gap-6 md:hidden">
            {secondarySponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="relative bg-white border-2 border-gray-300 rounded-2xl p-6 hover:border-seti-orange transition-all duration-300 h-[180px] flex items-center justify-center mx-4"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="max-w-[70%] max-h-[120px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop - Secondary Sponsors Grid */}
          <div className="hidden md:flex justify-center gap-8 max-w-4xl mx-auto">
            {secondarySponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="relative bg-white border-2 border-gray-300 rounded-2xl p-6 hover:border-seti-orange transition-all duration-300 w-[280px] h-[180px] flex items-center justify-center"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="max-w-[70%] max-h-[120px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative plus signs */}
        <div className="absolute left-10 top-1/2 text-seti-orange text-4xl opacity-30">+</div>
        <div className="absolute right-10 top-1/3 text-seti-orange text-4xl opacity-30">+</div>
      </div>
    </section>
  );
};

export default Sponsors;
