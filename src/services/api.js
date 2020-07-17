const URL = "http://localhost:3000/";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// const headers = {
//   "Content-Type": "application/x-www-form-urlencoded",
// };

export const getAds = (filter, date) => {
  return fetch(`${URL}adsview?params=${JSON.stringify(filter)}&sort=${date}`)
    .then((res) => res.json())
    .catch((err) => err);
};

export const getAdsById = (id) => {
  return fetch(`${URL}details?id=${id}`)
    .then((res) => res.json())
    .catch((err) => err);
};

export const getMyAds = (username, token) => {
  return fetch(`${URL}privatezone?autor=${username}&token=${token}`)
    .then((res) => res.json())
    .catch((err) => err);
};

export const registerUser = (data) => {
  return fetch(`${URL}register`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const loginUser = (username, password) => {
  const data = {
    username,
    password,
  };

  return fetch(`${URL}login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const deleteUser = (id, token, user) => {
  const data = {
    user,
    id,
    token,
  };
  return fetch(`${URL}privatezone`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const putUser = (id, token, params) => {
  const data = {
    id,
    token,
    params,
  };
  return fetch(`${URL}privatezone`, {
    headers,
    method: "PUT",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const putAds = (formData, token, id) => {
  return fetch(`${URL}privatezone/editads?token=${token}&id=${id}`, {
    method: "PUT",
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const putReserverAds = (ads, token, id) => {
  const data = {
    ads,
  };
  return fetch(`${URL}privatezone/reserverads?token=${token}&id=${id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const postAds = (formData, token) => {
  return fetch(`${URL}privatezone/createads?token=${token}`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const deleteAds = (id, token) => {
  const data = {
    id,
    token,
  };
  return fetch(`${URL}privatezone/deleteads`, {
    headers,
    method: "DELETE",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const postRecoverPass = (email) => {
  const data = {
    email,
  };

  return fetch(`${URL}recoverpass`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const putNewPass = (password) => {
  const data = {
    password,
  };

  return fetch(`${URL}newpass`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const getAllUsers = () => {
  return fetch(`${URL}listusers`)
    .then((res) => res.json())
    .catch((err) => err);
};

export const getAllAdsUsers = (user, date) => {
  return fetch(`${URL}listusers/ads?autor=${user}&sort=${date}`)
    .then((res) => res.json())
    .catch((err) => err);
};
