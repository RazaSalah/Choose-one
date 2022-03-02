import { QUESTIONS, NEWQUESTION } from "../actions/type";

export default function questions(state = [], action) {
  if (action.type === QUESTIONS) {
    return { ...action.questions };
  }
  if (action.type === NEWQUESTION) {
    return {
      ...state,
      [action.newQuestion.id]: action.newQuestion,
    };
  } else {
    return state;
  }
}
