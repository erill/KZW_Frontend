import axios from 'axios';

export const LOG_IN = 'log_in';
export const REGISTER = 'register';
export const EVENTS = 'events';
export const USER_EVENTS = 'user_events';

const ROOT_URL = 'http://localhost:3000/api';

export function login(values) {
  const loginRequest = axios.post(`${ROOT_URL}/login`, values);

  return {
    type: LOG_IN,
    payload: loginRequest
  };
}

export function register(values) {
  const registerRequest = axios.post(`${ROOT_URL}/register`, values);

  return {
    type: REGISTER,
    payload: registerRequest
  };
}

export function getEvents() {
  const events = axios.get(`${ROOT_URL}/event`);

  return {
    type: EVENTS,
    payload: events
  }
}

export function getUserEvents() {
  const events = axios.get(`${ROOT_URL}/event`);

  return {
    type: USER_EVENTS,
    payload: events
  }
}