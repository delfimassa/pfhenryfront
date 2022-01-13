import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postPeluqueria } from "../Redux/actions/adminlog";
import SelectProvince from "../Components/SelectProvince";

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
    services: []
  });

  //extraer de usario
  const { name, username, password, passwordConfirm, address, city, phone, state, schedule } = user;
  const currentUser = useSelector((state) => state.user)

  const navigate = useNavigate();
  useEffect(() => {
    if(currentUser) {
      navigate("/home")
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

    if(!name || !username || !password || !passwordConfirm){
      return
    }
    //Contraseñas iguales
    if (password !== passwordConfirm) {
      return;
    }
    //Pasarlo al reducer
    dispatch(postPeluqueria(user, username, password))
    setUser({name: "", username: "", password: "", passwordConfirm: "", address: ""});
  }; 

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
          <SelectProvince className="campo-form"></SelectProvince>
          {/* <div className="campo-form">
            <label htmlFor="username">Ciudad</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Ciudad"
              value={city}
              onChange={onChange}
              required
            />
          </div>
          <div className="campo-form">
            <label htmlFor="username">Provicia</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Provicia"
              value={state}
              onChange={onChange}
              required
            />
          </div> */}
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
            <button
              type="submit"
              className="btn btn-primario btn-block" 
            >Registrar Cuenta</button>
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
