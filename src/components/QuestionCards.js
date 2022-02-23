import React from "react";
import * as api from "../DATA";
import { useDispatch, useSelector } from "react-redux";
import { loadQuestion } from "../actions";
import { Button, Card } from "react-bootstrap";

function QuestionCards() {
  const Questions = useSelector((state) => state.Questions);
  console.log(Questions);
  const dispatch = useDispatch();
  api.getAllQuestions().then((questions) => dispatch(loadQuestion(questions)));
  return (
    <div
      className=" d-flex justify-content-center"
      style={{ marginTop: "150px", marginBottom: "150px" }}
    >
      {Object.values(Questions).map((Question) => (
        <Card
          style={{ width: "300px", borderRadius: "4px" }}
          className="shadow"
        >
          <Card.Body>
            <Card.Title className="text-Right">
              Which one do you prefer ?
            </Card.Title>
            <Card.Text>{Question.creator}</Card.Text>
            <Button variant="info" className="btn-block">
              {Question.firstOption.string}
            </Button>
            <Button variant="info" className="btn-block">
              {Question.secondOption.string}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default QuestionCards;
