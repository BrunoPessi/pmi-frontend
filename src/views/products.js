import React from 'react'
import styled from 'styled-components'

//components
import ProductsList from '../assets/components/ListsComponents/ProductsList.js'
import Menu from '../assets/components/MenuComponent/index.js'


const Title = styled.p`
  font-size: 23rem;
  color: --color-footer-gray;
  margin-bottom: 15px;
`

const Container = styled.div`
    width: 1600px; 
    background: var(--color-gray-light);
    margin: auto; 
    
    ${Title}{
        margin-left: 100px;
    }
`

function Products(props) {

    return (
        <>
        <Container>
            <Menu/>
        </Container>
        <Container>
            <Title>Produtos</Title>
            <ProductsList/>   
        </Container>
                    
        </>
    )
}


export default Products;