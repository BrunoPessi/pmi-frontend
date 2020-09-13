import React from 'react'
import styled from 'styled-components'


//components
import Menu from '../assets/components/MenuComponent/index.js'
import Slider from '../assets/components/BannerComponent/index.js'

const Main = styled.main`
    margin: auto;
    background: var(--color-base);
    `

const Container = styled.div`
    width: 1600px; 
    background: var(--color-gray-light);
    margin: auto; 
`

function App() {
  return (
    <Main>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Slider />
      </Container>
    </Main>
  );
}

export default App;
