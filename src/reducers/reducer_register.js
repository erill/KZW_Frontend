import { REGISTER } from '../actions/index';

export default function(state = '', action) {
  switch (action.type) {
    case REGISTER:
      if (action.payload.data.email) {
        console.log(action.payload.data);
        return "Rejestracja przebiegła pomyślnie. Możesz się zalogować";
      } else {
        console.log("Jest juz ktos o takim mailu");
        return "Podany adres e-mail jest już zajęty";
      }
    default:
      return state;
  }
}