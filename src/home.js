import React from 'react';

// Imports Imgs

import imgBanner from './imgs/imgBanner.png' 
// Styles
import './styles/home.css';
// Componentes
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import LoadProduct from './components/LoadProduct'

function App() {
  return (
    <main>
      <div className="App">
      <header className="App-header">
          <img src={imgBanner} className="homebanner-slide-home"/>
          <MenuBar/>
      </header>
      <body className="Home-main">
        <section className="new-product">
          <LoadProduct/>
        </section>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
    </main>
  );
}

export default App;
