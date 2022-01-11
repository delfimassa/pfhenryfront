// import { auth, createUserAdminDocument } from "../../firebase-config";
import { auth , createUserDocument, createUserAdminDocument, provider, getUsersId, signInWithGoogle} from "../../firebase-config";


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

import {
  LOGIN_ADMIN,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAIL,
  REGISTER_ADMIN,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_FAIL,
  LOGIN_GOOGLE_ADMIN, 
  LOGIN_GOOGLE_ADMIN_SUCCESS, 
  LOGIN_GOOGLE_ADMIN_FAIL
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

export function registerAdminInitiate(name, email, password) {
  return async function (dispatch) {
    dispatch(registerAdmin());
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(registerAdminSuccess(user));
      console.log(user);
      await createUserAdminDocument(user, name);
    } catch (error) {
      dispatch(registerAdminFail(error));
      console.log(error.message);
    }
  };
}
//LOGIN GOOGLE ADMIN
export function loginGoogleAdmin() {
  return{
      type: LOGIN_GOOGLE_ADMIN
  }
}

export function loginGoogleAdminSuccess(user) {
  return{
      type: LOGIN_GOOGLE_ADMIN_SUCCESS,
      payload: user
  }
}

export function loginGoogleAdminFail(error) {
  return{
      type: LOGIN_GOOGLE_ADMIN_FAIL,
      payload: error
  }
}
export function loginGoogleAdminInitiate(){
  return async function (dispatch){
      dispatch(loginGoogleAdmin());
      try {
          let user = await signInWithPopup(auth, provider)
          dispatch(loginGoogleAdminSuccess(user))
          console.log("uid loguin =>"+ user.user.uid)

          const hola = await getUsersId()
          const filterHola = hola.find(e => e === user.user.id)
          if(!filterHola){
              await createUserAdminDocument(user, "Matias");
          }   
        } catch (error) {
          dispatch(loginGoogleAdminFail(error))
          console.log(error.message)
        }
  }
}