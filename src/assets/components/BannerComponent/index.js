import React from 'react'

import { Base, Img, Texto } from './styled.js'


function Banner() {

    const itens = [{
        "id": 1,
        "src": "https://cms-cdn.goat.com/2200/8d3ffb578618-565a-ae11-083f-038380f7.jpg",
        "title": "drop air jordan",
        "description": "confira o novo drop"
    }
    ];

    return (
        <Base>
            <Img src="https://cms-cdn.goat.com/1600/8d3ffb578618-565a-ae11-083f-038380f7.jpg"></Img>
        </Base>
    )
}

export default Banner;