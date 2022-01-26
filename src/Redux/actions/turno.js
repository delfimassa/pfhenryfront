import axios from "axios";

import {
    POST_TURNO,
  } from "../types/types";

export function postTurno(payload) {
    return async function (dispatch) {
      const response = await axios
        .post("http://localhost:4000/turno/create", payload)
        .then((pelus) => {
          dispatch({
            type: POST_TURNO,
            payload: pelus,
          });
        });
      return response;
    };
  }
  