import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})};
`

const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction:column;
    padding:10px;
`




const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialMediacontainer = styled.div`
display:flex;
padding:0;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%50%;
    color: white;
    background-color: #${props => props.color};
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`





const Center = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({ display: "none"})};
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const  ListItems = styled.li`
    width: 50%;
    margin-bottom:10px;
`

const Payment = styled.img`
width:50%;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`


const Right = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({ backgroundColor: "#eee"})};
`
const Footer = () => {
  return (
    <Container>
      <Left>
              <Logo>LAMA</Logo>
              <Desc>
                  there are many variations of passages of Lorem Ipsum available,
                  but the majority have suffred alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
              </Desc>
         
          <SocialMediacontainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
              </SocialIcon>
            <SocialIcon color="55ACEE">
                <Pinterest/>
              </SocialIcon>
            <SocialIcon color="E60023">
                <Twitter/>
            </SocialIcon>
          </SocialMediacontainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
              <List>
              <ListItems>Home</ListItems>
              <ListItems>Cart</ListItems>
              <ListItems>Man Fashion</ListItems>
              <ListItems>Women Fashion</ListItems>
                  <ListItems>Accessories</ListItems>
                  <ListItems>My Account</ListItems>
              <ListItems>Order Tracking</ListItems>
              <ListItems>Wishlist</ListItems>
              <ListItems>Terms</ListItems>
            </List>
      </Center>
      <Right>
              <Title>Contact</Title>
              <ContactItem><Room style={{marginRight:"10px"}} /> 622 Dixie Path , South Tobinchester 98336</ContactItem>
              <ContactItem><Phone style={{marginRight:"10px"}}/>+1 234 56 78</ContactItem>
              <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@JMK.DIY.tn</ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
    </Right>
    </Container>
  )
}

export default Footer
