import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postPeluqueria } from "../Redux/actions/adminlog";
import { getServices } from "../Redux/actions/service";
import style from "./styles/RegisterAdmin.module.css";
import Select from "react-select";
let prov = require("../provincias.json");

const NuevaCuenta = () => {
  // State para iniciar sesión
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    schedule: "",
    services: [],
  });

  //extraer de usario
  const {
    name,
    username,
    password,
    passwordConfirm,
    address,
    city,
    phone,
    state,
    schedule,
    services,
  } = user;
  const currentUser = useSelector((state) => state.user);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getServices());
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //Validar que no haya campos vacíos

    if (!name || !username || !password || !passwordConfirm) {
      return;
    }
    //Contraseñas iguales
    if (password !== passwordConfirm) {
      return;
    }
    //Pasarlo al reducer
    dispatch(postPeluqueria(user, username, password));
    setUser({
      name: "",
      username: "",
      password: "",
      passwordConfirm: "",
      address: "",
    });
  };

  // Select Provincias
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
    setUser({ city: stateSelect, state: citySelect });
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
  console.log("state => " + stateSelect);

  // services
  let servicios = useSelector((state) => state.services);
  console.log(servicios);

  function handleSelect(e) {
    setUser({
      ...user,
      services: [...user.services, e.target.value],
    });
  }
  console.log(user.services);

  function handleDelete(e) {
    setUser({
      ...user,
      services: user.services.filter((t) => t !== e),
    });
  }
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Registro negocio</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre del negocio</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu Nombre"
              value={name}
              onChange={onChange}
              required
            />
          </div>

          <div className="campo-form">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="Tu Email"
              value={username}
              onChange={onChange}
              required
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Contraseña"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className="campo-form">
            <label htmlFor="passwordConfirm">Confirmar Contraseña</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Repite tu contraseña"
              value={passwordConfirm}
              onChange={onChange}
              required
            />
          </div>
          <div className="campo-form">
            <label htmlFor="address">Direccion</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Direccion"
              value={address}
              onChange={onChange}
              required
            />
          </div>
          {/* <SelectProvince className="campo-form"></SelectProvince> */}
          <div className="campo-form">
            <label>Provincia</label>
            <select
              name="city"
              id="city"
              onClick={changeCity}
              className={style.selectProv}
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
              className={style.selectProv}
            >
              {/* <option value={filterCity}>{filterCity}</option> */}
              <option disabled selected>
                Selecciona una ciudad
              </option>
              {filterCity.map((i) => {
                return <option value={i}>{i}</option>;
              })}
            </select>
          </div>
          <div className="campo-form">
            <label htmlFor="username">Telefono</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Telefono"
              value={phone}
              onChange={onChange}
              required
            />
          </div>
          <div className="campo-form">
            <label htmlFor="username">Calendario</label>
            <input
              type="text"
              id="schedule"
              name="schedule"
              placeholder="Calendario"
              value={schedule}
              onChange={onChange}
              required
            />
          </div>
          <div className="campo-form">
            <label>Servicios</label>
            <select onChange={handleSelect}>
              <option disabled selected>
                {" "}
                Seleccione los servicios brindados
              </option>
              {servicios &&
                servicios.map((t) => {
                  // console.log(t.name)
                  return (
                    <option value={t.name} label={t.name}>
                      {t.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="campo-form">
          {user.services.map(t => 
                <div>
                    <p>{t}</p>
                    <button onClick={()=>handleDelete(t)}>x</button>
                </div>
            )}
          </div>

          <div className="campo-form">
            <button type="submit" className="btn btn-primario btn-block">
              Registrar Cuenta
            </button>
          </div>
        </form>

        <Link to={"/login"} className="enlace-cuenta">
          {/*CAMBIAR A PATH LOGIN*/}
          Ya tengo cuenta
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
