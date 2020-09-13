import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


//components
import Product from '../ProductComponent/index.js'


//APIs
import api from '../../../services/backend-api.js'

const ListProduct = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

`

const Container = styled.div`
    width: 1400px; 
    background: var(--color-gray-light);
    margin: auto; 
`


function ProductList(props) {


    const [products, setProducts] = useState([])

    async function loadProducts() {
        const response = await api.get('products')

        var list = response.data;
        console.log('92', list);
        setProducts(list);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Container>
           
        <ListProduct>
            {products.map(product => (
                <Product key={product.id} name={product.name} imgUrl={product.imgUrl} />

            ))}
        </ListProduct>
        </Container>
    );
}



export default ProductList;