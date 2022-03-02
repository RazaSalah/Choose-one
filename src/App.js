import LogIn from "./pages/logIn";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddQuestion from "./pages/AddQuestion";
import Answered from "./pages/Answered";
import NotAnswered from "./pages/NotAnswered";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LogIn />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddQuestion" element={<AddQuestion />} />
          <Route path="/Answered" element={<Answered />} />
          <Route path="/NotAnswered" element={<NotAnswered />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
