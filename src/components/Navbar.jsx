import { useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Search} from '@mui/icons-material';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive"
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";

const Container = styled.div`
    height:60px;  

`
const Wrapper = styled.div` 
    padding:10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding:"10px 0px"
    })}
`

const  Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({
        display:"none"
    })}
`

const  Center = styled.div`
    flex:2;
    text-align:center;
`

const Logo = styled.h1`
    font-weight:bold;
    ${mobile({
       fontSize:"24px",
    })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
    border: none;
    ${mobile({
       width:"30px"
    })}
`

const Right = styled.div`
    flex:1;  
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
       justifyContent:"center",
       flex:3
    })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:10px;
    ${mobile({
       fontSize:"12px",
       marginLeft:"5px"
    })}
`

function Navbar() {
    //#hook declarations
    const dispatch = useDispatch();

    //#useSelectors
    const quantity = useSelector(state=>state.cart.quantity);
    //#useStates

    //#customFunctions
     

    //#useEffects

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="search"></Input>
                    <Search style ={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>VERITAS.</Logo>
            </Center>
            <Right>
            <Link to="/register">
                    <MenuItem>
                        REGISTER
                    </MenuItem>       
                </Link>

                <Link to="/login">
                    <MenuItem>
                        LOG IN
                    </MenuItem>       
                </Link>
                <Link to="/cart">  {/**TIP: How to go cart pages */}
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                    </Badge>
                    </MenuItem>                
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar