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
    case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        user: {
          username: action.data.username,
          email: action.data.email,
        },
      };

    default:
      return state;
  }
}

export function adverts(state = initialState.adverts, action) {
  switch (action.type) {
    case TYPES.GET_ADS:
      return {
        ...state,
        adverts: action.data.ads,
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

    case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: action.data.success,
        msj: action.data.msj,
      };

    default:
      return state;
  }
}
