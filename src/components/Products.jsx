import React, { useEffect, useState } from 'react'
import { popularProducts } from '../data'
import styled from 'styled-components'
import Product from './Product';
import { getProducts } from '../helpers/backend_helper';
import { getAsync } from '../helpers/api_helper';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    padding:20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

//#Conditional Rendering

/*
  Returns list of products based on the category
  @param {Object Array} filteredProducts: The filteredProducts if there is a category.
  @param {Object Array} products: first 8 elements of the products if there are no categories.   
*/
function DisplayProducts({ filteredProducts, products, category}) {
  if (category && Object.keys(category).length !== 0) {
    return (
      filteredProducts && filteredProducts.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))
    )
  } else {
    return (
      products.slice(0, 8).map((product) => (
        <Product product={product} key={product.id}></Product>
      ))
    )
  }
}


//INFO:
const Products = ({cat, filters,sort}) => {
  //INFO: get filterin products from ProductLists.

  //#useStates
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //#useEffects
  useEffect(()=> {
    //TODO: Do not use axios in this way, try to find a way to make it more abstract.
    const getProductsResponse = async ()=>{
      const result = await getProducts({
        category:cat
      });
      setProducts(result);
    } 
    getProductsResponse();
  }, [cat])


  //TIP: Whenever the filters change, refilter the products!
  useEffect(()=>{
    cat && setFilteredProducts( //INFO: Object entries returns key value pairs, {a:42, b:26},  [key,value] of Object.entries({a:42,b:26}) = (a, 42), (b,26)
      products.filter(item => Object.entries(filters).every(([key,value])=>  // filters: {color:blue} , {size:xs}
        item[key].includes(value)
      )
      )
    );
  }, [cat,filters,products])

  //TIP: Whenever sorting changes, resort the products!
  useEffect(()=> {
    if(sort ==="newest") { 
      setFilteredProducts((previous) => [...previous].sort((a,b) => a.createdAt - b.createdAt)); 
    } else if (sort ==="asc") {
      setFilteredProducts((previous)=> [...previous].sort((a,b) => a.price - b.price)); //TIP: if the second price> first price, it ascends
    } else {
      setFilteredProducts((previous)=> [...previous].sort((a,b) => b.price - a.price)); //TIP: if the first price> second price, it descend
    }
  }, [sort])
  
  useEffect(()=> {
    console.log("filteredProducts:",filteredProducts);
    console.log("filters:", filters);
  }, [filteredProducts, filters])

  return (
    <Container >
            <DisplayProducts  filteredProducts={filteredProducts} products ={products} category = {cat} />
    </Container>
  )
}

export default Products