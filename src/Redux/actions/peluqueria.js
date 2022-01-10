import axios from 'axios';
import { GET_PELUQUERIAS } from '../types/types';

export function getPeluquerias(input) {
    return function (dispatch) {
        axios.get('http://localhost:4000/peluqueria')
        .then((response) => {
            console.log(response.data)
            dispatch({
                type: GET_PELUQUERIAS,
                payload: response.data
            })
        })
        .catch(e => console.log(e));
    }
}

// export function getPeluquerias(input) {
//     return function (dispatch) {
//         axios.get(`http://localhost:4000/peluqueria?name=${input}`)
//         .then((response) => {
//             dispatch({
//                 type: GET_PELUQUERIAS,
//                 payload: response.data
//             })
//         })
//     }
// }