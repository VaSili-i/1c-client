import axios from 'axios';
import { USER_TOKEN } from '../../consts/localstorage';

export const $api = axios.create({
  baseURL: __API__
});

$api.interceptors.request.use((config) => {
  if (config.headers != null) {
    config.headers.Authorization = localStorage.getItem(USER_TOKEN) != null || '';
  }
  return config;
});
