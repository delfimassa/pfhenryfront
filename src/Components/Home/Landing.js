import React from 'react';
import SearchBar from "./SearchBar"
import "./Landing.css"

const Landing = () => {
    return (
        <div className="container-landing">
            <h2 className="title">Reservá tu turno</h2>
            <SearchBar />
        </div>
    );
};

export default Landing;