import axios from "axios";
import { GET_PELUQUERIAS, GET_PELUQUERIA_BY_ID } from "../types/types";

export function getPeluquerias() {
  return function (dispatch) {
    // axios.get(`http://localhost:4000/peluqueria?name=${input}`)
    // .then((data) => {
    //     dispatch({
    //         type: GET_PELUQUERIAS,
    //         payload: data.data

    axios
      .get("http://localhost:4000/peluqueria")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_PELUQUERIAS,
          payload: response.data,
        });
      })
      .catch((e) => console.log(e));
  };
}

// export const getPeluquerias = () => async (dispatch) => {
//     try {
//         const { data } = await axios.get(`http://localhost:4000/peluqeria`)
//         return dispatch({
//             type: GET_PELUQUERIAS,
//             payload: data.data
//         })
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

export function getPeluqueriaById(id) {
  return async function (dispatch) {
    try {
      var resp = axios.get(`http://localhost:4000/peluqueria/${id}`);
      console.log("getbyid desde actions", resp);
      return dispatch({
        type: GET_PELUQUERIA_BY_ID,
        payload: resp.data,
      });
    } catch (err) {
      console.log("no se pudo traer el detalle", err);
    }
  };
}
