import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  form: formReducer,
  token: LoginReducer
});

export default rootReducer;