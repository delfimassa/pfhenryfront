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
          <div className="middle" style={{display: 'flex', alignItems: 'center'}}>
            <a href="#" className="card-link">
              <button type="button" className="btn btn-primary">
                Comprar
              </button>
            </a>
            <a href="#" className="card-link">
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ paddingTop: "8.5px", paddingBottom: "8.5px" }}
              >
                +Info
              </button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{schedule}</h6>
            <div className="descPelu">
              <p className="card-text">
                {address}
              </p>
            </div>
            <div>
                <p>
                    Rating: {rating ? rating : "Aun no fue calificada por nadie"}
                </p>
            </div>
            {/* <a href="#" className="card-link"><button type="button" className="btn btn-primary">Comprar</button></a>
                      <a href="#" className="card-link"><button type="button" className="btn btn-outline-primary" style={{paddingTop:'5.5px', paddingBottom: '5.5px'}}>+Info</button></a>       */}
          </div>
        </div>

      </div>
    )
}

export default Card


