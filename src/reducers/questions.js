import { QUESTIONS } from "../actions/type";

export default function questions(state = [], action) {
  if (action.type === QUESTIONS) {
    return { ...action.questions };
  } else {
    return state;
  }
}
