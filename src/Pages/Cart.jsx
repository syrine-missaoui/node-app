import { Add, Remove } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { mobile } from '../responsive'
import StripeCheckout from "react-stripe-checkout"
import { useState } from 'react'
import { userRequest } from '../requestMethodes'
import { useNavigate } from "react-router-dom";


const KEY = "pk_test_51LNflFJ7qkYIr8KiERVWLHEJVPXmjoDXJorSO8VBP9wA8Y9wITjdaAieXFTuuuIt53KtsahhW9eB0d5DH1CfjAza00mPMQCPln"


const Container = styled.div` 

`
const Title = styled.h1` 
    font-weight: 300;
    text-align: center;
`
const Wrapper = styled.div` 
    padding: 20px;
`
const Top = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({padding: "40px 10px 40px 10px"})}
  
`

const TopButton = styled.button` 
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div` 
${mobile({display: "none"})}
`

const TopText = styled.span` 
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
   
`

const Bottom = styled.div` 
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
 
`

const Info = styled.div` 
    flex:3;
    
`



const Product = styled.div` 

justify-content: space-between;
display: flex;
${mobile({flexDirection: "column"})}

`

const ProductDetail = styled.div` 
flex:2;
display: flex;

    
`

const Image = styled.img` 
width:200px;
`

const Detail = styled.div` 
padding: 20px;
display: flex;
flex-direction:column;
justify-content: space-around;

`

const ProductName = styled.span` 

`

const ProductId = styled.span` 

`

const ProductColor = styled.div` 
    width: 20px;
    height: 20px;
    border-radius:50%50%;
    background-color: ${props=>props.color};
`

const ProductSize = styled.span` 

`

const PriceDetail = styled.div` 
    flex:1;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    ${mobile({flexDirection: "row" , justifyContent: "space-between" , padding:"10px"})}
`  

const ProductAmountContainer = styled.div` 
    display:flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({margin: "0"})}
`
const ProductAmount = styled.div`
    font-size: 24px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
`

const Hr = styled.hr` 
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div` 
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1` 
    font-weight: 200;

`

const SummaryItem = styled.div` 
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "600"};
    font-size: ${props=> props.type === "total" && "25px"};
`

const SummaryItemText = styled.span` 

`

const SummaryItemPrice = styled.span` 

`

const Button = styled.button` 
    width: 100%;
    padding:10px;
    background-color: black;
    color:white;
    font-weight: 550;
    border:none;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
        transition: all 0.3s ease;
    }
`
const Cart = () => {
    
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripetoken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripetoken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
        try {
            const res = await userRequest.post("/checkout/payment", {
                tokenId: stripeToken.id,
                amount: cart.total * 100
            })
            navigate("/success", { state: { data: res.data } })
        }
        catch (err) {
            
        }
        }
        stripeToken && makeRequest()
    },[stripeToken, cart.total, navigate])
  return (
    <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <Title>YOUR BAG</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                      <TopText>Shopping Bag (2)</TopText>
                      <TopText>Your Wishlist (0)</TopText>
                  </TopTexts>
                  <TopButton type='filled'>CHECKOUT NOW !</TopButton>
              </Top>
              <Bottom>
                  <Info>
                      {cart.products.map(prod => (
                        <Product>
                        <ProductDetail>
                                  <Image src={ prod.img } />
                              <Detail>
                              <ProductName><b>Product:</b> {prod.title} </ProductName>
                              <ProductId><b>REF: </b> {prod._id} </ProductId>
                                      <ProductColor color={ prod.color} />
                              <ProductSize><b>size :</b> {prod.size} </ProductSize>
                          </Detail>
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmountContainer>
                                  <Remove style={{cursor:'pointer'}}></Remove>
                                      <ProductAmount>{ prod.quantity}</ProductAmount>
                                  <Add style={{cursor:'pointer'}}></Add>
                              </ProductAmountContainer>
                                  <ProductPrice>$ { prod.price * prod.quantity}</ProductPrice>
                          </PriceDetail>
                      </Product>))}

                      <Hr />
                  </Info>


                  <Summary>
                      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                      <SummaryItem>
                          <SummaryItemText>Subtotal</SummaryItemText>
                          <SummaryItemPrice>$ { cart.total }</SummaryItemPrice>
                      </SummaryItem>


                      <SummaryItem>
                          <SummaryItemText>Estimated shippping</SummaryItemText>
                          <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                      </SummaryItem>


                      <SummaryItem>
                          <SummaryItemText>Shipping discount</SummaryItemText>
                          <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                      </SummaryItem>


                      <SummaryItem  type="total">
                          <SummaryItemText>Total</SummaryItemText>
                          <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                      </SummaryItem>
                      <StripeCheckout
                          name="JMK.Wear"
                          image="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/300794579_441408094689124_7516283062529429035_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mf_3NJaHJewAX9bPX5s&_nc_ht=scontent.ftun9-1.fna&oh=00_AT8lP6qe9cuj5V_uLCdybQAM3ve8q85bNB8StrXC4R2cPw&oe=631C592F"
                          shippingAddress
                          billingAddress
                          description={`Your total is $${cart.total}`}
                          amount={cart.total * 100}
                          token={onToken}
                          stripeKey={KEY}
                      >
                       <Button>Checkout NOW</Button>   
                      </StripeCheckout>
                  </Summary>
              </Bottom>
          </Wrapper>
          <Footer/>
    </Container>
  )
}

export default Cart                      

