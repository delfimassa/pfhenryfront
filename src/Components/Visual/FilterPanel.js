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

  
  function handleOrderByRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  }


  return (
    <div className="parent-filterpanel">
      <div className="filter">
        <h3 className="title-filterpanel"> Ordenar por: </h3>
        <ul>
          <select onChange={(e) => handleOrderByRating(e)}>
            <option value="desc">Mejores reseñas</option>
            <option value="asc">Peores reseñas</option>
          </select>
        </ul>
      </div>
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
            props.filterCalendar(nombreDia);
          }}
          animateYearScrolling
        />
      </div>
    </div>
  );
}



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreator, dispatch);
};

export default connect(mapDispatchToProps)(FilterPanel);
