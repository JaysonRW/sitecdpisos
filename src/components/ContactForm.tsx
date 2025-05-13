import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real implementation, you would send this data to a backend
      // For now, we'll just open WhatsApp with the information
      const message = `Olá! Meu nome é ${name} e gostaria de receber mais informações sobre pisos e revestimentos da CD Pisos & Distribuição.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/5511987654321?text=${encodedMessage}`, '_blank');
      
      setSuccess(true);
      setLoading(false);
      
      // Reset form after success
      setTimeout(() => {
        setName('');
        setWhatsapp('');
        setSuccess(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-1 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Receba ofertas exclusivas
              </h2>
              <p className="text-gray-600 mb-6">
                Informe seu nome e WhatsApp para receber novidades, ofertas especiais e dicas para sua obra.
              </p>
              
              {success ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                  <p className="font-medium">Enviado com sucesso!</p>
                  <p className="text-sm">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nome completo
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">
                      WhatsApp
                    </label>
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Enviando...' : 'Receber ofertas'}
                  </button>
                </form>
              )}
            </div>
            
            <div className="md:w-1/3 bg-gradient-to-br from-blue-400 to-purple-600 text-white p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Fale conosco!</h3>
                <p className="mb-6">
                  Tire todas as suas dúvidas com nossa equipe especializada.
                </p>
                <a 
                  href="https://wa.me/5511987654321" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block bg-white text-purple-600 hover:bg-gray-100 font-medium py-2 px-5 rounded-lg transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;