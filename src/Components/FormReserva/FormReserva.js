import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FormReserva.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {postTurno} from '../../Redux/actions/turno'
// import { DatePicker } from "@material-ui/pickers";

function FormReserva() {
  let { id } = useParams();
  let client = useSelector((state) => state.userMongo);
  let clienttemail = client.username;
  console.log("client ", clienttemail);

  const dispatch = useDispatch()

  const initialDate = new Date().toLocaleString("es-AR", {
    dateStyle: "short",
  });
  const fechaActual = new Date();

  const initialState = {
    service: "",
    time: "",
    date: initialDate,
    client: client.username,
    peluqueria:  id ,
  };

  const [pelu, setPelu] = useState(null);
  const [data, setData] = useState(initialState);
  const [dateToShow, setDateToShow] = useState(fechaActual);

  useEffect(() => {
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
      console.log([response.data]);
    });
  }, []);
  console.log(pelu);

  const handleChange = (e) => {
    setData((prevData) => {
      const state = { ...prevData, [e.target.name]: e.target.value };
      return state;
    });
    console.log(data);
  };
  function selectService(e) {
    setData({ ...data, service: e.target.value });
  }
  function selectTime(e) {
    setData({ ...data, time: e.target.value });
  }

  function onSubmit(){
    console.log("falta esto")
    dispatch(postTurno(data))
  }

  //  let fecha = getDate();
  // let dia = getDay();
  // let mes = fecha.getMonth();
  // let anio = fecha.getFullYear();
  // let fechamin =
  return (
    <>
      {pelu ? (
        <div className="d-flex flex-column align-items-center co">
          <h1>reserva en {pelu[0].name}</h1>
          <form onSubmit={onSubmit} className="form-container  d-flex flex-column align-items-start">
          <div className="form-group"> 
            <label className="form-label mt-4">Ingresa tu teléfono (sin 0 ni 15)</label>
            <input
              type="tel"
              name="telefono"
              placeholder="Ingrese su numero"
              onChange={handleChange}
              required
              className="form-control"
            />
           </div>
           <div className="form-group">
            <label className="form-label mt-4">Elige el servicio que quieras</label>
            {!pelu ? (
              <p>no hay nada</p>
            ) : (
              <div>
                <select
                  onClick={(e) => {
                    selectService(e);
                  }}
                >
                  <option>Selecciona el servicio</option>
                  {pelu &&
                    pelu[0].services.map((t) => {
                      return (
                        <option value={t.service.name} key={t.service.name}>
                          {t.service.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            )} </div>
            <div className="form-group">
            <label className="form-label mt-4">Elige el día</label>
            {/* comparar con dias de atencion pelu y disabled los que no abre */}
            <DatePicker
              variant="inline"
              format="DD/MM/yyyy"
              // disabledDate={disabledDate}
              onChange={(date) => {
                const fechaelegida = new Date(
                  date.toString().slice(4, 15)
                ).toLocaleString("es-AR", { dateStyle: "short" });
                setData((currentData) => {
                  setDateToShow(date);
                  return { ...currentData, date: fechaelegida };
                });
              }}
              animateYearScrolling
            /> </div>
            <div className="form-group">
            <label className="form-label mt-4">Elige el horario</label>
            {!pelu ? (
              <p>no hay nada</p>
            ) : (
              <div>
                <select onClick={(e) => {
                    selectTime(e);
                  }}>
                  <option>Seleccion un horario</option>
                  {pelu &&
                    pelu[0].turnero.map((t) => {
                      return <option value={t} key={t}>{t}</option>;
                    })}
                </select>
              </div>
            )} </div>

            <button type="submit" className="btn btn-primary mb-3">Enviar</button>
          </form>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}

export default FormReserva;
