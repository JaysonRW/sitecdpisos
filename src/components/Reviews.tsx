import React from 'react';
import { Star, User } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Carlos Silva',
    rating: 5,
    date: '12/03/2025',
    comment: 'Excelente atendimento e produtos de alta qualidade. A entrega foi rápida e o preço foi ótimo.'
  },
  {
    id: 2,
    name: 'Ana Paula',
    rating: 5,
    date: '05/02/2025',
    comment: 'Comprei porcelanatos para minha casa toda. O atendimento foi muito profissional e me ajudaram a escolher os melhores produtos.'
  },
  {
    id: 3,
    name: 'Roberto Almeida',
    rating: 4,
    date: '22/01/2025',
    comment: 'Bom preço e variedade. A calculadora do site ajudou bastante a determinar a quantidade correta de pisos.'
  },
  {
    id: 4,
    name: 'Mariana Costa',
    rating: 5,
    date: '15/12/2024',
    comment: 'Produtos de excelente qualidade e preço justo. A equipe é muito prestativa e a entrega foi pontual.'
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa prioridade. Confira alguns depoimentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map(review => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="mr-3 bg-purple-100 p-2 rounded-full">
                  <User size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill={index < review.rating ? '#f59e0b' : 'none'}
                    stroke={index < review.rating ? '#f59e0b' : '#d1d5db'}
                    className="mr-1"
                  />
                ))}
              </div>
              
              <p className="text-gray-600">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;