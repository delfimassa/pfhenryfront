import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Peludetail.css";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faClock,
  faEnvelope,
  faCut,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Rating } from "react-simple-star-rating";
import Favorite from "./Favorite/Favorite";
import Swal from "sweetalert2";
import { connect, useSelector, useDispatch } from "react-redux";


const PeluDetail = () => {
  const currentUser = useSelector((state) => state.user);
  console.log(`user desde peludetail: ${currentUser.email}`);   
  
  const [pelu, setPelu] = useState(null);
  let { id } = useParams();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState({
    rating: 0,
    client: `${currentUser.email}`, // email del cliente
    comment: "",
    peluqueria: {id},
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
      // console.log(pelu);
    });
  }, []);

  const handleRating = (rate) => {
    setRating(rate);
    if (rate == 20) {
      setReview({
        ...review,
        rating: 1,
      });
    }
    if (rate == 40) {
      setReview({
        ...review,
        rating: 2,
      });
    }
    if (rate == 60) {
      setReview({
        ...review,
        rating: 3,
      });
    }
    if (rate == 80) {
      setReview({
        ...review,
        rating: 4,
      });
    }
    if (rate == 100) {
      setReview({
        ...review,
        rating: 5,
      });
    }
    console.log(review);
  };

  function handleChange(e) {
    setReview({
      ...review,
      comment: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(review);
    try {
      await axios.post("http://localhost:4000/review/create", review);
      Swal.fire("", "Muchas gracias por tu comentario", "success");
    } catch (err) {
      console.log(err);
      Swal.fire(
        "",
        "Lo sentimos, solo puedes dejar tu opinion una vez por cada lugar",
        "error"
      );
    }
    setReview({
      rating: 0,
      client: currentUser.email,
      comment: "",
      peluqueria: id,
    });
    setRating(0);
  }

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
              <Rating
                    fillColor={"#1a202d"}
                    allowHalfIcon={true}
                    ratingValue={pelu[0].rating * 20}
                    readonly={true}
                  size={"2rem"}/>
              </div>
              <img
                className="imgPelu mb-0  w-100 h-100"
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
                  {/* <Stars
                    stars={review.rating}
                    outOf={5}
                    full={"#1a202d"}
                    empty={"#edf2f6"}
                    stroke={"#1a202d"}
                  /> */}
                  <Rating
                    fillColor={"#1a202d"}
                    allowHalfIcon={true}
                    ratingValue={pelu[0].rating * 20}
                    readonly={true}
                  size={"2rem"}/>
                </div>
                <Favorite />
              </div>
              <h5 className="datoPelu">
                <FontAwesomeIcon icon={faClock} className="mx-3" />
                Horario de atención: {pelu[0].schedule}
              </h5>
              <h5 className="datoPelu">
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
              <h5 className="datoPelu">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mx-3" />{" "}
                Dirección: {pelu[0].address}, {pelu[0].city}, {pelu[0].state}.
              </h5>
              <h5>
                <FontAwesomeIcon icon={faEnvelope} className="mx-3" />
                E-mail: {pelu[0].username}
              </h5>
              <h5 className="datoPelu">
                <FontAwesomeIcon icon={faUsers} className="mx-3" />
                Nuestros Estilistas:{" "}
                {pelu[0].stylists.lenght > 0 || pelu !==null
                  ? pelu[0].stylists.map((s) => s.name)
                  : "Lo sentimos, no encontramos ningún nombre"}
              </h5>
              {/* mapeo estilistas */}
              <h5 className="datoPelu">
                <FontAwesomeIcon icon={faCut} className="mx-3" />
                Servicios:{" "}
                {pelu[0].services.lenght > 0 || pelu !==null
                  ? pelu[0].services.map((s) => <p>{s._id}, </p>)
                  : "Lo sentimos, no encontramos ningún servicio"}
              </h5>
            </div>
            {/* fin infocol */}
          </div>
          {/* reviews */}
          <div className="reviewsZone mt-5 pt-5">
            <div className="colDejatureview">
              <h2 className="d-flex">Opiniones</h2>
              <h5 className="mb-2 p-0 datoPelu">
                Deja tu opinión sobre esta peluquería aqui:{" "}
              </h5>
              <form onSubmit={handleSubmit}>
                <p>
                  Puntuación:{" "}
                  <Rating
                    fillColor={"#1a202d"}
                    allowHalfIcon={false}
                    ratingValue={rating}
                    onClick={handleRating}
                    size={"2rem"}
                  />
                </p>
                <div className="contenedorTextArea">
                  <textarea
                    onChange={(e) => handleChange(e)}
                    className="textareareviews"
                    placeholder="Cuentanos que te pareció este lugar aqui..."
                    value={review.comment}
                  ></textarea>
                </div>
                <button
                  className="btn btn-primary mt-0 d-flex btnEnviarReview"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </div>
            <div className="colLeelasreviews">
              {pelu[0].reviews.length > 0 ? (
                pelu[0].reviews.map((r) => (
                  <div className="commentBox">
                    <h5>{r.username}</h5>
                    <Rating
                    fillColor={"#1a202d"}
                    allowHalfIcon={true}
                    ratingValue={r.rating * 20}
                    readonly={true}
                  size={"2rem"}/>
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
