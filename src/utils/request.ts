import axios, * as AxiosTypes from "axios";

export function request(
  endpoint: string,
  config: AxiosTypes.AxiosRequestConfig = {}
) {
  const url = "http://localhost:8000" + endpoint;
  return axios.request({ url, ...config });
}
