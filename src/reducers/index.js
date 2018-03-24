import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './reducer_login';
import RegisterReducer from './reducer_register';
import EventsReducer from './reducer_events';

const rootReducer = combineReducers({
  form: formReducer,
  events: EventsReducer,
  userEvents: EventsReducer,
  loginData: LoginReducer,
  registerData: RegisterReducer
});

export default rootReducer;