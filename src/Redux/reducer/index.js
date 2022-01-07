import * as actions from "../actions/register";

const initialState = {
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
        currentUser: null
      };
    }
    case actions.LOGOUT_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    //DEFAULT
    default:
      return state;
  }
}
