import axios from 'axios';

export const LOG_IN = 'log_in';
export const REGISTER = 'register';

const ROOT_URL = 'http://localhost:3000/api';

export function login(values) {
  const request = axios.post(`${ROOT_URL}/login`, values);

  return {
    type: LOG_IN,
    payload: request
  };
}

export function register(values) {
  const registerRequest = axios.post(`${ROOT_URL}/register`, values);

  return {
    type: REGISTER,
    payload: registerRequest
  };
}