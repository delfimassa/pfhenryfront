import React from 'react';
import Navbar from '../Common/Navbar';
import Card from '../Cards/Card';
import FilterPanel from './FilterPanel';
import './Home.css'

function Home() {
    return (
        <div>
            <Navbar />
            <div className='container'>
            <FilterPanel /> 
            <Card /> 
            </div>
            <div class="containerImg">
                    <img src="https://album.mediaset.es/eimg/2020/04/16/TFkIELZDad4N9wJvYdCP06.jpg?w=1200&h=900" alt="Avatar" class="image"/>
                    <div class="middle">
                    <a href="#" class="card-link"><button type="button" class="btn btn-primary">Comprar</button></a>
                    <a href="#" class="card-link"><button type="button" class="btn btn-outline-primary" style={{paddingTop:'5.5px', paddingBottom: '5.5px'}}>+Info</button></a>      
                    </div>
    </div>
        </div>
    )
}
 //agregar algo para q las cards bajen a partir de cierto punto
export default Home