import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { redirect, useNavigate } from 'react-router-dom';

const Container = styled.div`
    background-image: linear-gradient(to bottom right, rgb(70,78, 144), purple);
    width:100vw;
    height:100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    width: 20%;
    padding:20px;
    flex-direction: column;
    background-color:rgba(100,120, 144, 0.3);
    border-radius:5%;
    ${mobile({
        width: "75%"
    })}
`;
    

const Title = styled.h1`
    font-size:24px;
    align-self: top;
    font-weight:700;
    margin:0px 10px;
    text-align:center;
    color:white;
`;

const Form = styled.form`
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
`;

const Input = styled.input`
    margin:20px 10px 0px 0px;
    padding:20px;
    flex:1;
    min-width:20%;
    transition:all 0.5s ease;
    &:hover{
        transform:scale(1.05);
    }
    type = ${props=> props.type}
`;

const Agreement = styled.span`
    font-size:12px;
    margin:20px;
    color:white;
`;

const Button = styled.button`
    width:40%;    
    border:1px solid rgb(70,78, 144);
    padding: 15px 20px;
    color:rgb(70,78, 144);
    background-color:white;
    font-weight:bold;
    margin:0 auto;
    transition: all 0.3s ease;
    &:hover{
        background-color:rgb(70, 78, 144);
        cursor:pointer;
        color:white;
    };
    &:disabled{
        cursor:not-allowed;
    };`;
    

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color:white;
    margin: 20px 0px;
    align-items: center;
`;
const Link = styled.a`
    margin:0px 5px;
    font-size: 12px;
    text-decoration: underline;
    cursor:pointer;
`;

const Error = styled.span`
    color:red;
`;


const Login = () => {
    /**
     * @hookDeclarations
     */
    const dispatch = useDispatch();
    const navigate =useNavigate();

    /**
     * @useSelectors
     */
    const {isFetching, error} = useSelector((state)=> state.user);
    const user = useSelector(state=> state.user.currentUser);

    /**
     * @useStates
     */
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
 
     /**
      * @customFunctions
      */
     const usernameHandler = (e)=> {
         setUsername(e.target.value);
     }
 
     const passwordHandler = (e)=>{
         setPassword(e.target.value);
     }

     const loginHandler = (e) =>{ 
        e.preventDefault();
        login(dispatch, {username, password});
     }
 
     /**
      * @useEffects
      */
    useEffect(()=> {
        if(user){
            navigate("/");
        }
    }, [user])

   return (
    <Container>
        <Wrapper>
            <Title>
                SIGN IN
            </Title>
            <Form>
                <Input type="email" placeholder="email" onChange={(e)=> {usernameHandler(e)}}></Input>
                <Input type ="password" placeholder="password" onChange={(e)=> {passwordHandler(e)}}></Input>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Button onClick={(e)=>{loginHandler(e)}} disabled={isFetching}>LOGIN</Button>
                {error ? <Error>Something went wrong!</Error> : null}
            </Form>
            <LinkContainer>
            <Link>SIGN UP</Link>
              <Link>FORGOT YOUR PASSWORD ?</Link>
            </LinkContainer>
        </Wrapper>
    </Container>
  )
}

export default Login