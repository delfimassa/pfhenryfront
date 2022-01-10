import axios from 'axios';
import { GET_PELUQUERIAS } from '../types/types';

export function getPeluquerias(input) {
    return function (dispatch) {
        axios.get(`http://localhost:4000/peluqueria?name=${input}`)
        .then((data) => {
            dispatch({
                type: GET_PELUQUERIAS,
                payload: data.data

        // axios.get('http://localhost:4000/peluqueria')
        // .then((response) => {
        //     console.log(response.data)
        //     dispatch({
        //         type: GET_PELUQUERIAS,
        //         payload: response.data
            })
        })
        .catch(e => console.log(e));
    }
}

// export const getPeluquerias = () => async (dispatch) => {
//     try {
//         const { data } = await axios.get(`/peluqeria`)
//         return dispatch({
//             type: GET_PELUQUERIAS,
//             payload: data
//         })
//     }
//     catch (error) {
//         console.log(error)
//     }
// }