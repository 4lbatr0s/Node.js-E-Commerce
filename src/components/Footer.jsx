import { Facebook, MailOutline, Phone, Pinterest, Room, Twitter, YouTube } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left:70px;
`;
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    flex:1;
    padding: 20px;
`
    
const Title = styled.h3`
    margin-bottom: 30px;
`;


//INFO:when you create a list, it's got it's own margin and bottom!
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    margin-left: 80px;
`;

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    padding: 20px;
`;

const SocialContainer = styled.div`
    display: flex;
 `;

const Logo = styled.h1`
    margin-bottom:20px;
`;

const Desc = styled.p`
margin-bottom:20px;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color:white;
    border-radius: 50%;
    background-color: #${props=> props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1);
    }
`;

const ContactItem = styled.div`
    display: flex;
    justify-content: center;
`;

const Payment = styled.div`
    display: flex;
    justify-content: center;
`;




const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                VERITAS.
            </Logo>
            <Desc>
                Stupid Explanations..
            </Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook></Facebook>
                </SocialIcon>
                <SocialIcon color = "55ACEE" >
                    <Twitter></Twitter>
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <Pinterest></Pinterest>
                </SocialIcon>
                <SocialIcon color = "E60023">
                    <YouTube></YouTube>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Login</ListItem>
                <ListItem>Register</ListItem>
                <ListItem>Newsletter</ListItem>
                <ListItem>Search</ListItem>
                <ListItem>Cart</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style ={{marginRight:"10px"}}></Room>
                Bursa,Turkey
            </ContactItem>
            <ContactItem>
                <Phone style ={{marginRight:"10px"}}></Phone>
                +9354733215
            </ContactItem>
            <ContactItem>
                <MailOutline style ={{marginRight:"10px"}}></MailOutline>
                serhatoner@protonmail.com
            </ContactItem>
            <Payment src = "stupid.jpg"/>
        </Right>
    </Container>
  )
}

export default Footer