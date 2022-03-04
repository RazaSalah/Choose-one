import { USERS, NEWQUESTION, ADDANSWER } from "../actions/type";

export default function users(
  state = [],
  action
  // { type, users, newQuestion, authedUser, questionId, answer }
) {
  if (action.type === USERS) {
    return { ...action.users };
  } else if (action.type === NEWQUESTION) {
    return {
      ...state,
      [action.newQuestion.creator]: {
        ...state[action.newQuestion.creator],
        questions: state[action.newQuestion.creator].questions.concat([
          action.newQuestion.id,
        ]),
      },
    };
  } else if (action.type === ADDANSWER) {
    const { answer, authedUser, questionId } = action;
    return {
      ...state,
      [authedUser]: {
        ...state[authedUser],
        answers: {
          ...state[authedUser].answers,
          [questionId]: answer,
        },
      },
    };
  } else {
    return state;
  }
}
