import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FormReserva.css";
import axios from "axios";

function FormReserva() {
  const initialDate = new Date().toLocaleString("es-AR", {
    dateStyle: "short",
  });
  const fechaActual = new Date();
  const initialState = {
    service: "",
    time: "",
    date: initialDate,
    client: "",
    peluqueria: "",
  };
  const [pelu, setPelu] = useState(null);
  const [data, setData] = useState(initialState);
  const [dateToShow, setDateToShow] = useState(fechaActual);
  let { id } = useParams();


  useEffect(() => {
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
      console.log([response.data]);
    });
  }, []);

  const handleChange = (e) => {
    setData((prevData) => {
      const state = { ...prevData, [e.target.name]: e.target.value };
      return state;
    });
  };

  console.log(pelu);

  return (
    <>
      {pelu ? (
        <>
          <h1>reserva en {pelu[0].name}</h1>
          <div className="form-container">
            <label>Ingresa tu nombre</label>
            <input
              type="text"
              name="client"
              placeholder="Ingrese su nombre"
              onChange={handleChange}
              required
            />
            <label>Ingresa tu número (sin 0 ni 15)</label>
            <input
              type="tel"
              name="telefono"
              placeholder="Ingrese su numero"
              onChange={handleChange}
              required
            />
            <label>Elige el servicio que quieras</label>
            { !pelu  ?  (<p>no hay nada</p>) : (<div>
              <select>
                <option>Selecciona el servicio</option>
                {pelu &&
                  pelu[0].services.map((t) => {
                    return <option>{t.service.name}</option>;
                  })}
              </select>
            </div>) }
            <label>Elige el día</label>
            <DatePicker
              variant="inline"
              format="DD/MM/yyyy"
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
            />
            <label>Elige el horario</label>
           { !pelu  ?  (<p>no hay nada</p>) : (<div>
              <select>
                <option>Seleccion un horario</option>
                {pelu &&
                  pelu[0].turnero.map((t) => {
                    return <option>{t}</option>;
                  })}
              </select>
            </div>) }
            <input type="submit" />
          </div>
        </>
      ) : (
        <h1>carganding</h1>
      )}
    </>
  );
}

export default FormReserva;
