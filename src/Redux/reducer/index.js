import * as actions from "../types/types";

const initialState = {
  allPeluquerias: [],
  backupPeluquerias: [],
  filteredPeluquerias: [],
  orden: '',
  loading: false,
  currentUser: null,
  error: null,
  user: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    //REGISTER
    case actions.REGISTER: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        user: initialState,
      };
    }
    case actions.REGISTER_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    
    //LOGIN
    case actions.LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        user: action.payload,
      };
    }
    case actions.LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    //LOGOUT
    case actions.LOGOUT: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.LOGOUT_SUCCESS: {
      return {
        ...state,
        currentUser: null,
        user: null
      };
    }
    case actions.LOGOUT_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    // user
    case actions.SET_USER: {
      return{
        ...state,
        loading: false,
        currentUser: action.paylodad,
        user: action.payload
      }
    }
    //peluqueria
    case actions.GET_PELUQUERIAS:{
      return{
        ...state,
        allPeluquerias: action.payload,
        backupPeluquerias: action.payload
      }
    }
    //filtros
    case actions.FILTER_RATING:{
      
      if(action.payload ==="menor"){
        state.allPeluquerias = state.backupPeluquerias
        state.allPeluquerias.forEach(e => {if(!e.rating){return e.rating = 0}})
        state.allPeluquerias.sort((a, b) =>{
          if(a.rating < b.rating){return -1}
          if(a.rating > b.rating){return 1}
          return 0
        })
      }
      if(action.payload === "mayor"){
        state.allPeluquerias = state.backupPeluquerias
        state.allPeluquerias.forEach(e => {if(!e.rating){return e.rating = 0}})
        state.allPeluquerias.sort((a, b) => {
          if(a.rating > b.rating){return -1}
          if(a.rating < b.rating){return 1}
          return 0
        })
      }
      return{
        ...state,
        orden: action.payload,
        allPeluquerias: state.backupPeluquerias
      }
    }
    
    case actions.FILTER_SERVICIES:{
        if(action.payload === "perfilado"){
          state.allPeluquerias = state.backupPeluquerias
          state.filteredPeluquerias = state.allPeluquerias.forEach(e => {e.services.filter(servicios => servicios === "Perfilado")})
          return{...state, allPeluquerias: state.filteredPeluquerias}
        }
        if(action.payload === "alisado"){

        }
        if(action.payload === "tintura"){

        }
        if(action.payload === "corte"){

        }
        else return{
          ...state,
          allPeluquerias: state.backupPeluquerias
        }
    }


    //DEFAULT
    
    default:
      return state;
  }
}
