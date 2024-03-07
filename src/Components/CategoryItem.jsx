import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "20vh"})};
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Info = styled.div`
position: absolute;
top: 0;
left:0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({ prop }) => {
  return (
    <Container>
      <Link to={`/products/${prop.cat}`}>
          <Image src={ prop.img } />
          <Info>
              <Title>{prop.title}</Title>
              <Button>SHOP NOW !</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem
