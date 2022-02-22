import * as api from "./DATA";
import { useDispatch } from "react-redux";
import { loadUser, loadQuestion } from "./actions";

function App() {
  const dispatch = useDispatch();
  api.getAllUsers().then((users) => dispatch(loadUser(users)));
  api.getAllQuestions().then((questions) => dispatch(loadQuestion(questions)));
  return <div className="App">Choose one App</div>;
}

export default App;
