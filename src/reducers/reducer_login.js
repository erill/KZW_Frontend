import { LOG_IN } from '../actions/index';
import { REGISTER } from '../actions/index';

export default function(state = '', action) {
  switch (action.type) {
    case LOG_IN:
      console.log(action.payload.data);
      return action.payload.data.token;
    case REGISTER:
      // console.log(action.payload.status);
      console.log(action.payload.data);
      /*if(action.payload.status != '200') {
        console.log(action.payload);
      } else {
        console.log("Jest juz ktos o takim mailu");
      }*/
      // return action.payload.data.token;
    default:
      return state;
  }
}