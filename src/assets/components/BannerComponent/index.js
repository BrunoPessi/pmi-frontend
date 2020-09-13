import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import { Base, H3 } from './styled.js'


function Slider() {

    const itens = [{
        "id": 1,
        "src": "https://cms-cdn.goat.com/750/8d3ffb578618-565a-ae11-083f-038380f7.jpg",
        "title": "drop air jordan",
        "description": "confira o novo drop"
    },
    {
        "id": 2,
        "src": "https://cms-cdn.goat.com/750/8d3ffb578618-565a-ae11-083f-038380f7.jpg",
        "title": "drop air jordan 2",
        "description": "confira o novo drop 2"
    },
    {
        "id": 3,
        "src": "https://cms-cdn.goat.com/750/8d3ffb578618-565a-ae11-083f-038380f7.jpg",
        "title": "drop air jordan 3",
        "description": "confira o novo drop 3"
    }
    ];

    return (
        <Base>
            <Carousel>
                {itens.map(item => (
                    <Carousel.Item key={item.id}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={item.title}
                        />
                        <Carousel.Caption>
                            <H3>{item.title}</H3>
                            <p>{item.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Base>
    )
}

export default Slider;