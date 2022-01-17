import React from 'react'
import './FilterPanel.css'
function FilterPanel() {
    return (
        <div className='content'>
            <h3 className='title'>Que servicio buscas?</h3>
            <form className="servicios">
                <div>
                    <input type="checkbox" id="servicio1"/>
                    <label for="servicio1"> Barbería</label>
                </div>
                <div>
                    <input type="checkbox" id="servicio2"/> 
                    <label for="servicio2"> Peluquería Unisex</label>
                </div>
                <div>
                    <input type="checkbox" id="servicio3"/> 
                    <label for="servicio3"> Tinturas</label>
                </div>
                <div>
                    <input type="checkbox" id="servicio4"/>
                    <label for="servicio4"> Tratamiento capilar</label>
                </div>
            </form>
            <h3 className='title'> Ordenar por: </h3>
            <form>
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">no se q poner aca</a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Mejores reseñas</a>
                <a className="dropdown-item" href="#">Mayor precio</a>
                <a className="dropdown-item" href="#">Menor precio</a>
            </div>
            </form>
        </div>
    )
}

export default FilterPanel
