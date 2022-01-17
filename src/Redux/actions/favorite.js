import axios from "axios";
import { POST_FAVORITE, DELETE_FAVORITE } from "../types/types";

export function postFavorite(client, peluqueria) {
  return async function (dispatch) {
    const response = await axios
      .post("http://localhost:4000/favorite/create", {client, peluqueria})
      .then((favorites) => {
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