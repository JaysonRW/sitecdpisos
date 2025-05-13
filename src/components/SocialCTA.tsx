import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const SocialCTA: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-red-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Acompanhe nossas redes sociais</h2>
        <p className="max-w-2xl mx-auto mb-8 text-purple-100">
          Fique por dentro das nossas novidades, promoções e dicas para sua obra
        </p>
        
        <div className="flex justify-center space-x-8">
          <a 
            href="https://www.instagram.com/cd_pisos/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="bg-white text-purple-600 p-4 rounded-full mb-3">
              <Instagram size={32} />
            </div>
            <span className="font-medium">Instagram</span>
          </a>
          
          <a 
            href="https://www.facebook.com/cdpisosedistribuicao" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="bg-white text-blue-600 p-4 rounded-full mb-3">
              <Facebook size={32} />
            </div>
            <span className="font-medium">Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialCTA;