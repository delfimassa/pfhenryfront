import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector} from "react-redux";
import {
  faUserCircle,
  faShoppingCart,
  faStar,
  faStore,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { logoutInitiate } from "../../Redux/actions/register";

const Navbar = ({}) => {
const navigate = useNavigate();
const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const adminUser = useSelector((state) => state.adminUser);

  useEffect(()=>{
    if(currentUser){
      navigate("/home")
    } 
    // else{
    //   navigate("/")
    // }  
  }, [currentUser, navigate])

  const logout = () => {
    if(currentUser){
      dispatch(logoutInitiate())
    }else{
      alert("No estas logueado")
    }
    console.log(currentUser)
   };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink to="/home" className="navbar-brand" activeClassName="selected" >
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
          <div className="collapse navbar-collapse " id="navbarColor01">
            {currentUser ? (

              adminUser ? (
              <ul className="navbar-nav">
                {/* SI ES PELU */}
                <li className="nav-item">
                  <NavLink to="/admin" className="nav-link" activeClassName="selected" >
                    <FontAwesomeIcon icon={faUserShield} className="mx-1" />
                    Administrar
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn m-0" onClick={(e) => { logout(e) }} >
                    Log out
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ">
                {/* SI ES  CLIENTE */}
                <li className="nav-item">
                  <NavLink to="/favoritos" className="nav-link" activeClassName="selected" >
                    <FontAwesomeIcon icon={faStar} className="mx-1" />Tus Favoritos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/carrito" className="nav-link" activeClassName="selected" >
                    <FontAwesomeIcon icon={faShoppingCart} className="mx-1" />Carrito
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
                    <NavLink to="/perfil" className="dropdown-item" activeClassName="selected" >
                      Perfil
                    </NavLink>
                    <NavLink to="/tuscompras" className="dropdown-item" activeClassName="selected" >
                      Tus compras
                    </NavLink>
                    <button className="dropdown-item" onClick={(e) => {logout(e)}}>
                      Log out
                    </button>
                  </div>
                </li>
              </ul>
             
            ))
             : (<ul className="navbar-nav">
             <li className="nav-item">
               <NavLink to="/registersalon" className="nav-link" activeClassName="selected" >
                 <FontAwesomeIcon
                   icon={faStore}
                   className="mx-1"
                 ></FontAwesomeIcon>
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
           </ul>)}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
