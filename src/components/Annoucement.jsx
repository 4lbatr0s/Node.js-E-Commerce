import style from 'styled-components';


const Container = style.div`
    height:30px;
    background-color:#464e90;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`


function Annoucement() {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Annoucement