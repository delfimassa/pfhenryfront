// import * as actions from "../actions/register";
// import * as actions from "../actions/adminlog";
// import * as actions from "../actions/peluqueria";
import * as actions from "../types/types";

const initialState = {
  allPeluquerias: [],
  backupPeluquerias: [],
  filteredPeluquerias: [],
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

    // case actions.SEARCH_CITY:{
    //   state.allPeluquerias = state.backupPeluquerias
    //   state.filteredPeluquerias = state.allPeluquerias.filter(e => e.city.includes(action.payload))
    //   return {...state,allPeluquerias: state.filteredPeluquerias}
    // }

    //DEFAULT

    default:
      return state;
  }
}
