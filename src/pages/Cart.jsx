import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"; //INFO: How to import stripe checkout
import { fullfillPayment } from '../helpers/backend_helper';
import {redirect} from "react-router-dom";

const KEY = "pk_test_51LxdjNIk6AX0xKBBSCEua5tHHkrLG7Rye51oLvaKXdOgwvbFMYnm44QSAhhdi2z1JX2Qzv6vQaYlEXhfJ9sEqgLv00XTvV0ADM";
console.log(KEY);
const Container = styled.div``;

const Wrapper = styled.div`
    padding:20px;
    ${mobile({
    padding: "10px"
})}
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
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
    display:flex;
    justify-content:space-between; 
    ${mobile({
    display: "flex",
    flexDirection: "column",
})}
`;


const TopTexts = styled.div`
    ${mobile({
    display: "none"
})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Info = styled.div`
    flex:3;
`;


const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
    display: "flex",
    flexDirection: "column",
})}
`;

const ProductDetail = styled.div`
    flex:2;
    display;flex;
`;
const Image = styled.img`
    width:200px;
 `;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    margin-bottom:20px;
    display: flex;
    align-items: center;
`;

const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({
    margin: "5px 15px",
})}
`;

const ProductPrice = styled.div`
    font-weight:200;
    font-size:30px;
    display: "flex",
    ${mobile({
    marginBottom: "20px",
})}
`;

const Hr = styled.hr`
    background-color: #EEE;
    border:none;
    height:1px;
`;

const Summary = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:51vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === 'total' && "700"};
    font-size: ${(props) => props.type === 'total' && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span`
`;

const Button = styled.button`
    padding:20px;
    width:50%;
    margin:0 auto;
    background-color:black;
    color:white;
    font-weight:600;
`;



const Cart = () => {

    /**
     * @hookDeclarations
     */
    const dispatch = useDispatch();

    /**
     * @useSelectors
     */
    const cart = useSelector(state => state.cart);
    console.log(cart.products);

    /**
     * @useStates
     */
    const [stripeToken, setStripeToken] = useState(""); //INFO: We will send this token to backend


    /**
     * @customFunctions
     */
    const onToken = (token) => { //INFO: we pass onToken function as a parameter to Stripe Checkout Component!
        setStripeToken(token);
    }


    /**
     * @useEffects
     */
    useEffect(()=> {
        const fullFillPaymentResponse = async()=>{
            const result = await fullfillPayment({
                tokenId:stripeToken.id,
                amount:500
            })
            redirect("/success");   
        }

       stripeToken && fullFillPaymentResponse();
    }, [stripeToken])

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
                        {
                            cart.products.map((product) => (
                                <>
                                    <Product key = {product._id}>
                                        <ProductDetail>
                                            <Image src="https://i.pinimg.com/736x/a9/35/20/a9352080b2127da1678cad38303a235e--office-lost.jpg"></Image>
                                            <Details>
                                                <ProductName><b>PRODUCT:</b> {product.title.toUpperCase()}</ProductName>
                                                <ProductId><b>ID:</b> {product._id}</ProductId>
                                                <ProductColor color={product.color} />
                                                <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                            </Details>
                                        </ProductDetail>
                                        <PriceDetail>
                                            <ProductAmountContainer>
                                                <Add></Add>
                                                <ProductAmount>{product.amount}</ProductAmount>
                                                <Remove></Remove>
                                            </ProductAmountContainer>
                                            <ProductPrice>${product.price * product.amount}</ProductPrice>
                                        </PriceDetail>
                                    </Product>
                                </>
                            ))
                        }
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.totalPrice}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 3.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -2.10</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.totalPrice + 10}</SummaryItemPrice>
                        </SummaryItem>  
                         {/*INFO: How to use stripe checkout component */}
                        <StripeCheckout
                         name="VERITAS SHOP"
                         billingAddress
                         shippingAddress
                         description={`Your total is ${cart.totalPrice}`}
                         amount = {cart.totalPrice*100}
                         token = {onToken}
                         stripeKey = {KEY}
                        > 
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Annoucement></Annoucement>
            <Footer></Footer>
        </Container>
    )
}

export default Cart