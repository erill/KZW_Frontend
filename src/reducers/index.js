import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './reducer_login';
import EventsReducer from './reducer_events';

const rootReducer = combineReducers({
  form: formReducer,
  token: LoginReducer,
  events: EventsReducer,
  loginData: LoginReducer,
  registerData: RegisterReducer
});

export default rootReducer;