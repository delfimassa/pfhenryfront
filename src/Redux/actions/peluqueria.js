import axios from 'axios';

export const GET_PELUQUERIAS = 'GET_PELUQUERIAS';

export function getPeluquerias(input) {
    return function (dispatch) {
        axios.get('/peluqueria?name='+input)
        .then((data) => {
            dispatch({
                type: GET_PELUQUERIAS,
                payload: data
            })
        })
        .catch(e => console.log(e));
    }
}