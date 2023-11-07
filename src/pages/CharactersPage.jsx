import { useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useOutletContext } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function CharactersPage() {
    const [characters, setCharacters] = useState([]);
    const { favorites, setFavorites } = useOutletContext();
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        getCharacters(currentPage);
    }, [currentPage]);

    const handleButtonClick = (id) => {
        navigate(`/characterdetails/${id}/`);
    }

    const addToFavorites = (character) => {
        if (favorites.length < 4) {
            setFavorites([...favorites, character]);
        } else {
            alert("You can't add more than 4 favorites.")
        }
    }

    //get specific character page
    const getCharacters = async (page) => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            setCharacters(response.data.results);
        } catch (error) {
            console.error("An error occured:", error);
        }
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <>
           <div className="container text-center" style={{ marginTop: '70px' }}>
        <h1>Characters</h1>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {characters.map(character => (
            <Col key={character.id}>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        <Button onClick={()=>handleButtonClick(character.id)}>More Details</Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Button onClick={()=> addToFavorites(character)}>Favorite</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
        </div>
        <div className="fixed-bottom bg-transparent p-3 text-center d-flex justify-content-between">
            <Button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</Button>
            <Button disabled={currentPage === 42} onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
        </div>
        </>
    )
}

export default CharactersPage;