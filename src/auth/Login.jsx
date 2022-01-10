import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginInitiate, logoutInitiate, loginGoogleInitiate } from "../Redux/actions/register";
import { loginAdminInitiate } from "../Redux/actions/adminlog";
import { signInWithGoogle } from "../firebase-config";
import {Switch} from 'antd'

const Login = () => {
  // State para iniciar sesión
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [toggle, setToggle] = useState(false)

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true)
  }

  //extraer de usario
  const { email, password } = state;

  const currentUser = useSelector((state) => state.user)
  // const adminUserr = useSelector((state) => state.adminUser);

  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    if(currentUser) {
      navigate("/home")
    }
  }, [currentUser, navigate])

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
    if(toggle){
      dispatch(loginAdminInitiate(email, password));
    } else{
      dispatch(loginInitiate(email, password));
    }
    // dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  // Logout
  const logout = () => {
    if(currentUser){
      dispatch(logoutInitiate())
    }else{
      alert("No estas logueado")
    }
    console.log(currentUser)
   };

   const loginGoogle = () => {
     dispatch(loginGoogleInitiate())
   }

  return (
    <div className="form-usuario">

      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          {/* <button onClick={(e)=>{activeAdmin(e)}}>Soy Peluqueria</button> */}
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
          <div>
            <Switch onClick={toggler}/>
            {toggle ? <span>Soy peluqueria</span> : <span>Soy usuario</span>}
          </div>
          <div className="campo-form">
            <button className="btn btn-primario btn-block" type="submit">Iniciar Sesion</button>
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
