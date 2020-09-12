import React from 'react'   


//styleds
import {Base, NameProduct,BodyProduct, ImgBox, Image} from './styled.js'

function Product(props){
    return(
        <Base>
        <ImgBox>
            <Image src={props.imgUrl}/>
        </ImgBox>
        <BodyProduct>
        <NameProduct>{props.name}</NameProduct>
        </BodyProduct>
        </Base>
    );
}


export default Product; 