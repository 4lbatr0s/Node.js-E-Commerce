import React from 'react'
import styled from 'styled-components';
import {mobile}  from '../responsive';

const Container = styled.div`
    flex: 1;
    margin:3px;
    height: 70vh;
    position: relative;
`; 
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({
        height:"20vh"
    })}
`;

const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justfiy-content:center;
    flex-direction:column;
`;

const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    width:30%;
    height:10%;
    margin-top:20px;
    font-weight:600;
    &:hover{
        transform: scale(1.1);
    }
    transition: all 0.5s ease;
`;
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;


export const CategoryItem = (props) => {
    const {item} = props; 

  return (
    <Container>
        <Image src = {item.img}/>
            <Info>
                <Title>
                    SHOP NOW!
                </Title>
                <Button>
                    SHOP NOW!
                </Button>
            </Info>
    </Container>
  )
}
