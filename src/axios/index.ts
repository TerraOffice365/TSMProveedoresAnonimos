import axios from 'axios';
import { API_URLs } from './constants';

export const axiosApiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENV
    ? API_URLs[process.env.REACT_APP_API_ENV]
    : API_URLs.dev,
});