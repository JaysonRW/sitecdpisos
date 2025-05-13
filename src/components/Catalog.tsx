import React, { useState } from 'react';
import { productsData } from '../data/products';
import { MessageSquare } from 'lucide-react';

const getOfertas = () => {
  // Seleciona os 3 produtos de menor preço como exemplo de oferta
  return [...productsData].sort((a, b) => a.price - b.price).slice(0, 3);
};

const Catalog: React.FC = () => {
  const [category, setCategory] = useState('todos');
  
  const filteredProducts = category === 'todos' 
    ? productsData 
    : productsData.filter(product => product.category === category);

  const handleQuoteRequest = (productName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511987654321?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Seção de Ofertas */}
      <section className="py-16 bg-yellow-50" id="ofertas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-700">Nossas ofertas da semana!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Aproveite os melhores preços em pisos e revestimentos selecionados!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getOfertas().map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border-2 border-yellow-300">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-yellow-700">{product.name}</h3>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                      Oferta
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-yellow-800">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                      <span className="text-sm font-normal text-gray-600">/m²</span>
                    </span>
                    <button 
                      onClick={() => handleQuoteRequest(product.name)}
                      className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded transition-colors"
                    >
                      <MessageSquare size={18} />
                      <span>Orçamento</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo principal */}
      <section className="py-16 bg-gray-50" id="catalog">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nosso Catálogo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Explore nossa variedade de pisos e revestimentos para transformar sua casa.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button 
                onClick={() => setCategory('todos')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'todos' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Todos
              </button>
              <button 
                onClick={() => setCategory('porcelanato')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'porcelanato' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Porcelanatos
              </button>
              <button 
                onClick={() => setCategory('ceramica')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'ceramica' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Cerâmicas
              </button>
              <button 
                onClick={() => setCategory('revestimento')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'revestimento' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Revestimentos
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                      {product.category === 'porcelanato' ? 'Porcelanato' : 
                       product.category === 'ceramica' ? 'Cerâmica' : 'Revestimento'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                      <span className="text-sm font-normal text-gray-600">/m²</span>
                    </span>
                    <button 
                      onClick={() => handleQuoteRequest(product.name)}
                      className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded transition-colors"
                    >
                      <MessageSquare size={18} />
                      <span>Orçamento</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;