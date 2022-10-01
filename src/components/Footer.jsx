import { Facebook, Pinterest, Twitter, YouTube } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`;

const Left = styled.div`
    flex:1;
    flex-direction:column;
    display: flex;
    padding:20px;
`;
const Center = styled.div`
    flex:1;
`;
const Right = styled.div`
    flex:1;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const Logo = styled.h1``;
const Desc = styled.p`
    margin:20px 0px;
`;
const SocialIcon = styled.div``;


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
                <SocialIcon>
                    <Facebook></Facebook>
                </SocialIcon>
                <SocialIcon>
                    <Twitter></Twitter>
                </SocialIcon>
                <SocialIcon>
                    <Pinterest></Pinterest>
                </SocialIcon>
                <SocialIcon>
                    <YouTube></YouTube>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

        </Center>
        <Right>

        </Right>
    </Container>
  )
}

export default Footer