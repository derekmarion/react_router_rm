import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";


function NavBar() {
    const [searchInput, setSearchInput] = useState(""); //this state hold search input from the user
    const navigate = useNavigate();

    const handleInputChange = (e) => {
      setSearchInput(e.target.value); // Update search input state on form submission
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      searchBar(searchInput);
    }

    //search character by name using API methods then navigate to character details page
    const searchBar = async (input) => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${input}`)
        const character = response.data.results[0];

        if (character) {
          navigate(`/characterdetails/${character.id}`);
        } else {
          console.log("Character not found")
        }
      } catch (error) {
        console.error("An error occured:", error);
    }
  }

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
            <Nav.Link as={Link} to="/favorites" activeClassName="active">Favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form inline onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={searchInput}
              onChange={handleInputChange}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default NavBar;
