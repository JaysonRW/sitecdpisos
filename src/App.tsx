import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import QuickInfo from './components/QuickInfo';
import WhyChooseUs from './components/WhyChooseUs';
import Catalog from './components/Catalog';
import Calculator from './components/Calculator';
import Reviews from './components/Reviews';
import SocialCTA from './components/SocialCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Banner />
        <QuickInfo />
        <WhyChooseUs />
        <Catalog />
        <Calculator />
        <Reviews />
        <SocialCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;