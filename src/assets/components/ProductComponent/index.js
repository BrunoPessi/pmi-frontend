import React from 'react'
import styled from 'styled-components'


//styleds
import {Base, NameProduct,BodyProduct} from './styled.js'

function Product(prosp){
    return(
        <Base>
            <NameProduct>Blusa</NameProduct>
            <BodyProduct>
                <NameProduct> Blusa 2</NameProduct>
            </BodyProduct>
        </Base>
    );
}


export default Product; 