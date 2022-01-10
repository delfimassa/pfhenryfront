import React from 'react'
import * as actionCreator from '../../Redux/actions/filters'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './FilterPanel.css'
import SearchName from './SearchName'


function FilterPanel(props) {

    function serviciosChange(e){
        props.filterServicies(e.target.value)
    }

    function ratingChange(e){
        props.filterRating(e.target.value)
    }


    return (
        <div className='content-filterpanel'>
            <h3 className='title-filterpanel'>Que servicio buscas?</h3>
            <form className="servicios" onChange={serviciosChange}>
                <div>
                    <input type="checkbox" id="servicio1" value="perfilado" onChange={serviciosChange}/>
                    <label for="servicio1"> Perfilado</label>
                </div>
                <div>
                    <input type="checkbox" id="servicio2" value="alisado"/> 
                    <label for="servicio2"> Alisado</label>
                </div>
                <div>
                    <input type="checkbox" id="servicio3" value="tintura"/> 
                    <label for="servicio3"> Tintura</label>
                </div>
                <div>
                    <input type="checkbox" id="servicio4" value="corte"/>
                    <label for="servicio4"> Corte</label>
                </div>
            </form>
            <h3 className='title-filterpanel'> Ordenar por: </h3>
                <ul>
                    <select onChange={ratingChange}>
                        <option value="mayor">Mejores reseñas</option>
                        <option value="menor">Peores reseñas</option>
                    </select>
                </ul>
            <SearchName />
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        orden: state.orden
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
