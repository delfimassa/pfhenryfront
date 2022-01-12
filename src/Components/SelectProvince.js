import React, { useState } from "react";
let prov = require("../provincias.json");

export default function SelectProvince() {
  const [city, setCity] = useState();

  const provDepartamentos = prov[0].departamentos;
  const nombreProvincias = provDepartamentos.map((e) => {
    return e.provincia.nombre;
  });
//   console.log("hola", provDepartamentos);

  const filteredProv = nombreProvincias.filter((elem, rep) => {
    return nombreProvincias.indexOf(elem) == rep;
  });

  const changeCity = function (e) {
    const option = e.target.value;
    setCity(option);
  };

  const searchCity = provDepartamentos.map((e) => {
    if (e.provincia.nombre == city) {
      return e.nombre;
    }
  });

  const filterCity = searchCity.filter((elem, rep) => {
      return searchCity.indexOf(elem) == rep;
  })
  return (
    <div className="selectProvinceConteiner">
      <div>
        <label>Pronvincia</label>
        <select name="province" id="province" onClick={changeCity}>
          {filteredProv.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
      </div>
      <div>
        <label>Ciudad</label>
        <select name="cityP" id="cityP">
          {/* <option value={filterCity}>{filterCity}</option> */}
          {filterCity.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
