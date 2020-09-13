import React from 'react'

//styleds
import { Base, Img, Ul, Li, Texto } from './styled.js'
import { MenuItems } from './MenuItems.js'
import logo1 from '../../img/logo/logo2.png'

function Menu() {

    return (
        <>
            <Base>
                <div>
                    <Img src={logo1}></Img>
                </div>
                <div>
                    <nav>
                        <Ul>
                            {MenuItems.map((item) => {
                                return (
                                    <Li key={item.id}>
                                        <Texto href={item.url}>{item.title}</Texto>
                                    </Li>
                                )
                            }
                            )}
                        </Ul>
                    </nav>
                </div>
            </Base>
        </>
    )
}

export default Menu;