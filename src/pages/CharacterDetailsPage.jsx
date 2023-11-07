import React, { useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

const CharacterDetailsPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        getCharacter();
    }, []);

    //API call to GET character with ID defined by param in URL
    const getCharacter = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
            console.log(response);
            setCharacter(response.data);
        } catch (error) {
            console.error("An error occured:", error);
        }
};
    return (
        <>
        <div className="container text-center" style={{ marginTop: '70px' }}>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
                        Status: {character.status}
                        <br />Species: {character.species}
                        <br />Origin: {character.origin ? character.origin.name : 'Unknown'}
                        <br />Location: {character.location ? character.location.name : 'Unknown'}
                    </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default CharacterDetailsPage;