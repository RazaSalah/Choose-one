import { QUESTIONS, NEWQUESTION, ADDANSWER } from "../actions/type";

export default function questions(
  state = [],
  { type, questions, newQuestion, questionId, answer, authedUser }
) {
  if (type === QUESTIONS) {
    return { ...questions };
  }
  if (type === NEWQUESTION) {
    return {
      ...state,
      [newQuestion.id]: newQuestion,
    };
  }
  if (type === ADDANSWER) {
    return {
      ...state,
      [questionId]: {
        ...state[questionId],
        [answer]: {
          ...state[questionId][answer],
          votes: state[questionId][answer].votes.concat([authedUser]),
        },
      },
    };
  } else {
    return state;
  }
}
