import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbars.css"

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{borderRadius:"20px", height:"70px",backgroundColor:"#F8F9FA"}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto container">
            <Nav.Link className= 'writing col-lg-3' href="/">Home</Nav.Link>
            <Nav.Link  className= 'writing col-lg-3' href="/quizzes">Quiz</Nav.Link>
            <Nav.Link  className= 'writing col-lg-3' href="/games">Games</Nav.Link>
            <Nav.Link  className= 'writing col-lg-3' href="/articles">Articles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;