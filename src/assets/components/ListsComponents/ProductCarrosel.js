import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css';

import api from '../../../services/backend-api.js'
import Product from '../ProductComponent/index.js'


const Title = styled.p`
  font-size: 18rem;
  color: --color-footer-gray;
  margin-bottom: 15px;
  border-bottom: 2px solid var(--color-footer-gray);
`


const Base = styled.div`
  width: 1400px; 
  background: var(--color-gray-light);
  margin: auto;
  margin-bottom: 15px;
`

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 600 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProductHome(props) {

  const [products, setProducts] = useState([])

  async function loadProducts() {
    const response = await api.get('categories/' + props.category,)

    var list = response.data;
    console.log('92', list);
    setProducts(list);
  }

  useEffect(() => {
    loadProducts();
  }, []);


  return (
      <Base>
            <Title>Categoria 2</Title>
            <Carousel responsive={responsive}>
            {products.map(product => (
                <Product
                    key={product.id}
                    name={product.name}
                    imgUrl={product.imgUrl} />
            ))}
            </Carousel>
    </Base >
    )
}

export default ProductHome;