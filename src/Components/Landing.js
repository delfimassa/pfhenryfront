import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from "./Home/SearchBar"
import "./Landing.css"

const Landing = () => {
    return (
        <div className="parentLanding">
            {/* <SearchBar /> */}
            <Link to={'/registerAdmin'} >
                <button className='btn btn-primary mx-3'>Registrar Peluqueria </button>
            </Link>
            <Link to={"/login"} >

                <button className='btn btn-primary mx-3'>Ingresar </button>
            </Link>
            <Link to={'/register'} >
                <button className='btn btn-primary mx-3'>Registrarse </button>
            </Link>
            
        </div>
    );
};

export default Landing;