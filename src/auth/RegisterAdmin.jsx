import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postPeluqueria } from "../Redux/actions/adminlog";
import style from "./styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {getServices} from "../Redux/actions/service"


let prov = require("../provincias.json");

const NuevaCuenta = () => {
  const [showPassword, setShowPassword] = useState("ocultar");

  function mostrarOcultar(flag, e) {
    e.preventDefault();
    setShowPassword(flag);
  }

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
    time: "",
    services: [],
  });

  const [nameServ, setNameServ] = useState([])
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
    time,
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
    // setUser({
    //   name: "",
    //   username: "",
    //   password: "",
    //   passwordConfirm: "",
    //   address: "",
    // });
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
    setUser({...user , city: stateSelect, state: citySelect})
  };

  console.log(user);

  const searchCity = provDepartamentos.map((e) => {
    if (e.provincia.nombre == citySelect) {
      return e.nombre;
    }
  });

  const filterCity = searchCity.filter((elem, rep) => {
    return searchCity.indexOf(elem) == rep;
  });

  
  // console.log("state => " + stateSelect)

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
    // let nameTarget = e.target.getAttribute(value)
    console.log("target", e.target)
    // setNameServ([...nameServ, e.target.id])
    // setUser({...user, [user.services : e.target.value]})
    // setNameServ(nameServ => [...nameServ, e.target.name]);
  }
  console.log(user.services);

  function handleDelete(e) {
    setUser({
      ...user,
      services: user.services.filter((t) => t !== e),
    });
    setNameServ([nameServ.pop(e)])
  }

  console.log("nameServ" + nameServ)
  return (
    <div className={style.allLogin}>
      <div  className={`${style.contenedorFormulario} ${style.contenedorFormRegistro}`}>
        <h1>Registra tu negocio</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name"  className="form-label mt-4">Nombre del negocio</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu Nombre"
              value={name}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="username"  className="form-label mt-4">Email</label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="Tu Email"
              value={username}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"  className="form-label mt-4">Contraseña</label>
            {showPassword === "mostrar" ? (
              <div>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Tu contraseña"
                />
                <div className="form-group">
                  <label htmlFor="passwordConfirm" className="form-label mt-4">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="text"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="Repite tu contraseña"
                    value={passwordConfirm}
                    onChange={onChange}
                    required
                    className="form-control"
                  />
                </div>

                <button
                  className={`btn m-0 px-1 ${style.botonMostrarPass}`}
                  onClick={(e) => {
                    mostrarOcultar("ocultar", e);
                  }}
                >
                  {" "}
                  <small className="text-muted">
                    <FontAwesomeIcon icon={faEyeSlash} className="mx-1" />
                    Ocultar contraseña
                  </small>
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="form-control"
                  placeholder="**********"
                />

                <div className="form-group">
                  <label htmlFor="passwordConfirm" className="form-label mt-4">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="**********"
                    value={passwordConfirm}
                    onChange={onChange}
                    required
                    className="form-control"
                  />
                </div>
                <button
                  className={`btn m-0 px-1 ${style.botonMostrarPass}`}
                  onClick={(e) => {
                    mostrarOcultar("mostrar", e);
                  }}
                >
                  <small className=" text-muted">
                    <FontAwesomeIcon icon={faEye} className="mx-1" />
                    Mostrar contraseña
                  </small>
                </button>
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="address"  className="form-label mt-4">Direccion</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Direccion"
              value={address}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
          {/* <SelectProvince className="campo-form"></SelectProvince> */}
          <div className="form-group">
            <label  className="form-label mt-4">Provincia</label>
            <select name="city" id="city" onClick={changeCity} className="">
            <option disabled selected>Selecciona una provincia</option>
              {filteredProv.map((i) => {
                return <option value={i}>{i}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label  className="form-label mt-4">Ciudad</label>
            <select name="state" id="state" onClick={changeState} className="h">
              {/* <option value={filterCity}>{filterCity}</option> */}
              <option disabled selected>
                Selecciona una ciudad
              </option>
              {filterCity.map((i) => {
                return <option value={i}>{i}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="username"  className="form-label mt-4">Telefono</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Telefono"
              value={phone}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username"  className="form-label mt-4">Calendario</label>
            <input
              type="text"
              id="schedule"
              name="schedule"
              placeholder="Calendario"
              value={schedule}
              onChange={onChange}
              required
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="username" className="form-label mt-4">Tiempo</label>
            <input 
              type="number"
              id="time"
              name="time"
              placeholder="Tiempo"
              value={time}
              onChange={onChange}
              required
              className="form-control"              
            />
          </div>
          <div className="form-group">
            <label>Servicios</label>
            <select value={user.services} onChange={(e) => {handleSelect(e)}}>
              <option disabled selected>
                {" "}
                Seleccione los servicios brindados
              </option>
              {servicios &&
                servicios.map((t) => {
                  // console.log(t.name)
                  return (
                    <option key={t.name} value={t.name} label={t.name} name={t.name} id={t.name}>
                      {t.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-group d-flex ">
          { user.services && user.services.map(t => 
                <div className="d-flex mx-2 align-items-center">
                    <p className="m-0 p-0">{t}</p>
                    <button className="m-1 px-1 py-0 btn btn-primary" onClick={()=>handleDelete(t)}>x</button>
                </div>
            )
            }
          </div>

          <div className={style.contenedorBotones}> 
            <button type="submit" className="btn btn-outline-primary mb-3">
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
