
import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { Host } from "libs/env";
import { Dispatch } from "store";


axios.interceptors.response.use(
  response => {
    if (response.data) {
      return response;
    }
    return Promise.reject(response);
  },
  error => {
    return Promise.reject(error.response);
  },
);

export class Http {

  async request(config: AxiosRequestConfig) {
    let response: any;
    let token = await localStorage.getItem('token')

    try {
      config = { ...config, url: Host + config.url, headers: { ...config.headers, Authorization: 'Bearer ' + token } };
      response = await axios(config);
      return response.data;
    } catch (e) {
      console.log(e);
      Dispatch.toast.show(e && e.data?.error ? e.data.error : "网络错误");
    }
  }

  async get(url: string, params?: any) {
    const config: AxiosRequestConfig = {
      method: "GET",
      url,
      params,
    };
    return this.request(config);
  }

  async post(url: string, params?: any) {
    const config: AxiosRequestConfig = {
      method: "POST",
      url,
      data: params,
    };
    return this.request(config);
  }

  protected formPost(url: string, params?: any) {
    const config: AxiosRequestConfig = {
      method: "POST",
      url,
      data: qs.stringify(params),
    };
    return this.request(config);
  }

  protected patch(url: string, params?: any) {
    const config: AxiosRequestConfig = {
      method: "PATCH",
      url,
      data: params,
    };
    return this.request(config);
  }


  protected put(url: string, params?: any) {
    const config: AxiosRequestConfig = {
      method: "PUT",
      url,
      data: params,
    };
    return this.request(config);
  }

  protected delete(url: string, params?: any) {
    const config: AxiosRequestConfig = {
      method: "DELETE",
      url,
      data: params,
    };
    return this.request(config);
  }
}
