import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'
import { mobile } from '../responsive'

///juste for test
const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({ padding: "0" , flexDirection: "column"})};
`

const Categories = () => {
  return (
    <Container>
          {categories.map(item => 
            <CategoryItem prop={item} key={item.id} />
      )}
    </Container>
  )
}

export default Categories
