import React from 'react'
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';

//take 100 percent of the height and the width of the page.
const Container = styled.div` 
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #423f70;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin; auto;
    cursor: pointer;
    opacity:0.5;
`

//take only 100 percent of the height because we have Arrow components too.If we take 100% of the width they will be included too.
const Wrapper = styled.div`
    height: 100%; 
    display: flex;
`;


const Slide = styled.div`
    display: flex;
    justify-content:center; 
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const ImgContainer = styled.div`
    flex:1;
    height: 100vh;
    width: 100vw;
`;

const Image = styled.img`
    width: 100%;
    height: 90%;
`;


const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`

const Button  = styled.button`
    padding:10px;
    font-size:20px;
    border-radius:5px;
    border: 1px solid #f4445d;
    background-color:#e0899d;
    cursor: pointer;
    color:#423f70;
`

// const Info = styled.
function Slider() {
  return (
    <Container>
        <Arrow direction = "left">
            <ArrowLeftOutlined ></ArrowLeftOutlined>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src ="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Logo-Background-PNG-Image.png"></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>AUTMNN FALL</Title>
                    <Desc>BUY IN THE AUTMNN AND SAVE MONEY!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide>
                <ImgContainer>
                    <Image src ="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Logo-Background-PNG-Image.png"></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>AUTMNN FALL</Title>
                    <Desc>BUY IN THE AUTMNN AND SAVE MONEY!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide>
                <ImgContainer>
                    <Image src ="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Logo-Background-PNG-Image.png"></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>AUTMNN FALL</Title>
                    <Desc>BUY IN THE AUTMNN AND SAVE MONEY!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction ="right">
            <ArrowRightOutlined ></ArrowRightOutlined> 
        </Arrow>
    </Container>
  )
}

export default Slider