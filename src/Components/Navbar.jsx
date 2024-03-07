import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppCart from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px"})};
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px"})};
`

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`

const Input = styled.input`
border: none;
${mobile({ width: "50px"})};

`

const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px"})};

`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  &:hover{
  transform: translateY(-1px);
};
${mobile({ display: "none"})};
`
const Center = styled.div`
flex:1;
text-align: center;
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ justifyContent: "center" , flex: "1.7"})};
`

const MenuItem = styled.div` 
font-size: 14px;
cursor: pointer;
margin-left: 10px;
&:hover{
  transform: translateY(-1px);
};
${mobile({ fontSize: "12px" , marginLeft: "10px"})};
`


const Navbar = () => {

  const cartQuantity = useSelector(state => state.cart.cartQuantity)
  
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder='Search...'/>
              <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
          </Left>
          <Center><Logo>JMK.Wear</Logo></Center>
          <Right>
            <Link to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={cartQuantity} color="primary">
                  <ShoppCart/>
              </Badge>
              </MenuItem>
              </Link>
          </Right>
        </Wrapper>
      </Container>
      
    </div>
  )
}

export default Navbar
