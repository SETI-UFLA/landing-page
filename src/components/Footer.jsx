import React from 'react';
import logo from '../assets/images/Logo.png';
import compJuniorLogo from '../assets/images/CompJUNIOR.png';
import emakersLogo from '../assets/images/Emakers Jr..png';
import catiLogo from '../assets/images/CATI.png';
import uflaLogo from '../assets/images/UFLA.png';
import dacLogo from '../assets/images/DAC.png';
import dccLogo from '../assets/images/DCC.png';

const Footer = () => {
  const organizations = [
    {
      name: 'CompJunior',
      logo: compJuniorLogo,
      linkedin: 'https://www.linkedin.com/company/compjunior',
      instagram: 'https://www.instagram.com/compjunior'
    },
    {
      name: 'Emakers Jr',
      logo: emakersLogo,
      linkedin: 'https://www.linkedin.com/company/emakersjr',
      instagram: 'https://www.instagram.com/emakersjr'
    },
    {
      name: 'CATI',
      logo: catiLogo,
      linkedin: 'https://www.linkedin.com/company/cati-ufla',
      instagram: 'https://www.instagram.com/cati.dcc'
    }
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">

        {/* Organizers Section - Horizontal Row */}
        <div className="py-12 border-b border-gray-800">
          <h3 className="text-lg font-bold text-white mb-8 text-center">REALIZAÇÃO</h3>
          <div className="flex flex-row justify-center items-start gap-8 md:gap-16">
            {organizations.map((org, index) => (
              <div key={index} className="flex flex-col items-center gap-3 md:gap-4">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert"
                />
                <div className="flex gap-2 md:gap-4">
                  <a
                    href={org.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-seti-orange transition-colors"
                    aria-label={`LinkedIn ${org.name}`}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={org.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-seti-orange transition-colors"
                    aria-label={`Instagram ${org.name}`}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support and Address Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Support Section - Left */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 text-center md:text-left">APOIO</h3>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
                <img
                  src={uflaLogo}
                  alt="UFLA - Universidade Federal de Lavras"
                  className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert"
                />
                <img
                  src={dacLogo}
                  alt="DAC - Departamento de Computação Aplicada"
                  className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert"
                />
                <img
                  src={dccLogo}
                  alt="DCC - Departamento de Ciência da Computação"
                  className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            </div>

            {/* Address Section - Right */}
            <div className="flex items-center justify-center md:justify-end h-[100%]">
              <p className="text-xs md:text-sm text-gray-400 text-center md:text-right max-w-md">
                Endereço da palestra presencial: Av. Central UFLA - Departamento de Ciência da Computação Centro, Lavras - MG, 37200-000
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={logo} alt="SE7I Logo" className="h-12 w-auto" />
          <p className="text-gray-400 text-xs">
            Feito com ❤️ por SE7I
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
