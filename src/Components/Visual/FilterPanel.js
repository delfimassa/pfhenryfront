import React from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../../Redux/actions'
import { bindActionCreators } from 'redux'
import './FilterPanel.css'


function FilterPanel(props) {

    function serviciosChange(e){
        
    }

    function ordenChange(e){
        
    }

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
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">no se q poner aca</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Mejores reseñas</a>
                <a class="dropdown-item" href="#">Mayor precio</a>
                <a class="dropdown-item" href="#">Menor precio</a>
            </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
