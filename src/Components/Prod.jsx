import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import { Link } from 'react-router-dom';

const Info = styled.div`
    opacity:0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DAEAF1;
    position: relative;
    &:hover ${Info}{
        opacity:1;
    }
`
    
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
        transition: all 0.3s ease;
    }
`



const Prod = ({parametre}) => {
  return (
    <Container>
          <Circle />
          <Image src={parametre.img} />
          <Info>
              <Icon>
                  <ShoppingCartOutlined/>
              </Icon>
              <Icon>
                  <Link to={`/product/${parametre._id}`}>
                      <SearchOutlinedIcon />
                 </Link>
              </Icon>
                <Icon>
                  <FavoriteBorderOutlined/>
              </Icon>
          </Info>
    </Container>
  )
}

export default Prod
