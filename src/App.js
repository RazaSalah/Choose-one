import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./actions";
import LogIn from "./pages/logIn";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddQuestion from "./pages/AddQuestion";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LogIn />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddQuestion" element={<AddQuestion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
