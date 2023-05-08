import axios from "axios";
import { serialize } from "../commons";
import qs from "qs";
import { Config } from "../env";

export default class BaseHttpService {
  requestConfig = {
    headers: {
      authorization: `Bearer ${
        JSON.parse(localStorage.getItem("auth"))?.accessToken
      }`,
      client_id: Config.CLIENT_ID,
    },
  };

  setRequestConfig = (params) => {
    this.requestConfig = {
      headers: {
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem("auth"))?.accessToken
        }`,
        client_id: Config.CLIENT_ID,
      },
      ...params,
    };
  };

  setHeader = (params) => {
    this.requestConfig = {
      ...this.requestConfig,
      headers: {
        ...this.requestConfig.headers,
        ...params,
      },
    };
  };

  resetHeader = () => {
    this.header = {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
      },
    };
  };

  // Methods Rest
  // Principals parameters:
  // url: Method URL
  // payload: parameters to send through call
  // removeBearerToken: when explicit defined, makes the call without the bearer token in the header
  get = (url, removeBearerToken) => {
    return removeBearerToken
      ? axios.get(url)
      : axios.get(url, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("auth"))
                ? JSON.parse(localStorage.getItem("auth")).accessToken
                : ""
            }`,
            client_id: Config.CLIENT_ID,
          },
        });
  };

  getSignup = (url) => {
    return axios.get(url, this.signupHeader);
  };

  getWithParams = (url, params) => {
    return axios.get(url, {
      headers: this.header,
      params: params,
      paramsSerializer: (params) => {
        return serialize(params);
      },
    });
  };

  getWithPagination = (url, params, removeBearerToken) => {
    return axios.get(url, {
      headers: !removeBearerToken ? this.header : null,
      params: params,
      paramsSerializer: (params) => {
        return serialize(params);
      },
    });
  };
  post = (url, payload) => axios.post(url, payload, this.requestConfig);

  postLogin = (url, payload) => axios.post(url, payload, this.loginHeader);

  postSignup = (url, payload) => axios.post(url, payload, this.signupHeader);

  autoLoginPost = (url, payload) =>
    axios.post(url, payload, this.autoLoginHeader);

  put = (url, payload) =>
    axios.put(url, payload, {
      headers: {
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem("auth"))?.accessToken
        }`,
        client_id: Config.CLIENT_ID,
      },
    });

  patch = (url, payload) => axios.patch(url, payload, this.header);

  delete = (url) =>
    axios.delete(url, {
      headers: {
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem("auth"))?.accessToken
        }`,
        client_id: Config.CLIENT_ID,
      },
    });

  upload = (url, formData) =>
    axios.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });

  postCredisfera = (url, payload) =>
    axios.post(url, qs.stringify({ grant_type: "client_credentials" }), {
      auth: {
        username: payload.username,
        password: payload.password,
      },
    });

  postCredisferaWithAuth = (url, token, payload) =>
    axios.post(url, payload, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
}
