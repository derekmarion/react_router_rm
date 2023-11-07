import { useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import { useOutletContext, useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

const Favorites = () => {
    const { favorites, setFavorites } = useOutletContext();
    const navigate = useNavigate();

    const removeFromFavorites = (id) => {
        // Filter out items with the specified id
        const updateFavorites = favorites.filter(favorite => favorite.id !== id);
        setFavorites(updateFavorites);
    }

    const handleButtonClick = (id) => {
        navigate(`/characterdetails/${id}/`);
    }

    return (
        <>
        <div className="container text-center" style={{ marginTop: '70px' }}>
        <h1>Favorites</h1>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {favorites.map(favorite => (
            <Col key={favorite.id}>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={favorite.image} />
                <Card.Body>
                    <Card.Title>{favorite.name}</Card.Title>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Button onClick={()=>handleButtonClick(favorite.id)}>More Details</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button onClick={()=> removeFromFavorites(favorite.id)}>Remove</Button>
                    </ListGroup.Item>
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

export default Favorites;