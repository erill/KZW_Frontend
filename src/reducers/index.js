import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './reducer_login';
import RegisterReducer from './reducer_register';

const rootReducer = combineReducers({
  form: formReducer,
  loginData: LoginReducer,
  registerData: RegisterReducer
});

export default rootReducer;