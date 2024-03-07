
import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import { mobile } from '../responsive'
import { publicRequest } from '../requestMethodes'
import { addProduct } from '../redux/cartRedux'
import {useDispatch} from "react-redux"


const Container = styled.div` 

`

const Wrapper = styled.div` 
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: "column" , padding: "20px"})}

`

const ImageContainer = styled.div` 
    flex:1;

`

const Image = styled.img` 
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "30vh"})}
`

const InfoContainer = styled.div` 
flex: 1;
padding: 0px 50px;
${mobile({padding: "0"})}
`

const Title = styled.h1` 
font-weight: 200;

`

const Desc = styled.p` 
    margin: 20px 0px;

`

const Price = styled.span` 
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({width: "100%"})}
    
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    ${mobile({paddingBottom: "15px"})}

`


const FilterTitle = styled.span` 
    font-size: 20px;
    font-weight: 200;
`


const FilterColor = styled.div` 
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:0.05cm solid black ;
    background-color: ${props => props.color};
    margin :0px 5px;
    cursor: pointer;
    
`


const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
`


const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 700;
    

    &:hover{
        background-color: #FCF8E8;
        transform: translateY(2px);
        transition: all 0.3s ease;
    }
`





const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data)
            }
            catch (err) {
                
            }
        }
        getProduct()
        
    }, [id])

    
    const minusQuantity = () => {
        quantity > 1 ? setQuantity(quantity-1) : setQuantity(1)
    }
        const plusQuantity = () => {
        quantity >= 1 ? setQuantity(quantity+1) : setQuantity(1)
    }

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }))
    }
  return (
    <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <ImageContainer>
                  <Image src={ product.img } />
              </ImageContainer>
              <InfoContainer>
                  <Title>{ product.title }</Title>
                  <Desc>
                     {product.description}
                  </Desc>
                  <Price>$ {product.price}</Price>
                  <FilterContainer>
                     <Filter>
                          <FilterTitle>Color</FilterTitle>
                          {product.color?.map(cc => (
                              <FilterColor color={cc} key={cc} onClick={ ()=>setColor(cc) } />
                          ))}

                      </Filter>
                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize onChange={(e) => setSize(e.target.value)}>
                              {product.size?.map(s => (
                                  <FilterSizeOption  key={s}>{s}</FilterSizeOption> 
                              ))}
                              
                          </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Remove onClick={minusQuantity} style={ {cursor: "pointer"} } />
                          <Amount>{quantity}</Amount>
                          <Add onClick={plusQuantity} style={{ cursor: "pointer"} } />
                      </AmountContainer>
                      <Button onClick={handleClick}>ADD TO CART</Button>
                  </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer/>
    </Container>
  )
}

export default Product
