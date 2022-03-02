import { USERS, QUESTIONS, LOGGEDUSER, NEWQUESTION } from "./type";
import * as api from "../DATA";

// load all users
export const loadUser = (users) => {
  return { type: USERS, users };
};

// load all questions
export const loadQuestion = (questions) => {
  return { type: QUESTIONS, questions };
};

// get the active user
export const getUser = (user) => {
  return { type: LOGGEDUSER, user };
};

// adding questions
export const addQuestionCreator = (newQuestion, activeUser) => {
  return { type: NEWQUESTION, newQuestion, activeUser };
};

// thunk function
export const getData = () => {
  return function (dispatch) {
    api.getAllUsers().then((users) => dispatch(loadUser(users)));
    api
      .getAllQuestions()
      .then((questions) => dispatch(loadQuestion(questions)));
  };
};

// export const setLoggedUser = (activeUser) => {
//   return function (dispatch) {
//     dispatch(getUser(activeUser));
//   };
// };

export const addQuestion = (question, activeUser) => {
  return function (dispatch) {
    api
      .addQuestion(question)
      .then((res) => dispatch(addQuestionCreator(res, activeUser)));
  };
};
