import React from 'react'
import { connect } from 'react-redux';
import {searchName} from '../../Redux/actions/search'

function SearchName({searchName}) {

    function mins(string) {
        return string.toLowerCase() 
    };

    function buscadorChange(e){
        searchName(mins(e.target.value))
    }

    return (
        <div>
            <input className="buscador" type='text' placeholder='Buscar peluquería...' onChange={buscadorChange}></input>
        </div>
    )
}

function mapStateToProps(state){
    return{
        texto: state.text
    }
}

export default connect(mapStateToProps, {searchName})(SearchName)
