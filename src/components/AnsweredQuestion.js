import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions";
import { Button, Card, Row } from "react-bootstrap";

function AnsweredQuestion() {
  const Questions = useSelector((state) => state.Questions);
  const arr = Object.values(Questions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div
      className=" container justify-content-center"
      style={{ marginTop: "100px", marginBottom: "150px" }}
    >
      <Card.Title className="text-Right">Which one do you prefer ?</Card.Title>
      {arr.map((Question) => {
        if (
          Question.firstOption.votes.length > 0 ||
          Question.secondOption.votes.length > 0
        )
          return (
            <Card
              style={{ borderRadius: "4px", marginBottom: "20px" }}
              className="shadow"
              key={Question.id}
            >
              <Card.Body>
                <Row className="mb-2 justify-content-center align-items-baseline ">
                  <Button variant="info" className="btn-block col-5 mr-3">
                    {Question.firstOption.string}
                  </Button>

                  <Button variant="info" className="btn-block col-5">
                    {Question.secondOption.string}
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          );
      })}
    </div>
  );
}

export default AnsweredQuestion;
