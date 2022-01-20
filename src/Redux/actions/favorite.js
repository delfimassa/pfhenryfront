import axios from "axios";
import { POST_FAVORITE, DELETE_FAVORITE, GET_FAV } from "../types/types";

export function getFavorites(data) {
  return{
    type: GET_FAV,
    payload: data
  } //aca podriamos pasar ese usuario filtrado y usarlo para comparar el id 
}

export function postFavorite(client, peluqueria) {
  return async function (dispatch) {
    const response = await axios
      .post("http://localhost:4000/favorite/create", {client, peluqueria})
      .then((favorites) => {
        console.log('asdas', favorites);
        dispatch({
          type: POST_FAVORITE,
          payload: favorites,
        });
      });
    return response;
  };
}

export function deleteFavorite(payload) {
  return async function (dispatch) {
    const response = await axios
      .delete("http://localhost:4000/favorite/delete", payload)
      .then((favorites) => {
        dispatch({
          type: DELETE_FAVORITE,
          payload: favorites,
        });
      });
    return response;
  };
}

// export function getFav(data){
//   return{
//     type: GET_FAV,
//     payload: data
//   }
// }