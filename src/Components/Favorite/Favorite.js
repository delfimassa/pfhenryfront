import React, { useState, useEffect } from "react";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch} from "react-redux";
import { deleteFavorite, postFavorite } from "../../Redux/actions/favorite";
import './Favorite.css'
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";

export default function Favorite() {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  const [pelu, setPelu] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
    });
  }, []); 

  const peluqueria = pelu == null ? "no hay" : pelu[0]._id
  // console.log(peluqueria)

  const currentUser = useSelector((state) => state.user);
  console.log(currentUser.email)
  
  const client = currentUser.email

  
  const favoritesChange = () =>{
      setFavorite(!favorite)
      console.log(favorite)

      if(!favorite) {
        dispatch(postFavorite(client, peluqueria))
      } else {
        dispatch(deleteFavorite(favorite))
      }
  }
  

  return (
    <div>{ !favorite ? (
      <button onClick={favoritesChange} className="favorite">
        <FontAwesomeIcon icon={faHeart} className="mx-3"/>
      </button>
    ) : (
      <button onClick={favoritesChange} className="favorite-red">
        <FontAwesomeIcon icon={faHeart} className="mx-3"/>
      </button>
    )}
      
    </div>
  );
}