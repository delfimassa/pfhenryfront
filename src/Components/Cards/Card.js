import React, {useState, useEffect} from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Rating } from "react-simple-star-rating";

function Card({ name, address, city, state, rating, avatar, schedule, phone }) {
  const [ratingCien, setRatingCien] = useState(rating*20);
  
  return (
    <div className="parent-card row mb-3 p-0">
      <div className="containerImg m-0 p-0 col-md-4 col-sm-12">
        {avatar !== 0 ? (
          <img className="imagenes w-100" src={avatar} alt="Avatar" />
        ) : (
          <img
            className="imagenes w-100"
            src="https://image.freepik.com/foto-gratis/tijeras-peluquero-peluqueria-hombre-brutal-bigote-macho-peluqueria-corte-pelo-afeitado-mans-corte-pelo-peluqueria-perfil-hombre-barba-elegante-tijeras-hombre-barbudo-aislado-espacio-blanco_264277-227.jpg"
            alt="Avatar"
          />
        )}
      </div>

      <div className="card-body col-md-8">
        <h4>{name}</h4>

        <h6 className="my-4 d-flex align-items-center">
          <FontAwesomeIcon icon={faClock} className="mx-2" /> {schedule}
        </h6>
        <p className=" d-flex align-items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mx-2" /> {address} -{" "}
          {city} - {state}
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=${phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="d-flex align-items-center phonepelu">
            <FontAwesomeIcon icon={faPhoneAlt} className="mx-2" /> {phone}
          </p>
        </a>
        <Rating
          fillColor={"#1a202d"}
          allowHalfIcon={true}
          ratingValue={ratingCien}
          readonly={true}
          size={"20px"}
        />
      </div>
    </div>
  );
}

export default Card;
