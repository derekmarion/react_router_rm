import React from "react";
import { rm1, rm2, rm3 } from '../images/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

function HomePage() {
    return (
        <>
        <Carousel className="w-100" style={{ marginTop: '50px' }}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={rm1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={rm2}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={rm3}
            alt="First slide"
            />
        </Carousel.Item>
        </Carousel>
        </>
    )
}

export default HomePage;