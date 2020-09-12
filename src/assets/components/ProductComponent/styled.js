import styled from 'styled-components'

export const NameProduct = styled.p`
    font-size: 15rem;
    color: var(--color-black-dark);
`

export const Image = styled.img`
    height: 180px;
`

export const ImgBox = styled.div`
    height: 180px;
`

export const BodyProduct = styled.div`
    ${NameProduct}:hover{
        color: var(--color-primary-medium);
    }
`

export const Base = styled.li`
    display: grid;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: var(--color-base);
    width: 350px;
    height: 250px;
    border: 1px solid var(--color-footer-gray);
`