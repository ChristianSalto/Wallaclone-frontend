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

export const fetchSuccessUser = (data) => ({
  type: TYPES.FETCH_SUCCESS_USER,
  data,
});

export const fetchSuccessAds = (data) => ({
  type: TYPES.FETCH_SUCCESS_ADS,
  data,
});

export const registerUser = (user) => async (dispatch, getState, { Api }) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.registerUser(user);
    dispatch(fetchSuccessUser(data));
    const { ui } = getState();
    return ui;
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
    if (data.result.token) {
      const { result } = data;
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: result.username,
          email: result.email,
          token: result.token,
          id: result.id,
        })
      );
    } else {
      history.push("/login");
      dispatch(fetchSuccessUser(data));
      return getState();
    }
    dispatch(fetchSuccessUser(data));
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
    dispatch(fetchSuccessUser(data));
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
    dispatch(fetchSuccessAds(data));
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
    dispatch(fetchSuccessAds(data));
    history.push(`/details/${data.result[0].name}`);
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
    if (data.success) {
      localStorage.removeItem("user");
    }
    dispatch(fetchSuccessUser(data));
    return getState();
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const fetchGetMyAds = (username, token) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.getMyAds(username, token);
    dispatch(fetchSuccessAds(data));
    return data;
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

export const actEditAds = (id, token, params) => async (
  dispatch,
  getState,
  { Api, history }
) => {
  dispatch(fetchRequest());
  try {
    const data = await Api.putAds(id, token, params);
    dispatch(fetchSuccessAds(data));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
