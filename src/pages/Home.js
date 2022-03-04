import React from "react";
import NavBar from "../components/NavBar";
import NotAnsweredQuestions from "../components/NotAnswered";
import AnsweredQuestion from "../components/AnsweredQuestion";
import { Tab, Tabs } from "react-bootstrap";
import AllQuestions from "../components/AllQuestions";

function Home() {
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
