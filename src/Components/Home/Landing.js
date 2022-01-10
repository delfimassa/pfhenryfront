import React from 'react';
import SearchBar from "./SearchBar"
import "./Landing.css"

const Landing = () => {
    return (
        <div class="container-landing">
            <h2 class="title">Reservá tu turno</h2>
            <SearchBar />
        </div>
    );
};

export default Landing;