import React from 'react';

// import { Container } from './styles';

function ProductBox({product}) {
  return (
    <li className="product-item">
        <header>
            <img src={product.imgUrl}/>
            <div className="product-info">
                <strong>{product.name}</strong>
                <span>{product.description}</span>
            </div>
        </header>
        <strong className="price">{product.price}</strong>
        <button className="product-page">Comprar</button>
    </li>
    );
}

export default ProductBox;