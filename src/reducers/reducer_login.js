import { LOG_IN } from '../actions/index';

export default function(state = '', action) {
  switch (action.type) {
    case LOG_IN:
      console.log(action.payload.data);
      return action.payload.data.token;
    default:
      return state;
  }
}