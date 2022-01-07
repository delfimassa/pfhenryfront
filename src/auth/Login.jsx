import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginInitiate } from "../Redux/actions/register";

const Login = () => {
  // State para iniciar sesión
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //extraer de usario
  const { email, password } = user;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando usuario quiere iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no haya campos vacíos
    if (!email || !password) {
      return;
    }
    //Pasarlo al reducer
    dispatch(loginInitiate(email, password));
    setUser({ email: "", password: "" });
  };

  //Iniciar sesión con google
  const loginGoogle = () => {};

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
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
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <div className="campo-form">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Iniciar Sesión con Google"
            onClick={loginGoogle}
          />
        </div>

        <Link to={"/register"} className="enlace-cuenta">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default Login;
