import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

const Calculator: React.FC = () => {
  const [area, setArea] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  
  const calculateTiles = (event: React.FormEvent) => {
    event.preventDefault();
    
    const areaValue = parseFloat(area);
    
    if (isNaN(areaValue) || areaValue <= 0) {
      alert('Por favor, insira um valor válido para a área.');
      return;
    }
    
    // Calculate area + 10% extra
    const calculatedArea = areaValue * 1.1;
    setResult(calculatedArea);
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-blue-100" id="calculator">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-purple-600 text-white p-8 md:w-64 flex justify-center items-center">
              <div className="text-center">
                <CalcIcon size={64} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Calculadora</h3>
                <p className="text-purple-200">
                  Calcule a quantidade ideal de pisos para sua obra
                </p>
              </div>
            </div>
            
            <div className="p-8 md:flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Calculadora de Pisos
              </h2>
              <p className="text-gray-600 mb-6">
                Informe a metragem da sua obra e calcularemos a quantidade ideal de 
                pisos necessários, já incluindo 10% de margem para recortes e imprevistos.
              </p>
              
              <form onSubmit={calculateTiles} className="mb-6">
                <div className="mb-4">
                  <label htmlFor="area" className="block text-gray-700 font-medium mb-2">
                    Área total (em m²)
                  </label>
                  <input 
                    type="number" 
                    id="area" 
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Ex: 20"
                    min="0.1"
                    step="0.1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Calcular
                </button>
              </form>
              
              {result !== null && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Resultado:</h4>
                  <p className="text-gray-700">
                    Para uma área de <span className="font-semibold">{area} m²</span>, 
                    você precisará de <span className="font-bold text-purple-700">{result.toFixed(2)} m²</span> de pisos.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Este cálculo inclui 10% a mais para recortes e possíveis substituições.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;