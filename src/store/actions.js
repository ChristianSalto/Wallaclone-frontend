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
  data,
});

export const fetchGetAds = (data) => ({
  type: TYPES.GET_ADS,
  data,
});

export const registerUser = (user) => async (dispatch, getState, { Api }) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.registerUser(user);
    dispatch(fetchSuccess(data));
    return data;
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const loadLogin = (username, password) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.loginUser(username, password);
    if (data.token) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: data.username,
          email: data.email,
          token: data.token,
        })
      );
    } else {
      history.push(data.path);
      dispatch(fetchSuccess(data));
      return getState();
    }
    dispatch(fetchSuccess(data));
    history.push("/privatezone");
    return getState();
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const fetchRecoverPass = (email) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.postRecoverPass(email);
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: data.username,
        email: data.email,
        token: data.token,
      })
    );
    history.push("/login");
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const fetchNewPass = (password) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.putNewPass(password);
    dispatch(fetchSuccess(data));
    return getState();
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const fetchAds = (filter, sort) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.getAds(filter, sort);
    dispatch(fetchGetAds(data));
    return data;
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
