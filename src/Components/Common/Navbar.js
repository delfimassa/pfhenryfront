import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faShoppingCart, faStar, faStore } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  const cerrarSesion = () => {
    setShowLogin(false);
    props.setAdminUser(false);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink
            to="/home"
            className="navbar-brand"
            activeClassName="selected"
          >
            Hairup
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              {/* <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li> */}
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" activeClassName="selected">
              <FontAwesomeIcon icon={faStore} className="mx-1"></FontAwesomeIcon>
                  Registra tu negocio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeClassName="selected">
                  Log in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" activeClassName="selected">
                  Registrarse
                </NavLink>
              </li>

              {/* SI ESTA LOGUEADO EL USER COMO CLIENTE */}
              <li className="nav-item">
              <NavLink to="/favoritos" className="nav-link" activeClassName="selected">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/carrito" className="nav-link" activeClassName="selected">
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                </a>
                <div className="dropdown-menu">
                  {/* SI ES CLIENTE */}
                <NavLink to="/perfil" className="dropdown-item" activeClassName="selected">
                  Perfil
                </NavLink>
                <NavLink to="/tuscompras" className="dropdown-item" activeClassName="selected">
                  Tus compras
                </NavLink>
                {/* SI ES PELU */}
                <NavLink to="/admin" className="dropdown-item" activeClassName="selected">
                  Administrar
                </NavLink>
                {/* SIEMPRE */}
                  <button className="dropdown-item" >
                    Log out
                    {/* aqui va el onclick={cerrarSesion()} pero me esta haciendo que no se muestre nada */}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
