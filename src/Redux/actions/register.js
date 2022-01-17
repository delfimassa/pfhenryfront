import {
  auth,
  createUserDocument,
  provider,
  getUsersId,
} from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  SET_USER,
  LOGIN_GOOGLE,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_GOOGLE_FAIL,
  GET_PELUQUERIAS,
  POST_PELUQUERIA,
} from "../types/types";
import Swal from "sweetalert2";


//REGISTER
export function register() {
  return {
    type: REGISTER,
  };
}

export function registerSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
}

export function registerFail(error) {
  Swal.fire("Ups!", "Lo sentimos, no pudimos registrarte. Por favor revisa si ya estas registrado con este email", "error");
  return {
    type: REGISTER_FAIL,
    payload: error,
  };
}

export function registerInitiate(name, email, password) {
  return async function (dispatch) {
    dispatch(register());
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(registerSuccess(user));
      //   dispatch(postClient(name, email, password));
      console.log(user);
      await createUserDocument(user, name);
    } catch (error) {
      dispatch(registerFail(error));
      console.log(error.message);
    }
  };
}

//LOGIN
export function login() {
  return {
    type: LOGIN,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}

export function loginFail(error) {
  Swal.fire("Ups!", "Email o contraseña incorrectos. Asegurate que ya estes registrado con este email", "error");

  return {
    type: LOGIN_FAIL,
    payload: error,
  };
}

export function loginInitiate(email, password) {
  return async function (dispatch) {
    dispatch(login());
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginSuccess(user));
      const hola = await getUsersId();
      console.log("uid loguin =>" + user.user.uid);
    } catch (error) {
      dispatch(loginFail(error));
      console.log(error.message);
    }
  };
}

//LOGOUT
export function logout() {
  return {
    type: LOGOUT,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutFail(error) {
  return {
    type: LOGOUT_FAIL,
    payload: error,
  };
}
export function logoutInitiate() {
  return async function (dispatch) {
    dispatch(logout());
    try {
      const user = await signOut(auth);
      dispatch(logoutSuccess());
      console.log(user);
    } catch (error) {
      dispatch(logoutFail(error));
      console.log(error.message);
    }
  };
}

// USER
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

//LOGIN GOOGLE
export function loginGoogle() {
  return {
    type: LOGIN_GOOGLE,
  };
}

export function loginGoogleSuccess(user) {
  return {
    type: LOGIN_GOOGLE_SUCCESS,
    payload: user,
  };
}

export function loginGoogleFail(error) {
  return {
    type: LOGIN_GOOGLE_FAIL,
    payload: error,
  };
}

export function loginGoogleInitiate() {
  return async function (dispatch) {
    dispatch(loginGoogle());
    try {
      let user = await signInWithPopup(auth, provider);
      dispatch(loginGoogleSuccess(user));
      console.log("uid loguin =>" + user.user.uid);

      const hola = await getUsersId();
      const filterHola = hola.find((e) => e === user.user.uid);
      console.log(user);
      console.log(filterHola);
      const payloadGoogle = {
        name: user.user.displayName,
        username: user.user.email,
        password: user.user.uid,
      };

      if (!filterHola) {
        dispatch(postClient(payloadGoogle));
        await createUserDocument(user, user.user.displayName);
      }
    } catch (error) {
      dispatch(loginGoogleFail(error));
      console.log(error.message);
    }
  };
}

export function postClient(payload) {
  return async function (dispatch) {
    const response = await axios
      .post("http://localhost:4000/clients/create", payload)
      .then((client) => {
        dispatch({
          type: POST_PELUQUERIA,
          payload: client,
        });
      });

    return response;
  };
}
