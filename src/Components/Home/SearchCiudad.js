import { React, useState } from "react";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"
let prov = require("../../provincias.json");

const SearchCiudad = () => {
  // const [search, setSearch] = useState("");
  // const dispatch = useDispatch();

  // function handleOnSubmit(e) {
  //   e.preventDefault();
  //   dispatch(console.log(search)); // con dispatch usar la function que viene desde actions
  // }
  // function handleOnChange(e) {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // }

  // SELECT
  const [citySelect, setCitySelect] = useState();
  const [stateSelect, setStateSelect] = useState();

  const provDepartamentos = prov[0].departamentos;
  const nombreProvincias = provDepartamentos.map((e) => {
    return e.provincia.nombre;
  });

  const filteredProv = nombreProvincias.filter((elem, rep) => {
    return nombreProvincias.indexOf(elem) == rep;
  });

  const changeCity = function (e) {
    const option = e.target.value;
    setCitySelect(option);
  };

  const changeState = function (e) {
    const option = e.target.value;
    setStateSelect(option);
    // setUser({ city: citySelect, state: stateSelect });
  };

  const searchCity = provDepartamentos.map((e) => {
    if (e.provincia.nombre == citySelect) {
      return e.nombre;
    }
  });

  const filterCity = searchCity.filter((elem, rep) => {
    return searchCity.indexOf(elem) == rep;
  });

  console.log("city =>" + citySelect);
  console.log("state =>" + stateSelect);

// FILTER
const peluquerias = useSelector((state) => state.allPeluquerias);
const peluqueriasProvincias = peluquerias.map((e) => {
  if(e.state == "Tucuman"){
    return e
  }
})

const filteredPelus = peluqueriasProvincias.filter(e => e)
console.log(peluqueriasProvincias)
console.log(filteredPelus)

  return (
    <div>
      <div className="campo-form">
        <label>Provincia</label>
        <select
          name="city"
          id="city"
          onClick={changeCity}
          // className={style.selectProv}
        >
          <option disabled selected>
            Selecciona una provincia
          </option>
          {filteredProv.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
      </div>
      <div className="campo-form">
        <label>Ciudad</label>
        <select
          name="state"
          id="state"
          onClick={changeState}
          // className={style.selectProv}
        >
          <option disabled selected>
            Selecciona una ciudad
          </option>
          {filterCity.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default SearchCiudad;
