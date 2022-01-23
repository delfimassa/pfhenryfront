import { DatePicker } from 'antd'
import React from 'react'
import './FormTurnos.css'

function FormTurnos() {



    return (
        <div className='form-container'>
            <label>Ingresa tu nombre</label>
            <input type='text' placeholder='nombre' required/> 
            <label>Ingresa tu número (sin 0 ni 15)</label>
            <input type='tel' placeholder='numero' required/>
            <label>Elige el servicio que quieras</label>
            <select>
                <option>corte facha </option>
            </select>
            <label>Elige el día</label>
            <DatePicker />
            <label>Elige el horario</label>
            <select>
                <option>10:00</option>
            </select>
            <input type='submit' />
        </div>
    )
}

export default FormTurnos
