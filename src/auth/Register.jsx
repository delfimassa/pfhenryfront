import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { registerInitiate, loginGoogleInitiate } from "../Redux/actions/register";
import { signInWithGoogle } from "../firebase-config";

import Swal from "sweetalert2";

// {
//   Swal.fire(
//     "Enhorabuena!",
//     "Tu consulta fue enviada correctamente.",
//     "success"
//   );
//   e.target.reset();
//   setValidated(false);
// },
// (error) => {
//   Swal.fire(
//     "Ups!",
//     "Hubo un problema al enviar tu consulta. Por favor intentalo nuevamente.",
//     "error"
//   );
// }

const NuevaCuenta = () => {
  // State para iniciar sesión
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  //extraer de usario
  const { name, email, password, passwordConfirm } = user;
  const currentUser = useSelector((state) => state.user)

  const navigate = useNavigate()
  useEffect(() => {
    if(currentUser) {
      navigate("/home")
    }
  }, [currentUser, navigate])

  const dispatch = useDispatch();

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loginGoogle = () => {
    dispatch(loginGoogleInitiate())
  }

  const onSubmit = (e) => {
    e.preventDefault();
    //Validar que no haya campos vacíos
    if(!name || !email || !password || !passwordConfirm){
      return
    }
    //Contraseñas iguales
    if(password !== passwordConfirm){
      return;
    }
    //Pasarlo al reducer
    dispatch(registerInitiate(name, email, password));
    setUser({name: "", email: "", password: "", passwordConfirm: ""});
  }; 
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Registrarse</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
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
            <button
              type="submit"
              className="btn btn-primario btn-block" 
            >Registrar Cuenta</button>
          </div>
        </form>
        <div className="campo-form">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Registrarse con Google"
            onClick={loginGoogle}
          />
        </div>

        <Link to={"/login"} className="enlace-cuenta">
          {/*CAMBIAR A PATH LOGIN*/}
          Ya tengo cuenta
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
