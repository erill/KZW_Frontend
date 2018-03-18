import { LOG_IN } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case LOG_IN:
      return action.payload.data;
    default:
      return state;
  }
}