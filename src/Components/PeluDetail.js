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
                Nuestros Estilistas:
              </h5>
              {/* mapeo estilistas */}
              <h5>
                <FontAwesomeIcon icon={faCut} className="mx-3" />
                Servicios: {pelu[0].services.lenght >0? (pelu[0].services.map()):("Lo sentimos, no encontramos ningún servicio")}
              </h5>
            </div>
            {/* fin infocol */}
          </div>
          {/* reviews */}
          <div>
            
          </div>
          {/* finreviews */}
          {/* fin peluDetailGrid */}
        </div>
      )}
    </div>
  );
};

export default PeluDetail;
