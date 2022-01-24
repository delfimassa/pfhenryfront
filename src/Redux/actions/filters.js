import { FILTER_CALENDAR, FILTER_RATING, FILTER_SERVICIES, FILTER_STATE, FILTER_CITY, ORDER_BY_RATING,FILTROS_DELETE} from "../types/types";

// export function filterRating(data){
//     return{
//         type: FILTER_RATING,
//         payload: data
//     }
// }

export function filterServicies(data){
    return{
        type: FILTER_SERVICIES,
        payload: data
    }
}

export function filterCalendar(data){
    return{
        type: FILTER_CALENDAR,
        payload: data
    }
}

export function filterState(data){
    return{
        type: FILTER_STATE,
        payload: data
    }
}

export function filterCity(data){
    return{
        type: FILTER_CITY,
        payload: data
    }
}
export function orderByRating(payload) {
    console.log("despachada")
    return {
      type: ORDER_BY_RATING,
      payload,
    };
  }

export function filtrosDelete(payload){
    return{
        type: FILTROS_DELETE,
        payload,
    }
}