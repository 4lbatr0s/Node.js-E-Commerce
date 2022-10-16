import React from 'react'
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import {mobile} from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding:20px;
  ${mobile({
    width:  '100%',
    padding:"10px",
    flexDirection:"column",
    justifyContent:"center"
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit:cover;
  ${mobile({
    height:"40vh",
    
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px; //vertical-horizontal
  ${mobile({
    padding:"10px",
  })}
  `;
const Title = styled.h1`
  font-weight:200;
`;
const Desc = styled.p`
  margin:20px 0px; //vertical-horizontal
`;
const Price = styled.span`
  font-weight:100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin:30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width:"100%"
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  padding:20px;
  font-size:20px;
  font-weight:200;
`;

const FilterColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props=> props.color};
  margin: 0px 5px;
  cursor:pointer;
`;

const FilterSize = styled.select`
  margin-left:10px;
  padding:10px;
`;

const FilterSizeOption = styled.option``;



const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: '100%',
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size:25px;
`;
const Amount = styled.span`
  width:30px;
  heigh:30px;
  border-radius:10px;
  border:1px solid rgb(70, 78, 144);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding:20px;
  border: 2px solid rgb(70, 78, 144);
  background-color:white;
  cursor:pointer;
  font-weight:500;
  transition: all 0.5s ease;


  &:hover{
    background-color:rgb(70, 78, 144);
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Annoucement></Annoucement>
      <Wrapper>
        <ImgContainer>
          <Image src = "https://ae01.alicdn.com/kf/H5ac7f2e8afbe46b19e05b6d8f10371a5V/2022-Mens-Faux-Leather-Jacket-Men-s-Black-Motorcycle-Jackets-High-Quality-Masculina-Outwear-Male-PU.jpg"></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>LEATHER JACKET</Title>
          <Desc>{`Vestibulum vitae viverra nisl. Suspendisse ut ornare eros. Vivamus lacinia mauris sed turpis mollis, vitae fringilla risus commodo. Proin interdum turpis purus, a dapibus ex malesuada a. Donec gravida nisl sit amet velit hendrerit mollis. Pellentesque ligula orci, ullamcorper a maximus eu, faucibus hendrerit libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque arcu nec mauris tristique semper. Nulla vitae velit in nunc egestas faucibus. Donec sit amet ex lectus. Donec vitae interdum sapien, et faucibus lectus. Nullam imperdiet, lacus et convallis dignissim, est ipsum luctus magna, in hendrerit ligula tortor quis tortor. Donec sagittis enim et accumsan ullamcorper. Vestibulum sit amet mauris sit amet lacus scelerisque ornare sed quis justo. Donec ac sollicitudin mauris. Praesent aliquet vestibulum ullamcorper.`}</Desc>
          <Price>$20</Price>
          <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black"></FilterColor>
            <FilterColor color="darkblue"></FilterColor>
            <FilterColor color="gray"></FilterColor>
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <Remove cursor="pointer"></Remove>
            <Amount>1</Amount>
            <Add cursor="pointer"></Add>
          </AmountContainer>
          <Button>ADD TO CART</Button>
        </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  )
}

export default Product