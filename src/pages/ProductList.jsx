import {useState, React} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {mobile} from '../responsive';
import { useLocation, useNavigate } from 'react-router-dom';


const Container = styled.div``;

const Title = styled.h1``;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin:20px;
    ${mobile({
        margin:"0px 20px",
        display: "flex",
        flexDirection:"column",
    })}
`;

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({
        margin:"10px 0px"
    })}
`;

const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({
        margin:"10px"
    })}
`;

const Option = styled.option`

`;


const ProductList = () => {
    //#Variables
    let location = useLocation();
    let cat = location.pathname.split("/")[2];
    //#useStates
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    //#Handlers
    const filterHandler = (e)=>{//INFO: How to handle a select event, we recognize the select event from its name!
        const value = e.target.value;
        setFilters({
            ...filters, 
            [e.target.name]: value //get name and set it as the value! name=color, {color:value}
        });
    }
    const sortHandler = (e)=>{
        setSort(e.target.value);
    }

    return (
    <Container>
        <Navbar></Navbar>
        <Annoucement></Annoucement>
        <Title>DRESSESS</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select name="color" onChange={filterHandler}>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name="size" onChange={filterHandler}>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
                <Select onChange={(e) => sortHandler(e)}> {/*INFO: How to get value from SELECT! */}
                    <Option value="newest" selected>Newest</Option>
                    <Option value="asc">Price(asc)</Option>
                    <Option value="desc">Price(desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}></Products> {/*INFO:How to pass products and category, sort!*/}
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default ProductList