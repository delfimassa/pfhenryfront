// import * as actions from "../actions/register";
// import * as actions from "../actions/adminlog";
// import * as actions from "../actions/peluqueria";
import * as actions from "../types/types";

const initialState = {
  allPeluquerias: [],
  backupPeluquerias: [],
  loading: false,
  currentUser: null,
  error: null,
  user: "",
  adminUser: false,
  peluquerias: [],
  selectedPelu: {}
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
        adminUser: null
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
        adminUser: null
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
        adminUser: null
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
        adminUser: true
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
        adminUser: true
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
        // adminUser: null
      };
    }
    case actions.LOGIN_GOOGLE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case actions.GET_PELUQUERIAS: {
      return { ...state, peluquerias: action.payload };
    }
    //peluqueria
    case actions.GET_PELUQUERIAS:{
      return{
        ...state,
        allPeluquerias: action.payload,
        backupPeluquerias: action.payload
      }
    }
    case actions.GET_PELUQUERIA_BY_ID:{
      return{
        ...state,
        selectedPelu: action.payload
      }
    }

    //DEFAULT
    
    default:
      return state;
  }
}
