import { React, useEffect } from "react";
import NavBar from "../components/NavBar";
import NotAnsweredQuestions from "../components/NotAnswered";
import AnsweredQuestion from "../components/AnsweredQuestion";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Home() {
  const activeUser = useSelector((state) => state.LoggedUser);
  const userName = Object.values(activeUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (userName.length === 0) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <NavBar />

      <Tabs
        defaultActiveKey="answered"
        id="uncontrolled-tab-example"
        className="mt-4 justify-content-center "
      >
        <Tab eventKey="answered" title="Answered">
          <AnsweredQuestion />
        </Tab>
        <Tab eventKey="notAnswered" title="Not Answered">
          <NotAnsweredQuestions />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Home;
