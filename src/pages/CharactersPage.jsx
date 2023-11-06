import React, { useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CharactersPage() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    //get all characters on first page of character GET. Note that each return has a reference to next page in info.next
    const getCharacters = async () => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        setCharacters(response.data.results);
    } catch (error) {
        console.error("An error occured:", error);
    }
};
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
                        <ListGroup.Item>Status: {character.status}</ListGroup.Item>
                        <ListGroup.Item>Species: {character.species}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
        </div>
        </>
    )
}

export default CharactersPage;