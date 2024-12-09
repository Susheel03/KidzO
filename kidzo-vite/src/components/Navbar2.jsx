import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar2.css"

function Navbars2() {
  return (
      <div className='first'>
            <img src="/trans_logo.png" alt="logo" style={{width:'auto', height:'100px', marginLeft:'100px'}} />
            <Navbar expand="lg" className="bg-light bg-gradient navigation-bar">
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
      </div>
  );
}

export default Navbars2;