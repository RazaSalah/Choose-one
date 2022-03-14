import { USERS, QUESTIONS, LOGGEDUSER, NEWQUESTION, ADDANSWER } from "./type";
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
export const getUser = (authedUser) => {
  return { type: LOGGEDUSER, authedUser };
};

// adding questions
export const addQuestionCreator = (newQuestion) => {
  return { type: NEWQUESTION, newQuestion };
};

// adding Answers
export const addAnswers = ({ answer, authedUser, questionId }) => {
  return { type: ADDANSWER, answer, authedUser, questionId };
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

export const setLoggedUser = (activeUser) => {
  return function (dispatch) {
    dispatch(getUser(activeUser));
  };
};

export const addQuestion = (question) => {
  return function (dispatch) {
    api.addQuestion(question).then((res) => dispatch(addQuestionCreator(res)));
  };
};

export const addAnswer = (answer) => {
  console.log(answer);
  return function (dispatch) {
    api.addAnswerToQuestion(answer).then((res) => dispatch(addAnswers(answer)));
  };
};
