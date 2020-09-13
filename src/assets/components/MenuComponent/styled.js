import styled from 'styled-components'

export const Texto = styled.a`
  font-family: Plain, sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 5.71;
  letter-spacing: normal;
  text-transform: capitalize;
  margin-right: 32px;
  text-decoration: underline;
  color: var(--color-black-dark);
`

export const Li = styled.li`
  float: left;
  text-align: center;
  padding: 15px 20px;
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

`

export const Img = styled.img`
  height: 50px;
  margin-left: 0.5rem;
  font-size: 1.6rem;
  padding: 10px 20px;
`

export const Base = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14rem;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  background-color: white;
`