import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAdminInitiate } from "../Redux/actions/adminlog";
import { loginGoogleAdminInitiate } from "../Redux/actions/adminlog";
import style from "./styles/RegisterAdmin.module.css";

const NuevaCuenta = () => {
  // State para iniciar sesión
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    address: "",
  });

  //extraer de usario
  const { name, email, password, passwordConfirm, address } = user;
  const currentUser = useSelector((state) => state.user);

  const navigate = useNavigate();
  useEffect(() => {
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
    if (!name || !email || !password || !passwordConfirm) {
      return;
    }
    //Contraseñas iguales
    if (password !== passwordConfirm) {
      return;
    }
    //Pasarlo al reducer
    dispatch(registerAdminInitiate(name, email, password));
    setUser({
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      address: "",
    });
  };

  const loginGoogle = () => {
    dispatch(loginGoogleAdminInitiate());
  };
  return (
    <div>
      <div>
        <div className={style.allLogin}>
          <div className={style.contenedorFormulario}>
            <h1>Registrar Negocio</h1>
            <form onSubmit={onSubmit}>
              {/* <button onClick={(e)=>{activeAdmin(e)}}>Soy Peluqueria</button> */}
              <div>
                <div className={style.formGroup}>
                  <label class="form-label mt-4" htmlFor="name">
                    Nombre del negocio
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu Nombre"
                    value={name}
                    className={style.formControled}
                    onChange={onChange}
                    required
                  />
                </div>
                <div style={{display:'flex'}}>
                <div>
                  <div className={style.formGroup}>
                    <label htmlFor="address" class="form-label mt-4">Direccion</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Direccion"
                      value={address}
                      onChange={onChange}
                      className={style.formControled}
                      required
                    />
                  </div>
                  <div className={style.formGroup}>
                    <label htmlFor="email" class="form-label mt-4">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      className={style.formControled}
                      aria-describedby="emailHelp"
                      placeholder="ejemplo@hairup.com"
                      required
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      Nunca compartiremos su correo electrónico con nadie más.
                    </small>
                  </div>
                </div>

                <div>
                  <div className={style.formGroup}>
                    <label htmlFor="password" class="form-label mt-4">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      className={style.formControled}
                      placeholder="********"
                      required
                    />
                  </div>
                  <div className={style.formGroup}>
                    <label htmlFor="passwordConfirm" class="form-label mt-4">
                      Confirmar Contraseña
                    </label>
                    <input
                      type="password"
                      id="passwordConfirm"
                      name="passwordConfirm"
                      placeholder="Repite tu contraseña"
                      value={passwordConfirm}
                      onChange={onChange}
                      className={style.formControled}
                      required
                    />
                  </div>
                </div>
                </div>
              </div>
              <Link to={"/login"}>
                <p className={style.linkRegister}>Ya tengo cuenta</p>
              </Link>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <div className={style.contenedorBotones}>
                <button type="submit" className="btn btn-outline-primary">
                  Registrar Cuenta
                </button>
              </div>
              <div className={style.contenedorBotones}>
                <input
                  type="submit"
                  className="btn btn-outline-primary"
                  value="Registrarse con Google"
                  onClick={loginGoogle}
                />
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevaCuenta;
