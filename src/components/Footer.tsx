import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              CD Pisos & Distribuição
            </h3>
            <p className="text-gray-400 mb-4">
              Especialistas em pisos e revestimentos de alta qualidade para sua casa ou empreendimento.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/cdpisosedistribuicao" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/cd_pisos/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#catalog" className="text-gray-400 hover:text-white transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">
                  Por que nos escolher
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-white transition-colors">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Porcelanatos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cerâmicas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Revestimentos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Acessórios
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-400">
                  Rua das Carmelitas 4009 - Boqueirão
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-red-400 mr-2 flex-shrink-0" />
                <a href="tel:41996190069" className="text-gray-400 hover:text-white transition-colors">
                  (41)99619-0069
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-red-400 mr-2 flex-shrink-0" />
                <a href="mailto:contato@cdpisosdistribuicao.com.br" className="text-gray-400 hover:text-white transition-colors">
                  contato@cdpisosdistribuicao.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="text-red-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">
                  Seg - Sex: 8h às 18h<br />
                  Sábado: 8h às 12h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4">Formas de Pagamento</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Boleto_logo.svg" alt="Boleto" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Elo_card_logo.svg" alt="Elo" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Diners_Club_Logo3.svg" alt="Diners" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="American Express" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Pix_logo.svg" alt="PIX" className="h-8" />
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CD Pisos & Distribuição. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;