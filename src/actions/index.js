import { USERS, QUESTIONS, LOGGEDUSER } from "./type";

export const loadUser = (users) => {
  return { type: USERS, users };
};

export const loadQuestion = (questions) => {
  return { type: QUESTIONS, questions };
};

export const getUser = (user) => {
  return { type: LOGGEDUSER, user };
};
