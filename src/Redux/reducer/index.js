import * as actions from "../actions/register";
import * as actions2 from "../actions/adminlog";
import * as actions3 from "../actions/peluqueria";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
  user: "",
  adminUser: false,
  peluquerias: [],
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
        user: null,
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
    case actions2.LOGIN_ADMIN_USER: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        user: action.payload,
        adminUser: true,
      };
    }
    case actions3.GET_PELUQUERIAS: {
      return { ...state, peluquerias: action.payload };
    }
    //DEFAULT
    default:
      return state;
  }
}
