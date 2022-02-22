import React from "react";
import App from "./App";
import { createStore } from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

//reducer function return the state

// to be seen in the dev tools pass compose dev tool as second parameter
const store = createStore(reducer, composeWithDevTools());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
