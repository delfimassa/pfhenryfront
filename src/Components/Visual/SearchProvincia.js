import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import {searchCity} from '../../Redux/actions/search'

function SearchProvincia({searchCity}) {
    const [prov, setProv] = useState(["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"]) 

    function cityChange(e){
        console.log(e.target.value.toLowerCase())
        searchCity(e.target.value)
    }

    return (
        <form>
            <input type='text' placeholder='Ingresar ciudad...' onChange={cityChange}></input>
            <select>
                {prov ? prov.map(e => <option>{e}</option>) :<h1>Hubo problemas</h1> }
            </select>
            <input type="submit" />
        </form>
    ) 
}

function mapStateToProps(state){
    return{ 
        texto: state.text
    }
}

export default connect(mapStateToProps, {searchCity})(SearchProvincia)
