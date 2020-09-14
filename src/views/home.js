import React from 'react'
import styled from 'styled-components'


//components
import Menu from '../assets/components/MenuComponent/index.js'
import Banner from '../assets/components/BannerComponent/index.js'
import ProductHome from '../assets/components/ListsComponents/ProductCarrosel.js'
import ProductList from '../assets/components/ListsComponents/ProductsList.js'


const Container = styled.div`
    width: 1600px; 
    background: var(--color-gray-light);
    margin: auto; 
`

function App() {
  return (
    <>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Banner imagem="https://i.imgur.com/PbHMCEy.png" />
      </Container>
      <Container>
      <ProductHome titulo="Supreme" category="2"/>
      <Banner imagem="https://cms-cdn.goat.com/1600/8d3ffb578618-565a-ae11-083f-038380f7.jpg" texto="Air Jordan 5 Retro SE 'Oregon'"/>
      <ProductHome titulo="Tenis" category="4"/>
      </Container>
    </>
  );
}

export default App;
