import { USERS } from "../actions/type";

export default function users(state = [], action) {
  if (action.type === USERS) {
    return { ...action.users };
  } else {
    return state;
  }
}
