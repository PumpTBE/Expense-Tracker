import styled from "styled-components";
import HomeComponent from "./modules/home";
// import OverviewComponent from "./modules/home/OverviewComponent";


const Container = styled.div`
display:flex;
flex-direction:column;
font-family:Arial, Helvetica, sans-serif;
align-items:center;
margin: 30px 0 10px;


`;


const Header = styled.span`
color:violet;
font-size:25px;
font-weight:bold;
background-color:white;
flex-direction:row;
padding:22px;



`;

function App() {
  return (
    <Container>
      <Header>My Expense Tracker</Header>
      <HomeComponent/>
    </Container>

  );
}

export default App;
