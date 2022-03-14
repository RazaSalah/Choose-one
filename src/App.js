import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData, setLoggedUser } from "./actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./pages/logIn";
import Home from "./pages/Home";
import AddQuestion from "./pages/AddQuestion";
import LeaderPage from "./pages/LeaderPage";

function App() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.LoggedUser);
  const userName = Object.values(activeUser);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getData(), setLoggedUser(activeUser));
    if (userName.length === 0) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LogIn />} />
        <Route path="/Home" exact element={<Home />} />
        <Route path="/AddQuestion" exact element={<AddQuestion />} />
        <Route path="/LeaderPage" exact element={<LeaderPage />} />
      </Routes>
    </>
  );
}

export default App;
