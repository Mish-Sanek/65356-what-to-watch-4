import axios from "axios";

const API = {
  BASE_URL: `https://4.react.pages.academy/wtw`,
  TIMEOUT: 1000 * 5,
  CREDENTIALS: true,
};

const Error = {
  BAD_REQUEST: {code: 400, errorMessage: `Неверный запрос`},
  UNAUTHORIZED: {code: 401, errorMessage: `Пользователь не авторизован`},
  NOT_FOUND: {code: 404, errorMessage: `Ничего не найдено`},
  DEFAULT: {errorMessage: `Статус ответа: `},
};


const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: API.BASE_URL,
    timeout: API.TIMEOUT,
    withCredentials: API.CREDENTIALS,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response && response.status === Error.UNAUTHORIZED.code) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
