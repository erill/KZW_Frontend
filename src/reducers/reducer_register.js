import { REGISTER } from '../actions/index';

export default function(state = '', action) {
  switch (action.type) {
    case REGISTER:
      if (action.payload.data.email) {
        return "Rejestracja przebiegła pomyślnie. Możesz się zalogować";
      } else {
        return "Podany adres e-mail jest już zajęty";
      }
    default:
      return state;
  }
}