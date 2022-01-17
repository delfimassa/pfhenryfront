import { FILTER_CALENDAR, FILTER_RATING, FILTER_SERVICIES} from "../types/types";

export function filterRating(data){
    return{
        type: FILTER_RATING,
        payload: data
    }
}

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