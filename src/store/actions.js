import * as TYPES from "./types";

export const clearSession = () => ({
  type: TYPES.CLEAR_SESSION,
});

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
          id: data.id,
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

export const fetchAds = (filter, date) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.getAds(filter, date);
    dispatch(fetchGetAds(data));
    return data;
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const fetchAdsById = (id) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.getAdsById(id);
    dispatch(fetchGetAds(data));
    history.push(`/details/${data.ads[0].name}`);
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const fetchDeleteUser = (id, token) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.deleteUser(id, token);
    dispatch(clearSession());
    history.push(data.path);
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const fetchPutUser = (id, token, params) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.putUser(id, token, params);
    // localStorage.setItem(
    //   "user",
    //   JSON.stringify({
    //     username: data.username,
    //     email: data.email,
    //   })
    // );
    dispatch(fetchSuccess(data));
    localStorage.removeItem("user");
    return getState();
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
