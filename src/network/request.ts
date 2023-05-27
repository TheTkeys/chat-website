import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestParams {
  [key: string]: any;
}

interface ResponseData {
  [key: string]: any;
}

type RequestFunction = (url: string, method: string, params?: RequestParams) => Promise<ResponseData>;

const instance = axios.create({
  // baseURL: 'http://[2409:8915:2408:64b3:b54c:cc92:ff14:339d]:8081',
  baseURL: 'http://107.174.253.112:8080',
  timeout: 1000000,
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

const request = (url: string, method: string, data = {}, headers = {}) => {
  return instance.request({
    url,
    method,
    data,
    headers
  })
    // .then((response: ResponseData) => {
    //   return response;  
    // })
    // .catch((error) => {
    //   console.error('request error:', error);
    //   throw error;
    // });
};

export default request;
