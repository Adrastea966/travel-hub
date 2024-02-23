import React from 'react';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import OffersAndBlog from './Components/OffersAndBlog.js';
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
    </div>
  );
}

export default App;