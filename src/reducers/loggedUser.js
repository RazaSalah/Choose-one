import { LOGGEDUSER } from "../actions/type";

export default function loggedUser(state = [], action) {
  if (action.type === LOGGEDUSER) {
    return {
      ...action.authedUser,
    };
  } else {
    return state;
  }
}
