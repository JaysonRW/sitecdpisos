import React from 'react';
import { Truck, CreditCard, ShieldCheck, Store } from 'lucide-react';

const features = [
  {
    icon: <Truck size={28} />,
    title: 'Entrega Rápida',
    description: 'Entregamos em toda a região'
  },
  {
    icon: <Store size={28} />,
    title: 'Compre e Retire',
    description: 'Retire na loja mais próxima'
  },
  {
    icon: <CreditCard size={28} />,
    title: 'Pagamento em PIX',
    description: 'Praticidade e descontos especiais'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Garantia',
    description: 'Produtos com garantia de fábrica'
  }
];

const QuickInfo: React.FC = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`p-3 rounded-full mr-4 ${
                index === 0 ? 'text-blue-400 bg-blue-100' : 
                index === 1 ? 'text-green-500 bg-green-100' :
                index === 2 ? 'text-purple-500 bg-purple-100' : 
                'text-red-500 bg-red-100'
              }`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo