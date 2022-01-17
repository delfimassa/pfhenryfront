import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Peludetail.css";
import Loading from "./Loading";
import Stars from "simple-rating-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faClock,
  faEnvelope,
  faCut,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Rating } from 'react-simple-star-rating';

const PeluDetail = () => {
  const [pelu, setPelu] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
    });
  }, []);
  console.log("pelu", pelu);

  return (
    <div>
      {pelu == null ? (
        <Loading />
      ) : (
        <div className="bg-peludetail">
          <div className="peluDetailGrid">
            <div className="mb-0 text-center">
              <h1 className="nomd nolg noxl">{pelu[0].name}</h1>
              <div className="parentSatrs nols nomd noxl mb-3">
                <Stars
                  stars={pelu[0].rating}
                  outOf={5}
                  full={"#1a202d"}
                  empty={"#edf2f6"}
                  stroke={"#1a202d"}
                />
              </div>
              <img
                className="imgPelu mb-0"
                width="100%"
                height="100%"
                src={pelu[0].avatar}
                alt="logo de la peluqueria"
              />
            </div>

            <div className="infoColumn">
              <div className="d-flex align-items-center mb-4">
                <h1 className="pb-0 mb-0 nosm noxs">{pelu[0].name}</h1>
                <div className="mx-5 nosm noxs">
                  <Stars
                    stars={pelu[0].rating}
                    outOf={5}
                    full={"#1a202d"}
                    empty={"#edf2f6"}
                    stroke={"#1a202d"}
                  />
                </div>
              </div>
              <h5>
                <FontAwesomeIcon icon={faClock} className="mx-3" />
                Horario de atención: {pelu[0].schedule}
              </h5>
              <h5>
                <a
                  href={`https://api.whatsapp.com/send?phone=${pelu[0].phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="phonepelu"
                >
                  <FontAwesomeIcon icon={faPhoneAlt} className="mx-3" />
                  Teléfono: {pelu[0].phone}
                </a>
              </h5>
              <h5>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mx-3" />{" "}
                Dirección: {pelu[0].address}, {pelu[0].city}, {pelu[0].state}.
              </h5>
              <h5>
                <FontAwesomeIcon icon={faEnvelope} className="mx-3" />
                E-mail: {pelu[0].username}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faUsers} className="mx-3" />
                Nuestros Estilistas:{" "}
                {pelu[0].stylists.lenght > 0
                  ? pelu[0].stylists.map()
                  : "Lo sentimos, no encontramos ningún nombre"}
              </h5>
              {/* mapeo estilistas */}
              <h5>
                <FontAwesomeIcon icon={faCut} className="mx-3" />
                Servicios:{" "}
                {pelu[0].services.lenght > 0
                  ? pelu[0].services.map((s) => <p>{s.name}, </p>)
                  : "Lo sentimos, no encontramos ningún servicio"}
              </h5>
            </div>
            {/* fin infocol */}
          </div>
          {/* reviews */}
          <div className="reviewsZone mt-5 pt-5">
            <div className="colDejatureview">
              <h2 className="d-flex">Opiniones</h2>
              <h5 className="mb-2 p-0">
                Deja tu opinión sobre esta peluquería aqui:{" "}
              </h5>
              <p>
                Puntuación:{" "}
                {/* <Stars
                  stars={0}
                  outOf={5}
                  full={"#1a202d"}
                  empty={"#edf2f6"}
                  stroke={"#1a202d"}
                /> */}
                 <Rating fillColor={"#1a202d"} />
              </p>
              <div className="contenedorTextArea">
                <textarea
                  className="textareareviews"
                  placeholder="Cuentanos que te pareció este lugar aqui..."
                ></textarea>
              </div>
              <button className="btn btn-primary mt-0 d-flex btnEnviarReview">
                Enviar
              </button>
            </div>
            <div className="colLeelasreviews">
              {pelu[0].reviews.length > 0 ? (
                pelu[0].reviews.map((r) => (
                  <div className="commentBox">
                    <h5>{r.client}</h5>
                    <Stars
                      stars={r.rating}
                      outOf={5}
                      full={"#1a202d"}
                      empty={"#edf2f6"}
                      stroke={"#1a202d"}
                    />
                    <p>{r.comment}</p>
                  </div>
                ))
              ) : (
                <div className="commentBox">
                  <p>
                    Parece que aún no hay opiniones sobre esta peluquería...
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* finreviews */}
          {/* fin peluDetailGrid */}
        </div>
      )}
    </div>
  );
};

export default PeluDetail;
