import { USERS, QUESTIONS } from "./type";

export const loadUser = (users) => {
  return { type: USERS, users };
};

export const loadQuestion = (questions) => {
  return { type: QUESTIONS, questions };
};
