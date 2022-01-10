import { SEARCH_CITY, SEARCH_NAME } from "../types/types";

export function searchName(data){
    return{
        type: SEARCH_NAME,
        payload: data
    }
}

export function searchCity(data){
    return{
        type: SEARCH_CITY,
        payload: data
    }
}