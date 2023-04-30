import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestParams {
  [key: string]: any;
}

interface ResponseData {
  [key: string]: any;
}

type RequestFunction = (url: string, method: string, params?: RequestParams) => Promise<ResponseData>;

const instance = axios.create({
  baseURL: 'http://your.api.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

instance.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    return response.data;
  },
  (error) => {
    console.error('request error:', error);
    throw error;
  }
);

const request: RequestFunction = (url, method, params = {}) => {
  return instance
    .request({
      url,
      method,
      params,
      headers: {
        // 这里需要显式指定 headers 对象类型，以避免错误
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response: ResponseData) => {
      return response;
    })
    .catch((error) => {
      console.error('request error:', error);
      throw error;
    });
};

export default request;
