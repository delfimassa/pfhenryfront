import React, {useState, useEffect} from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Rating } from "react-simple-star-rating";
import {Stars} from "simple-rating-stars"

function Card({ name, address, city, state, rating, avatar, schedule, phone }) {
  // const [ratingCien, setRatingCien] = useState(rating*20);
  // console.log('rating 100: ', ratingCien)
  console.log(rating)
  return (
    <div className="parent-card row mb-3 p-0">
      <div className="containerImg m-0 p-0 col-md-4 col-sm-12">
        {
          <img className="imagenes w-100" src={avatar? avatar : "https://images.pexels.com/photos/3993125/pexels-photo-3993125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="Avatar" /> 
          // <img
          //   className="imagenes w-100"
          //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakURH-9kvEQgPlj0sZfnAmMhnS6V9t_Tglw&usqp=CAU"
          //   alt="Avatar"
          // />
        }
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
          initialValue={rating}
          ratingValue={rating}
          readonly={true}
          size={"20px"}
        />
      </div>
    </div>
  );
}

export default Card;
