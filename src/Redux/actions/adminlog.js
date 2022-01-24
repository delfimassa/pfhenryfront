import {
  auth,
  getUsersId,
} from "../../firebase-config";
import axios from "axios";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  LOGIN_ADMIN,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAIL,
  REGISTER_ADMIN,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_FAIL,
  POST_PELUQUERIA,
} from "../types/types";

//LOGIN
export function loginAdmin() {
  return {
    type: LOGIN_ADMIN,
  };
}

export function loginAdminSuccess(user) {
  return {
    type: LOGIN_ADMIN_SUCCESS,
    payload: user,
  };
}

export function loginAdminFail(error) {
  return {
    type: LOGIN_ADMIN_FAIL,
    payload: error,
  };
}

export function loginAdminInitiate(email, password) {
  return async function (dispatch) {
    dispatch(loginAdmin());
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginAdminSuccess(user));
      console.log(user);
    } catch (error) {
      dispatch(loginAdminFail(error));
      console.log(error.message);
    }
  };
}

//REGISTER
export function registerAdmin() {
  return {
    type: REGISTER_ADMIN,
  };
}

export function registerAdminSuccess(user) {
  return {
    type: REGISTER_ADMIN_SUCCESS,
    payload: user,
  };
}

export function registerAdminFail(error) {
  return {
    type: REGISTER_ADMIN_FAIL,
    payload: error,
  };
}

// export function registerAdminInitiate(name, email, password) {
//   return async function (dispatch) {
//     dispatch(registerAdmin());
//     try {
//       const user = await createUserWithEmailAndPassword(auth, email, password);
//       dispatch(registerAdminSuccess(user));
//       console.log(user);
//       await createUserAdminDocument(user, name);
//     } catch (error) {
//       dispatch(registerAdminFail(error));
//       console.log(error.message);
//     }
//   };
// }


//POST DB
// export function postPeluqueria(payload, username, password) {
//   return async function (dispatch) {
//     const response = await axios
//       .post("http://localhost:4000/peluqueria/create", payload)
//       .then((pelus) => {
//         dispatch({
//           type: POST_PELUQUERIA,
//           payload: pelus,
//         });
//       });
   
//     const hola = await getUsersId()
//     return response;
//   };
// }

export function postPeluqueria(payload, username, password) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:4000/peluqueria/create", payload);
       const user = await createUserWithEmailAndPassword(auth, username, password);
    dispatch(registerAdminSuccess(user));
    } catch (error) {
      console.log(error);
    }
  };
}
