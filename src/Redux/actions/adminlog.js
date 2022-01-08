import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword} from 'firebase/auth'

export const LOGIN_ADMIN_USER = "LOGIN_ADMIN_USER";
export const LOGIN_ADMIN_SUCCESS = "LOGIN_ADMIN_SUCCESS";
export const LOGIN_ADMIN_FAIL = "LOGIN_ADMIN_FAIL";

export function loginAdmin() {
    return{
        type: LOGIN_ADMIN_USER
    }
}

//LOGIN
export function loginAdminSuccess(user) {
    return{
        type: LOGIN_ADMIN_SUCCESS,
        payload: user
    }
}

export function loginAdminFail(error) {
    return{
        type: LOGIN_ADMIN_FAIL,
        payload: error
    }
}



export function loginAdminInitiate( email, password){
    return async function (dispatch){
        dispatch(loginAdmin());
        try {
            let user = await signInWithEmailAndPassword(auth, email, password)
            dispatch(loginAdminSuccess(user))
            console.log(user)
          } catch (error) {
            dispatch(loginAdminFail(error))
            console.log(error.message)
          }
    }
}
