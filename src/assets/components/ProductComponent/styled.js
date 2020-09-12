import styled from 'styled-components'

export const NameProduct = styled.p`
    font-size: 18rem;
    color: var(--color-black-dark);
`

export const BodyProduct = styled.div`
    ${NameProduct}:hover{
        color: var(--color-primary-medium);
    }
`


export const Base = styled.div`
    background: var(--color-base);
    height: 170px;
    width: 120px;
`