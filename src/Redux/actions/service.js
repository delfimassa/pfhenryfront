import axios from "axios";
import { FILTER_SERVICES, GET_SERVICES } from "../types/types";

export function getServices() {
  return function (dispatch) {
    axios
      .get("http://localhost:4000/service")
      .then((response) => {
        dispatch({
          type: GET_SERVICES,
          payload: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function filterServices(filter){
    return{
        type: FILTER_SERVICES,
        payload: filter
    }
}
