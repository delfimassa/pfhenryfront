import React, { useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteFavorite, postFavorite } from "../../Redux/actions/favorite";
import "./Favorite.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";

export default function Favorite() {
  const filteredPeluquerias = useSelector((state) => state.filteredPeluquerias);
  const userMongo = useSelector((state) => state.userMongo);

  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  const [pelu, setPelu] = useState(null);
  let { id } = useParams();

  let sacarLosMilYUnArrays = filteredPeluquerias.map((e) => {
    let hola = e[0];
    return hola;
  });

  // const filterFavs = sacarLosMilYUnArrays.filter((elem, rep) => {
  // return sacarLosMilYUnArrays.indexOf(elem) == rep;
  // })
  const filterFavs = sacarLosMilYUnArrays.filter(
    (elem) => typeof elem !== "undefined"
  );

  useEffect(() => {
    axios.get(`http://localhost:4000/peluqueria/${id}`).then((response) => {
      setPelu([response.data]);
    });
    for (let i = 0; i < filterFavs.length; i++) {
      if (filterFavs[i]._id == id) {
        setFavorite(true);
        break;
      } else {
        setFavorite(false);
      }
    }
  }, []);

  const filtradoDeFavs = userMongo.favs.map((elem) => {
    if (elem.peluqueria === id) {
      return elem._id;
    }
  });

  const filterFiltradoDeFavs = filtradoDeFavs.filter(
    (e) => typeof e !== "undefined"
  );

  const idDelete = filterFiltradoDeFavs[0];
  console.log("filtrrrrrrrrado de fav: ", idDelete);

  const peluqueria = pelu == null ? "no hay" : pelu[0]._id;

  const client = userMongo.username;

  const favoritesChange = () => {
    setFavorite(!favorite);
    // console.log('favoritos : ', favorite)
    // console.log('pelu : ', pelu)

    if (!favorite) {
      console.log("client, peluqueria :", client, peluqueria);
      dispatch(postFavorite(client, peluqueria));
    } else {
      console.log("entra aca???", idDelete);
      dispatch(deleteFavorite(idDelete));
    }
  };

  return (
    <div>
      {favorite === false ? (
        <button onClick={favoritesChange} className="favorite">
          <FontAwesomeIcon icon={faHeart} className="mx-3" />
        </button>
      ) : (
        <button onClick={favoritesChange} className="favorite-red">
          <FontAwesomeIcon icon={faHeart} className="mx-3" />
        </button>
      )}
    </div>
  );
}
