import axios from 'axios'
import { GET_USERMONGO } from '../types/types'

export function getUserMongo(username){
    return function(dispatch){
        axios.get(`http://localhost:4000/clients/${username}`)
        .then((response) => {
            console.log(username)
            dispatch({
                type: GET_USERMONGO,
                payload: response.data
            })
        })
        .catch((e) => console.log(e))
    }
}

//aca 