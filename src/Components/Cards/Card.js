import React from 'react';
import './Card.css';



function Card({name, address, city, state, rating, avatar, schedule}) {
    return (
        <div className="all">
                  <div className="containerImg">
<<<<<<< HEAD
          {avatar ? <img
=======
          {avatar ? 
          <img
>>>>>>> db603768a6424816438982a91aa2e433be89acb1
            className="image"
            src={avatar}
            alt="Avatar"
          />
          :
           <img 
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
              <p class="card-text">
              City: {state} - {city}<br/>Address: {address}
              </p>
            </div>
            <div>
                <p>
                    Valoracion: {rating ? rating+' Estrellas' : '- Estrellas'}
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


