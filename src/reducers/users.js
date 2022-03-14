import { USERS, NEWQUESTION, ADDANSWER } from "../actions/type";
// we don't use else if , only if or switch will be used here because to pass trough all the statements
export default function users(
  state = [],
  action
  // { type, users, newQuestion, authedUser, questionId, answer }
) {
  if (action.type === USERS) {
    return { ...action.users };
  }
  if (action.type === NEWQUESTION) {
    return {
      ...state,
      [action.newQuestion.creator]: {
        ...state[action.newQuestion.creator],
        questions: state[action.newQuestion.creator].questions.concat([
          action.newQuestion.id,
        ]),
      },
    };
  }
  if (action.type === ADDANSWER) {
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
