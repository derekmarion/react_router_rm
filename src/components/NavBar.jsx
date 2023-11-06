import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Rick and Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" activeClassName="active" exact>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" activeClassName="active">About</Nav.Link>
            <Nav.Link as={Link} to="/characters" activeClassName="active">Characters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
