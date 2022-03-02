import React from "react";
import NavBar from "../components/NavBar";
import NotAnsweredQuestions from "../components/NotAnswered";

function NotAnswered() {
  return (
    <div>
      <NavBar />
      <NotAnsweredQuestions />
    </div>
  );
}

export default NotAnswered;
