import React from 'react'

import { Base, Img, H2 } from './styled.js'


function Banner(props) {

    return (
        <Base>
            <Img src={props.imagem}></Img>
            <H2>{props.texto}</H2>
        </Base>
    )
}

export default Banner;