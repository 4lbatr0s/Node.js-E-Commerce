import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Annoucement from './Annoucement';
import Products from './Products';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin:20px;
`;

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
`;


const ProductList = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Annoucement></Annoucement>
        <Title>DRESSESS</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
            </Filter>
        </FilterContainer>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default ProductList