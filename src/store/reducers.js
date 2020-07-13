import * as TYPES from "./types";

const initialState = {
  user: [],
  adverts: [],
  ui: {
    isFetching: false,
    msj: "",
  },
};

export function user(state = initialState.user, action) {
  switch (action.type) {
    case TYPES.FETCH_SUCCESS_USER:
      return {
        ...state,
        user: action.data.result ? action.data.result : state.user,
        // user: {
        //   username: action.data.username,
        //   email: action.data.email,
        //   token: action.data.token ? action.data.token : state.user.token,
        //   id: action.data.id ? action.data.id : state.user.id,
        // },
      };

    case TYPES.CLEAR_SESSION:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}

export function adverts(state = initialState.adverts, action) {
  switch (action.type) {
    case TYPES.FETCH_SUCCESS_ADS:
      return {
        ...state,
        adverts: action.data.result ? action.data.result : state.adverts,
      };

    default:
      return state;
  }
}

export function ui(state = initialState.ui, action) {
  switch (action.type) {
    case TYPES.FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        msj: "",
      };

    case TYPES.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        msj: action.error,
      };

    case TYPES.FETCH_SUCCESS_USER:
      return {
        ...state,
        isFetching: action.data.success,
        msj: action.data.msj,
      };

    case TYPES.FETCH_SUCCESS_ADS:
      return {
        ...state,
        isFetching: action.data.success,
        msj: action.data.msj,
      };

    default:
      return state;
  }
}
