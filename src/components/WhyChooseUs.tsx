import React from 'react';
import { CheckCircle, MapPin, Clock, BadgePercent } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <CheckCircle size={24} className="text-red-500" />,
      title: 'Produtos de Qualidade',
      description: 'Trabalhamos apenas com as melhores marcas e produtos do mercado'
    },
    {
      icon: <MapPin size={24} className="text-blue-400" />,
      title: 'Loja Física',
      description: 'Venha conhecer nosso showroom e ver os produtos pessoalmente'
    },
    {
      icon: <Clock size={24} className="text-purple-500" />,
      title: 'Atendimento Rápido',
      description: 'Nossa equipe está sempre pronta para atender suas necessidades'
    },
    {
      icon: <BadgePercent size={24} className="text-red-500" />,
      title: 'Melhores Preços',
      description: 'Preços competitivos e condições especiais de pagamento'
    }
  ];

  return (
    <section className="py-16" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Por que escolher a CD Pisos & Distribuição?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos especialistas em pisos e revestimentos, oferecendo soluções completas para sua obra na CD Pisos & Distribuição.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;