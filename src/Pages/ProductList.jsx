
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import { mobile } from '../responsive'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    ${mobile({ display: "grid"})};
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px"})};
`
const FilterText = styled.span` 
    font-size:20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select` 
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option` 

`
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("Newest")
    
    const handleFilters = (e) => {
        const value = e.target.value
        setFilter({
            ...filter,
            [e.target.name]: value,
        })
    }
    const handleSort = (e) => {
        const value = e.target.value
        setSort(value)
    }
  return (
    <Container>
          <Navbar />
          <Announcement />
          <Title>{ cat }</Title>
          <FilterContainer>
              <Filter>
                  <FilterText>Filter Products:</FilterText>
                  <Select name="color" onChange={handleFilters}>
                      <Option disabled >Color</Option>
                      <Option>White</Option>
                      <Option>Black</Option>
                      <Option>Red</Option>
                      <Option>Blue</Option>
                      <Option>Yellow</Option>
                      <Option>Green</Option>
                      <Option>Grey</Option>
                      <Option>Beige</Option>
                      <Option>Orange</Option>
                  </Select>
                    <Select name="size" onChange={handleFilters}>
                      <Option disabled >Size</Option>
                      <Option>XS</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                      <Option>XXL</Option>
                  </Select>

              </Filter>

              <Filter>
                  <FilterText>Sort Products:</FilterText>
                    <Select onChange={handleSort}>
                      <Option value="newest">Newest</Option>
                      <Option value="asc">Price (asc)</Option>
                      <Option value="desc">Price (desc)</Option>
                  </Select>
              </Filter>
          </FilterContainer>
          <Products cat={cat} filters={filter} sort={sort} />
          <Newsletter />
          <Footer/>
    </Container>
  )
}

export default ProductList
