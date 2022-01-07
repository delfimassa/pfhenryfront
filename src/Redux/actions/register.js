import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

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
            console.log(user)
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

export function logoutSuccess(user) {
    return{
        type: LOGOUT_SUCCESS,
        payload: user
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
            let user = await signOut()
            dispatch(logoutSuccess())
            console.log(user)
          } catch (error) {
            dispatch(loginFail(error))
            console.log(error.message)
          }
    }
}