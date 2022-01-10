import React from 'react';
import './Card.css';

function Card({name, address, rating, avatar, schedule}) {
    return (
        <div className="all">
                  <div className="containerImg">
          {avatar[0] === 'h' ? <img
            className="image"
            src={avatar}
            alt="Avatar"
          />: <img
          className="image"
          src='https://image.freepik.com/foto-gratis/tijeras-peluquero-peluqueria-hombre-brutal-bigote-macho-peluqueria-corte-pelo-afeitado-mans-corte-pelo-peluqueria-perfil-hombre-barba-elegante-tijeras-hombre-barbudo-aislado-espacio-blanco_264277-227.jpg'
          alt="Avatar"
        />}
          <div class="middle" style={{display: 'flex', alignItems: 'center'}}>
            <a href="#" class="card-link">
              <button type="button" class="btn btn-primary">
                Comprar
              </button>
            </a>
            <a href="#" class="card-link">
              <button
                type="button"
                class="btn btn-outline-primary"
                style={{ paddingTop: "8.5px", paddingBottom: "8.5px" }}
              >
                +Info
              </button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{schedule}</h6>
            <div className="descPelu">
              <p class="card-text">
                {address}
              </p>
            </div>
            <div>
                <p>
                    Rating: {rating ? rating : "Aun no fue calificada por nadie"}
                </p>
            </div>
            {/* <a href="#" class="card-link"><button type="button" class="btn btn-primary">Comprar</button></a>
                      <a href="#" class="card-link"><button type="button" class="btn btn-outline-primary" style={{paddingTop:'5.5px', paddingBottom: '5.5px'}}>+Info</button></a>       */}
          </div>
        </div>

      </div>
    )
}

export default Card


