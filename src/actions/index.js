import axios from 'axios';

export const LOG_IN = 'log_in';
export const REGISTER = 'register';
export const EVENTS = 'events';

const ROOT_URL = 'http://localhost:3000/api';

export function logIn(values) {
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

export function getEvents() {
  const events = [
    {
      "participants": [],
      "_id": "1",
      "name": "qwertyuiop",
      "room": "aa",
      "speaker": "aa",
      "building": "aa",
      "date": "aa",
      "hour": "10:40 - 12:00",
      "description": "aa",
      "pplLimit": 15,
      "pplRegistered": 0
    },
    {
      "participants": [],
      "_id": "2",
      "name": "House of feat",
      "room": "aa",
      "speaker": "Dom Strachów",
      "building": "aa",
      "date": "aa",
      "hour": "10:40 - 12:00",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula at felis a viverra. Quisque mollis quis est ac efficitur. Nulla sed magna a est ornare tincidunt.",
      "pplLimit": 15,
      "pplRegistered": 0
    },
    {
      "participants": [],
      "_id": "3",
      "name": "Warsztat z fryzury i makijażu wiczorowego",
      "room": "aa",
      "speaker": "Roma Szafarek",
      "building": "aa",
      "date": "aa",
      "hour": "10:40 - 12:00",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula at felis a viverra. Quisque mollis quis est ac efficitur. Nulla sed magna a est ornare tincidunt.",
      "pplLimit": 15,
      "pplRegistered": 0
    },
    {
      "participants": [],
      "_id": "4",
      "name": "Warsztat z fryzury i makijażu wiczorowego",
      "room": "aa",
      "speaker": "Roma Szafarek",
      "building": "aa",
      "date": "aa",
      "hour": "10:40 - 12:00",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula at felis a viverra. Quisque mollis quis est ac efficitur. Nulla sed magna a est ornare tincidunt.",
      "pplLimit": 15,
      "pplRegistered": 0
    },
    {
      "participants": [],
      "_id": "5",
      "name": "Warsztat z fryzury i makijażu wiczorowego",
      "room": "aa",
      "speaker": "Roma Szafarek",
      "building": "aa",
      "date": "aa",
      "hour": "10:40 - 12:00",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula at felis a viverra. Quisque mollis quis est ac efficitur. Nulla sed magna a est ornare tincidunt.",
      "pplLimit": 15,
      "pplRegistered": 0
    }
  ];
  //const events = axios.get(`${ROOT_URL}/event`);

  return {
    type: EVENTS,
    payload: events
  }
}