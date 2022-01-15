import React, { useState } from 'react'
import * as actionCreator from '../../Redux/actions/filters'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './FilterPanel.css'
import { DatePicker } from '@material-ui/pickers'
// import SearchProvincia from './SearchProvincia'
 

function FilterPanel(props) {

    const semana = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    
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
                <DatePicker
                    variant='inline'
                    format='dd/MM/yyyy'
                    label="Basic example"
                    onChange={e => {//no
                        let nombreDia= semana[e.getDay()]
                        props.filterCalendar(nombreDia)
                    }}
                    animateYearScrolling
                />
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
