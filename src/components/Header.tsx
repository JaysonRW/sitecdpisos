import React, { useState, useEffect } from 'react';
import { Search, Instagram, Facebook } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              CD Pisos & Distribuição
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#catalog" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Catálogo
            </a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Por que nos escolher
            </a>
            <a href="#calculator" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Calculadora
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Contato
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center">
                <a 
                  href="https://wa.me/5541996190069" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-green-500 hover:text-green-600 transition-colors"
                >
                  <svg className="mr-1" width="18" height="18" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.29C13.09 27.14 14.52 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.34 0-2.66-.26-3.89-.77l-.28-.12-4.27 1.36 1.4-4.16-.18-.29C6.7 18.01 6 16.54 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                  </svg>
                  <span className="text-sm">(41)99619-0069</span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <a 
                  href="https://instagram.com/cd_pisos/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-500 hover:text-purple-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/cdpisosedistribuicao" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-500 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar pisos..." 
                className="py-2 pl-9 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-32 md:w-48 text-sm"
              />
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;