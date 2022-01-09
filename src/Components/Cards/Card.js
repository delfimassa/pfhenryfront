import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className='all'>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">HairShop</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Barberia</h6>
                    <div className='descPelu'>
                    <p class="card-text">Si necesitas un buen corte te esperamos aca! Dale click al boton y agenda una visita</p>
                    </div>
                    {/* <a href="#" class="card-link"><button type="button" class="btn btn-primary">Comprar</button></a>
                    <a href="#" class="card-link"><button type="button" class="btn btn-outline-primary" style={{paddingTop:'5.5px', paddingBottom: '5.5px'}}>+Info</button></a>       */}
                </div>
            </div>
            <img className='imagenCard' src="https://album.mediaset.es/eimg/2020/04/16/TFkIELZDad4N9wJvYdCP06.jpg?w=1200&h=900" alt="corte" />
        </div>
    )
}

export default Card


