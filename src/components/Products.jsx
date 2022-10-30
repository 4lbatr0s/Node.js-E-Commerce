import React, { useEffect, useState } from 'react'
import { popularProducts } from '../data'
import styled from 'styled-components'
import Product from './Product';
import { getProducts } from '../helpers/backend_helper';

const Container = styled.div`
    display: flex;
    padding:20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

//INFO:asdasdasdasdasdasdasdasdas
const Products = ({cat, filters,sort}) => {
  //INFO: get filterin products from ProductLists.

  //#useStates
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //#useEffects
  useEffect(()=> {
    const response = getProducts({
      category:cat
    });
    console.log(response);
  }, [cat])

  console.log(cat,filters,sort);
  return (
    <Container >
        {
            popularProducts.map((product)=> (
                <Product product = {product} key ={product.id}></Product>
            ))
        }
    </Container>
  )
}

export default Products