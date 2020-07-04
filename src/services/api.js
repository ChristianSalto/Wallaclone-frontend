const URL = "http://localhost:3000/";
// const HEADERS = {
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// };

export const getAds = (filter, sort) => {
  return fetch(`${URL}adsview?name=${filter}&sort=${sort}`)
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
