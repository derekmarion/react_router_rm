import React from "react";
import { logo } from '../images/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return (
        <>
        <div className="container text-center" style={{ marginTop: '70px' }}>
        <img src={logo} alt="Rick and Morty Logo" className="mx-auto"/>
        </div>
        </>
    )
}

export default HomePage;