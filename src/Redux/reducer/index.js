// import * as actions from "../actions/register";
// import * as actions from "../actions/adminlog";
// import * as actions from "../actions/peluqueria";
import { push } from "firebase/database";
import * as actions from "../types/types";

const initialState = {
  allPeluquerias: [],
  backupPeluquerias: [],
  filteredPeluquerias: [],
  peluqueriasFav: [],
  backupUserMongo: [],
  userMongo: [],
  filteredUserMongo: [],
  orden: "",
  loading: false,
  currentUser: null,
  error: null,
  user: "",
  adminUser: false,
  peluquerias: [],
  selectedPelu: {},
  text: "",
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
        adminUser: null,
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
        adminUser: null,
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
        user: null,
        adminUser: null,
        userMongo: null,
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
      return {
        ...state,
        loading: false,
        currentUser: action.paylodad,
        user: action.payload,
      };
    }

    case actions.GET_USERMONGO: {
      return{
        ...state,
        userMongo: action.payload
      }
    }

    //REGISTER ADMIN
    case actions.REGISTER_ADMIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.REGISTER_ADMIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        user: initialState,
        adminUser: true,
      };
    }
    case actions.REGISTER_ADMIN_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case actions.POST_PELUQUERIA: {
      return {
        ...state
      }
    }

    //LOGIN ADMIN
    case actions.LOGIN_ADMIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.LOGIN_ADMIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        user: action.payload,
        adminUser: true,
      };
    }

    case actions.LOGIN_ADMIN_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    //LOGIN GOOGLE
    case actions.LOGIN_GOOGLE: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.LOGIN_GOOGLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        user: action.payload,
        adminUser: null
      };
    }
    case actions.LOGIN_GOOGLE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    
    //LOGIN GOOGLE ADMIN
    case actions.LOGIN_GOOGLE_ADMIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.LOGIN_GOOGLE_ADMIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        user: action.payload,
        adminUser: true
      };
    }
    case actions.LOGIN_GOOGLE_ADMIN_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    //peluqueria
    case actions.GET_PELUQUERIAS: {
      return {
        ...state,
        // peluquerias: action.payload,
        allPeluquerias: action.payload,
        backupPeluquerias: action.payload,
      };
    }

    case actions.GET_PELUQUERIA_BY_ID: {
      return {
        ...state,
        selectedPelu: action.payload,
      };
    }
    
    //filtros
    case actions.FILTER_RATING: {
      if (action.payload === "menor") {
        state.allPeluquerias = state.backupPeluquerias;
        state.allPeluquerias.forEach((e) => {
          if (!e.rating) {
            return (e.rating = 0);
          }
        });
        state.allPeluquerias.sort((a, b) => {
          if (a.rating < b.rating) {
            return -1;
          }
          if (a.rating > b.rating) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "mayor") {
        state.allPeluquerias = state.backupPeluquerias;
        state.allPeluquerias.forEach((e) => {
          if (!e.rating) {
            return (e.rating = 0);
          }
        });
        state.allPeluquerias.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          }
          if (a.rating < b.rating) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        orden: action.payload,
        allPeluquerias: state.backupPeluquerias,
      };
    }

    case actions.SEARCH_NAME: {
      state.allPeluquerias = state.backupPeluquerias;
      state.allPeluquerias.forEach((e) => (e.name = e.name.toLowerCase()));
      console.log("desde reducer", state.allPeluquerias);
      state.filteredPeluquerias = state.allPeluquerias.filter((e) =>
        e.name.includes(action.payload)
      );
      return { ...state, allPeluquerias: state.filteredPeluquerias };
    }

    case actions.FILTER_CALENDAR:{
      const semana = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
      state.allPeluquerias = state.backupPeluquerias;
      state.filteredPeluquerias = state.allPeluquerias.filter((e) => { 
        let dia = e.schedule.split(' ').slice(0, 3) //claro
        let diaInicio = semana.indexOf(dia[0])
        let diaFin = semana.indexOf(dia[2])
        if (diaInicio > diaFin) diaFin = semana.lastIndexOf(dia[3])
        let diasDeAtencion = semana.slice(diaInicio, diaFin + 1) //si
        console.log(diasDeAtencion.indexOf(action.payload))

        return diasDeAtencion.indexOf(action.payload) === -1 ?  false: true
      })
      return { ...state, allPeluquerias: state.filteredPeluquerias }
    }

    // case actions.SEARCH_CITY:{
    //   state.allPeluquerias = state.backupPeluquerias
    //   state.filteredPeluquerias = state.allPeluquerias.filter(e => e.city.includes(action.payload))
    //   return {...state,allPeluquerias: state.filteredPeluquerias}
    // }
    
    case actions.POST_FAVORITE:{
      return{
        ...state,
      }
    }
    case actions.DELETE_FAVORITE:{
      return{
        ...state
      }
    }

    //FILTER STATE, CITY
    case actions.FILTER_STATE:{
      let allPelus = state.backupPeluquerias    
      const payyy = action.payload
      
      const peluqueriasProvincias = allPelus.map((e) => {
        if(payyy == "Selecciona una provincia" || e.state == action.payload){ //action.payload
          return e
        } 
      })

      const filteredPelus = peluqueriasProvincias.filter(e => e)
  
      return{
        ...state,
        allPeluquerias: filteredPelus,
      }
    }

    case actions.FILTER_CITY:{
      let allPelus = state.backupPeluquerias    
      const payloadd = action.payload
      
      const peluqueriasProvinciasCiudad = allPelus.map((e) => {
        if(payloadd == "Selecciona una provincia" || e.city === payloadd){ //action.payload
          return e
        } 
      })

      const filteredPelusCiudad = peluqueriasProvinciasCiudad.filter(e => e)
  
      return{
        ...state,
        allPeluquerias: filteredPelusCiudad,
      }
    }

    case actions.GET_FAV:{
      state.allPeluquerias = state.backupPeluquerias //pone todas las peluquerias en el state
      let cliente = action.payload.favs // aca estamos parados en fav [{..},{..}]
      let id = cliente.map(e => e.peluqueria) // [id_peluqueria, id_peluqueria]
      let pelusFiltradas = []
      for (let i = 0; i < id.length; i++) {
        let filtered = state.allPeluquerias.filter(e => e._id === id[i]) // filtramos las peluquerias por id
        pelusFiltradas.push(filtered) // pusheamos en pelusFiltradas
      }

      // pelusFiltradas.concat()
      // console.log(state.filteredPeluquerias) 
      return{
        ...state,
        peluqueriasFav: pelusFiltradas
      }
    }

    //DEFAULT
    default:
      return state;
  }
}
