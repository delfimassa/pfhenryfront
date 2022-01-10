import { auth , createUserDocument, createUserAdminDocument, provider, getUsersId, signInWithGoogle} from "../../firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

// export const REGISTER = "REGISTER";
// export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
// export const REGISTER_FAIL = "REGISTER_FAIL";

// export const LOGIN = "LOGIN";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAIL = "LOGIN_FAIL";

// export const LOGOUT = "LOGOUT";
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
// export const LOGOUT_FAIL = "LOGOUT_FAIL";

// export const SET_USER = "SET_USER"

import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS,LOGOUT, LOGOUT_FAIL, LOGOUT_SUCCESS, SET_USER, LOGIN_GOOGLE,LOGIN_GOOGLE_SUCCESS ,LOGIN_GOOGLE_FAIL, GET_PELUQUERIAS } from "../types/types";

//REGISTER
export function register() {
    return{
        type: REGISTER
    }
}

export function registerSuccess(user) {
    return{
        type: REGISTER_SUCCESS,
        payload: user
    }
}

export function registerFail(error) {
    return{
        type: REGISTER_FAIL,
        payload: error
    }
}

export function registerInitiate(name, email, password){
    return async function (dispatch){
        dispatch(register());
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            dispatch(registerSuccess(user))
            console.log(user)
            await createUserDocument(user, name);
          } catch (error) {
            dispatch(registerFail(error))
            console.log(error.message)
          }
    }
}

//LOGIN
export function login() {
    return{
        type: LOGIN
    }
}

export function loginSuccess(user) {
    return{
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export function loginFail(error) {
    return{
        type: LOGIN_FAIL,
        payload: error
    }
}

export function loginInitiate( email, password){
    return async function (dispatch){
        dispatch(login());
        try {
            let user = await signInWithEmailAndPassword(auth, email, password)
            dispatch(loginSuccess(user))
            console.log("uid loguin =>"+ user.user.uid)
          } catch (error) {
            dispatch(loginFail(error))
            console.log(error.message)
          }
    }
}


//LOGOUT
export function logout() {
    return{
        type: LOGOUT
    }
}

export function logoutSuccess() {
    return{
        type: LOGOUT_SUCCESS,
    }
}

export function logoutFail(error) {
    return{
        type: LOGOUT_FAIL,
        payload: error
    }
}
export function logoutInitiate(){
    return async function (dispatch){
        dispatch(logout());
        try {
            const user = await signOut(auth)
            dispatch(logoutSuccess())
            console.log(user)
          } catch (error) {
            dispatch(logoutFail(error))
            console.log(error.message)
          }
    }
}

// USER
export function setUser(user){
    return{
        type: SET_USER,
        payload: user
    }
}

//LOGIN GOOGLE
export function loginGoogle() {
    return{
        type: LOGIN_GOOGLE
    }
}

export function loginGoogleSuccess(user) {
    return{
        type: LOGIN_GOOGLE_SUCCESS,
        payload: user
    }
}

export function loginGoogleFail(error) {
    return{
        type: LOGIN_GOOGLE_FAIL,
        payload: error
    }
}

export function loginGoogleInitiate(){
    return async function (dispatch){
        dispatch(loginGoogle());
        try {
            let user = await signInWithPopup(auth, provider)
            dispatch(loginGoogleSuccess(user))
            console.log("uid loguin =>"+ user.user.uid)

            const hola = await getUsersId()
            const filterHola = hola.find(e => e === user.user.id)
            console.log(filterHola)
            
            if(!filterHola){
                await createUserDocument(user, "Matias");
                console.log(filterHola)
            } else if(filterHola === undefined){
                console.log("porque te cambias hdp", filterHola)
            }
          } catch (error) {
            dispatch(loginGoogleFail(error))
            console.log(error.message)
          }
    }
}

