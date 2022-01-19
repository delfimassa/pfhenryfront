// import axios from "axios";
// import { POST_REVIEW, GET_REVIEWS } from "../types/types";

// export function postReview() {
//     return async function (dispatch) {
//       try {
//         var resp = axios.post(`http://localhost:4000/review/create`, review); //recibir review
//         console.log("getbyid desde actions", resp);
//         return dispatch({
//           type: POST_REVIEW,
//           payload: resp.data,
//         });
//       } catch (err) {
//         console.log("no se pudo traer el detalle", err);
//       }
//     };
//   }

//   export function getReviews() {
//     return async function (dispatch) {
//       try {
//         var resp = axios.get(`http://localhost:4000/peluqueria/${id}`);
//         console.log("getbyid desde actions", resp);
//         return dispatch({
//           type: POST_REVIEW,
//           payload: resp.data,
//         });
//       } catch (err) {
//         console.log("no se pudo traer el detalle", err);
//       }
//     };
//   }