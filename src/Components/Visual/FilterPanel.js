import React from 'react'
import * as actionCreator from '../../Redux/actions/filters'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './FilterPanel.css'
// import SearchProvincia from './SearchProvincia'


function FilterPanel(props) {

    function serviciosChange(e){
        props.filterServicies(e.target.value)
    }

    function ratingChange(e){
        props.filterRating(e.target.value)
    }


    return (
        <div className='content-filterpanel'>
            <div><h3 className='title-filterpanel'> Ordenar por: </h3>
                <ul>
                    <select onChange={ratingChange}>
                        <option value="mayor">Mejores reseñas</option>
                        <option value="menor">Peores reseñas</option>
                    </select>
                </ul></div>
            <div>
                <h3 className='title-filterpanel'>Buscar por fecha</h3>
                <p>Aqui va un pequeño calendario</p>
            </div>

            
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
