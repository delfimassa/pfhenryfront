import React, { useState } from "react";
import * as actionCreator from "../../Redux/actions/filters";
import { bindActionCreators } from "redux";
import { connect, useDispatch } from "react-redux";
import "./FilterPanel.css";
import { DatePicker } from "@material-ui/pickers";
// import SearchProvincia from './SearchProvincia'
import {orderByRating} from "../../Redux/actions/peluqueria";


function FilterPanel(props) {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  function borrarFiltros(e){
    props.filtrosDelete()
  }
  
  function handleOrderByRating(e) {
    // e.preventDefault();
    // dispatch(orderByRating(e.target.value));
    // setOrder(`Ordenado ${e.target.value}`);
    // console.log("despachando desde filter panel")
    props.filtrosDelete()
    props.orderByRating(e.target.value)
  }

 
  return (
    <div className="parent-filterpanel">
      <div className="filter">
        <h3 className="title-filterpanel"> Ordenar por: </h3>
        <ul>
          <select onChange={(e) => handleOrderByRating(e)}>
            <option value='default'>Filtrar por reseñas</option>
            <option value="asc">Mejores reseñas</option>
            <option value="desc">Peores reseñas</option>
          </select>
        </ul>
      </div>
      <button className="btn-primary btn m-2" onClick={(e) => {
        borrarFiltros(e)
      }}>limpiar filtros</button>
      <div className="filter">
        <h3 className="title-filterpanel">Buscar por fecha</h3>
        <p>
          Elegí el servicio, día y hora y te brindamos las peluquerias con
          turnos disponibles
        </p>
        <DatePicker
          variant="inline"
          format="dd/MM/yyyy"
          label="Basic example"
          onChange={(e) => {
            //no
            let nombreDia = semana[e.getDay()];
            console.log(nombreDia)
            props.filterCalendar(nombreDia);
          }}
          animateYearScrolling
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    orden: state.orden,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreator, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(FilterPanel);
