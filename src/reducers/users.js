import { USERS, NEWQUESTION } from "../actions/type";

export default function users(state = [], { type, user, newQuestion, users }) {
  if (type === USERS) {
    return { ...users };
  }
  if (type === NEWQUESTION) {
    return {
      ...state,
      [user]: {
        ...state[user],
        questions: state[user].questions.concat([newQuestion.id]),
      },
    };
  } else {
    return state;
  }
}
