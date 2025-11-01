import React, { useState } from 'react';
import loudspeaker from '../assets/images/loudspeaker.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contato" className="relative py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
          <span className="text-seti-orange">FALE CONOSCO</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
          {/* Loudspeaker illustration */}
          <div className="hidden md:flex justify-center order-2 md:order-1">
            <div className="relative">
              <img
                src={loudspeaker}
                alt="Loudspeaker"
                className="w-100 h-150 md:w-120 md:h-110 object-contain"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-seti-orange/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white text-black px-4 py-2.5 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-seti-orange text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white text-black px-4 py-2.5 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-seti-orange text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Assunto"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white text-black px-4 py-2.5 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-seti-orange text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-white text-black px-4 py-2.5 md:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-seti-orange resize-none text-sm md:text-base"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-seti-orange hover:bg-orange-600 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold transition-all duration-300 text-sm md:text-base"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
