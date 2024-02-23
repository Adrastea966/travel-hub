import React from 'react';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import OffersAndBlog from './Components/OffersAndBlog.js';
import TravelSafe from './Components/TravelSafe.js';
import Reviews from './Components/Reviews.js';
import News from './Components/Newsletter.js';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;