import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import {mobile} from '../responsive';
import { useLocation } from 'react-router-dom';
import { getProduct, getProducts } from '../helpers/backend_helper';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { useSelector } from 'react-redux';

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

  /*#conditionalRendering*/


const Product = () => {
  const location = useLocation();//TIP: get locations in the pages, and pass them to components.
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  /**
   * @useSelectors
   */

  /**
   * @useStates
   */
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  
  /**
   * 
   * @customFunctions
   */
  const amountHandler = (type)=> {
    if(type==="inc"){
      setAmount(amount+1);
    } else if (type ==="dec" ) {
      amount>1 && setAmount(amount-1);
    }
  }

  const cartHandler = ()=>{
    console.log("calisti")
    dispatch(addProduct({...product, amount, color, size}))
  }

 /**
  * @useEffects
  */
  useEffect(()=> {
    const getProductResponse = async () => {
      const result = await getProduct(productId);
      setProduct(result);
    }

    getProductResponse();
  }, [productId])

  return (
    <Container>
      <Navbar></Navbar>
      <Annoucement></Annoucement>
      <Wrapper>
        <ImgContainer>
          <Image src = {`${product.description}`}></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title?.toUpperCase() || ""}</Title>
          <Desc>{product.description}</Desc>
          <Price>${amount*product.price}</Price>
          <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            {
              product.color?.map((color)=> (
                <FilterColor key = {product._id} color={`${color}`} onClick={()=> setColor(color)}></FilterColor>
              ))
            }
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize onChange = {(e)=>{setSize(e.target.value)}}>
              {
                product.size?.map((size)=> (
                  <FilterSizeOption key = {product._id}>{size.toUpperCase()}</FilterSizeOption>
                ))
              }
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <Remove onClick ={()=> amountHandler("dec")} cursor="pointer"></Remove>
            <Amount>{amount}</Amount>
            <Add  onClick ={()=> amountHandler("inc")}  cursor="pointer"></Add>
          </AmountContainer>
          <Button onClick={()=>cartHandler()} >ADD TO CART</Button>
        </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  )
}

export default Product