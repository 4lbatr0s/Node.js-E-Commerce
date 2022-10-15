import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';


const Container = styled.div``;

const Wrapper = styled.div`
    padding:20px;
`;

const Title = styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top = styled.div`
    display:flex;
    padding:20px;
    align-items:center;
    justify-content:space-between;
`;

const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border: ${props=> props.type ==="filled" && "none"};
    background-color: ${props=> props.type ==="filled" ? "black" :"transparent"};
    color: ${props=> props.type ==="filled" && "white"};
`;

const Bottom = styled.div`
    display:flex;
    justify-content:space-between; 
`;


const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin:10px;
`;

const Info = styled.div`
    flex:3;
`;
const Summary = styled.div`
    flex:1;
`;

const Product  = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex:2;
    display;flex;
`;
const Image = styled.img`
    width:200px;
 `;
const Details = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex:1;

`;



const Cart = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                    <TopText></TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src= "https://i.pinimg.com/736x/a9/35/20/a9352080b2127da1678cad38303a235e--office-lost.jpg"></Image>
                            <Details>
                                <ProductName><b>PRODUCT:</b> {`123123123123`}</ProductName>
                                <ProductId><b>ID:</b> {`123123123123`}</ProductId>
                                <ProductColor/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            price
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>Summary</Summary>
            </Bottom>
        </Wrapper>
        <Annoucement></Annoucement>
        <Footer></Footer>
    </Container>
  )
}

export default Cart