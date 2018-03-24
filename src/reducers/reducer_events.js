import { EVENTS, USER_EVENTS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case EVENTS:
      return [ action.payload ];
    case USER_EVENTS:
      return [ action.payload ];
  }
  return state;
}