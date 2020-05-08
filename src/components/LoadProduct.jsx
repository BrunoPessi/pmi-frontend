import React,{ useState, useEffect } from 'react';
import backendList from '../services/backend'
import ProductBox from './Product'


function LoadProduct() {

    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        async function loadProducts() {
            const response = await backendList.get('/produtos');

            setProducts(response.data);
        }

        loadProducts();
    }, []);


    return (
        <div id="product-list">
            <main>
                <ul>
                    {products.map(item =>{
                        <ProductBox key={item.id} item={item}/>
                    })}
                </ul>
            </main>
        </div>
    )

}


export default LoadProduct;