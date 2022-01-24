import React, { useState } from "react";
import * as actionCreator from "../../Redux/actions/filters";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./FilterPanel.css";
import { DatePicker } from "@material-ui/pickers";
// import SearchProvincia from './SearchProvincia'

function FilterPanel(props) {
  const [selectedDate, handleDateChange] = useState(new Date()); 
  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  function ratingChange(e) {
    props.filterRating(e.target.value);
  }

  return (
    <div className="parent-filterpanel">
      <div className="filter">
        <h3 className="title-filterpanel"> Ordenar por: </h3>
        <ul>
          <select onChange={ratingChange}>
            <option value="mayor">Mejores reseñas</option>
            <option value="menor">Peores reseñas</option>
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
          format="dd/M/yy"
          value={selectedDate}
          onChange={(e) => {
            handleDateChange(e)
            let nombreDia = semana[e.getDay()];
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
