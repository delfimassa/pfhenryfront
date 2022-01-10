import React from 'react'
import { connect } from 'react-redux'
import './FilterPanel.css'


function FilterPanel(props) {

    function serviciosChange(e){
        
    }

    function ordenChange(e){
        
    }

    return (
        <div className='content-filterpanel'>
            <h3 className='title-filterpanel'>Que servicio buscas?</h3>
            <form className="servicios">
                <div>
                    <input type="checkbox" id="servicio1"/>
                    <label for="servicio1"> Perfilado</label>
                </div>
                <div>
                    <input type="checkbox" id="servicio2"/> 
                    <label for="servicio2"> Alisado</label>
                </div>
                <div>
                    <input type="checkbox" id="servicio3"/> 
                    <label for="servicio3"> Tintura</label>
                </div>
                <div>
                    <input type="checkbox" id="servicio4"/>
                    <label for="servicio4"> Corte</label>
                </div>
            </form>
            <h3 className='title-filterpanel'> Ordenar por: </h3>
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

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actionCreator, dispatch)
// }

export default connect(mapStateToProps, {})(FilterPanel)
