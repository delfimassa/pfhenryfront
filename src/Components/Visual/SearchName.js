import React from 'react'

function SearchName() {

    function buscadorChange(e){
    }

    return (
        <div>
            <input className="buscador" type='text' placeholder='Buscar peluquería...' onChange={buscadorChange}></input>
        </div>
    )
}

export default SearchName
