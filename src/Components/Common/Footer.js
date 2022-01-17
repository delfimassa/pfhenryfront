import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

const Footer = () => {
  return (
    <div className="bg-beige text-center py-5 text-primary mt-5">
        <div className="mx-5">
      <h4>Creado con ♥ por alumnos del grupo 14 del cohorte 19a en Henry</h4>
      <h3>
        <FontAwesomeIcon icon={faFacebook} className="mx-1"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className="mx-1"></FontAwesomeIcon>
      </h3>
      <p>© Todos los derechos reservados</p>
    </div></div>
  );
};

export default Footer;
