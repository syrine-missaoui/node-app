import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Prod from './Prod'
import axios from "axios"




const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap:wrap;
justify-content: space-between;
`




const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]) 
  const [filteredProducts, setFilteredProducts] = useState([]) 
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( cat ? `http://localhost:5000/api/products/get?category=${cat}`: "http://localhost:5000/api/products/get")
        setProducts(res.data)
      }
      catch (err) {
        
      }
    } 
    getProducts();
  }, [cat])
  
  useEffect(() => {
    cat && setFilteredProducts(products.filter((item) =>
      Object.entries(filters).every(([key,value])=> item[key].includes(value))
    ))
    
  }, [products, cat, filters])
  
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(prev=> [...prev].sort((a,b)=>a.createdAt - b.createdAt))
    }
       if (sort === "asc") {
      setFilteredProducts(prev=> [...prev].sort((a,b)=>a.price - b.price))
    }
           if (sort === "desc") {
      setFilteredProducts(prev=> [...prev].sort((a,b)=>b.price - a.price))
    }
  },[sort])

  return (
    <Container>
          {cat ? filteredProducts.map(item => <Prod parametre={item} key={item.id} />) : products.slice(0,8).map(item => <Prod parametre={item} key={item.id} />)}
    </Container>
  )
}

export default Products
