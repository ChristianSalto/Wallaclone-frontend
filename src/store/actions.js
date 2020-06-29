import * as TYPES from "./types";

export const fetchRequest = () => ({
  type: TYPES.FETCH_REQUEST,
});

export const fetchFailure = (error) => ({
  type: TYPES.FETCH_FAILURE,
  error,
});

export const fetchSuccess = (data) => ({
  type: TYPES.FETCH_SUCCESS,
  data
});

export const registerUser = (user) => async (dispatch, getState, { Api }) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.registerUser(user);
    dispatch(fetchSuccess(data));
    return data;
  } catch (error) {
    dispatch(fetchFailure(error))
  }
};


export const loadLogin = (username, password) => async (dispatch,getState,{Api}) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.loginUser(username, password);
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchFailure(error))
  }
}