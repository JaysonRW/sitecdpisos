import React, { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    title: "Promoção Especial",
    subtitle: "Porcelanatos com até 40% de desconto",
    description: "Válido para compras até 30/06. Aproveite já!",
    imageUrl: "https://img.playbook.com/2gWGq5PsT3kWE1ZyPieDg4tyDjJUrpZPe1ZbiAwEJuA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzIxNjgzNTBh/LTcwZjItNGNiOC1i/ZjA1LWI3MDdmNzcx/ZmQwNA",
    ctaText: "Ver ofertas"
  },
  {
    id: 2,
    title: "Lançamento",
    subtitle: "Nova coleção de cerâmicas e porcelanatos",
    description: "Descubra nossos novos produtos com design exclusivo",
    imageUrl: "https://img.playbook.com/QmQhiWntKClLo9CGygxDyNyG5bxFmtDOZceZCjgyvbw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzIzN2M5NTA1/LTZkNTItNDg0My04/ZjA4LWJiM2NmYTVl/YzZmZQ",
    ctaText: "Conhecer"
  },
  {
    id: 3,
    title: "Atendimento Especializado",
    subtitle: "Agende uma visita técnica gratuita",
    description: "Nossos especialistas vão até você sem compromisso",
    imageUrl: "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ctaText: "Agendar"
  }
];

const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const banner = banners[currentBanner];

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {banners.map((banner, index) => (
        <div 
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBanner ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center text-white">
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 bg-red-500 text-sm font-semibold rounded-full mb-3">
                {banner.title}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">{banner.subtitle}</h2>
              <p className="text-lg md:text-xl mb-6">{banner.description}</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
                {banner.ctaText}
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;