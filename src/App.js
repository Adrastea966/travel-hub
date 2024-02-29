import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import OffersAndBlog from './Components/OffersAndBlog.js';
import TravelSafe from './Components/TravelSafe.js';
import Reviews from './Components/Reviews.js';
import News from './Components/Newsletter.js';
import Footer from './Components/Footer.js';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 500,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className='App'>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Offers and blog */}
      <OffersAndBlog />
      {/* Travel Safe */}
      <TravelSafe />
      {/* Reviews */}
      <Reviews />
      {/* Newsletter */}
      <News />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;