import axios from 'axios';
import { Host } from './env';

/*
 * @see Full config:  https://github.com/axios/axios#request-config
 */
const instance = axios.create({
  baseURL: `${Host}`,
  timeout: 5000,
  withCredentials: true,
});

instance.interceptors.request.use(async config => {
  const token = await localStorage.getItem('token');
  if (token) {
    config.headers = Object.assign({}, config.headers, {
      Authorization: `Bearer ${token}`,
    });
  }
  return config;
});

instance.interceptors.response.use(
  response => {
    // console.log('response', response);
    if (response.data) {
      return response.data;
    }
    return Promise.reject(response);
  },
  error => {
    // console.log('error', error);
    return Promise.reject({
      url: error.request.url,
      error,
    });
  },
);

export default instance;
