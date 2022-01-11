import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loginInitiate,
  logoutInitiate,
  loginGoogleInitiate,
} from "../Redux/actions/register";
import { loginAdminInitiate } from "../Redux/actions/adminlog";
import { signInWithGoogle } from "../firebase-config";
import { Switch } from "antd";
import style from "./styles/Login.module.css";

const Login = () => {
  // State para iniciar sesión
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  //extraer de usario
  const { email, password } = state;

  const currentUser = useSelector((state) => state.user);
  // const adminUserr = useSelector((state) => state.adminUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

  const onChange = (e) => {
    setState({
      ...state,
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
    if (toggle) {
      dispatch(loginAdminInitiate(email, password));
    } else {
      dispatch(loginInitiate(email, password));
    }
    // dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  // Logout
  const logout = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    } else {
      alert("No estas logueado");
    }
    console.log(currentUser);
  };

  const loginGoogle = () => {
    dispatch(loginGoogleInitiate());
  };

  return (
    <div className={style.allLogin}>
      <div className={style.contenedorFormulario}>
        <div>
          <h1>Hola de nuevo!</h1>
          <div className={style.checkbox}>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={toggler}
              />
              {toggle ? (
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  Negocio
                </label>
              ) : (
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  Cliente
                </label>
              )}
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          {/* <button onClick={(e)=>{activeAdmin(e)}}>Soy Peluqueria</button> */}
          <div class="form-group">
            <label htmlFor="email" class="form-label mt-4">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="ejemplo@hairup.com"
            />
            <small id="emailHelp" class="form-text text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </small>
          </div>
          <div class="form-group">
            <label htmlFor="email" class="form-label mt-4">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              class="form-control"
              placeholder="********"
            />
          </div>
          <Link to={"/register"}>
            <p className={style.linkRegister}>Registrarme</p>
          </Link>
          <div className={style.contenedorBotones}>
            <button type="submit" class="btn btn-outline-primary">
              Iniciar Sesion
            </button>
            <button
              type="submit"
              value="Iniciar Sesión con Google"
              onClick={loginGoogle}
              class="btn btn-outline-primary"
            >
              Iniciar con Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
