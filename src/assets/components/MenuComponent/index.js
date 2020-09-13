import React from 'react'

//styleds
import { Base, Img, Ul, Li } from './styled.js'
import { MenuItems } from './MenuItems.js'
import logo1 from '../../img/logo/logo2.png'

function Menu() {
    
    return (
        <>
            <Base>
                <nav>
                    <Ul>
                        {MenuItems.map((item, index) => {
                            return (
                                <Li>
                                    <Img src={logo1}></Img>
                                    <a className={item.cName} href={item.url}>{item.title}</a>
                                </Li>
                            )
                        }
                        )}
                    </Ul>
                </nav>
            </Base>
        </>
    )
}

export default Menu;