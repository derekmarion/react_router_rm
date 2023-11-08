import React, { useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from "react-bootstrap/Spinner";

const CharacterDetailsPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null)

    useEffect(() => {
        getCharacter();
    }, [id]);

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
        {character ? (
        <div className="container text-center" style={{ marginTop: '70px' }}>
            <Card style={{ width: '18rem'}} className="mx-auto">
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <ListGroup variant="flush">
                    <ListGroup.Item> {/*Add a spinner while this loads? */}
                        Status: {character.status}
                        <br />Species: {character.species}
                        <br />Origin: {character.origin ? character.origin.name : 'Unknown'}
                        <br />Location: {character.location ? character.location.name : 'Unknown'}
                    </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div> )
        : (
        <div className="container text-center" style={{ marginTop: '275px' }}>
            <Spinner animation="border" role="status"> 
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        )
        }
        </>
    )
}

export default CharacterDetailsPage;