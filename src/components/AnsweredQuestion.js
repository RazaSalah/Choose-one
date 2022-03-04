import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions";
import { Button, Card, Row } from "react-bootstrap";

function AnsweredQuestion() {
  const Questions = useSelector((state) => state.Questions);
  const ActiveUser = useSelector((state) => state.LoggedUser);
  const answersId = Object.keys(ActiveUser.answers);
  const users = useSelector((state) => state.Users);
  const answered = Object.values(Questions).filter((question) =>
    answersId.includes(question.id)
  );
  const arr = Object.values(Questions);

  const dispatch = useDispatch();

  return (
    <div
      className=" container justify-content-center"
      style={{ marginTop: "100px", marginBottom: "150px" }}
    >
      <Card.Title className="text-Right">Which one do you prefer ?</Card.Title>
      {answered.map((question) => {
        const userImg = Object.values(users).filter(
          (user) => user.id === question.creator
        )[0].imgUrl;
        return (
          <Card
            style={{ borderRadius: "4px", marginBottom: "20px" }}
            className="shadow"
            key={question.id}
          >
            <Card.Img
              src={userImg}
              style={{
                borderRadius: "50%",
                width: "20%",
                hight: "20%",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            />
            <Card.Body>
              <Row className="mb-2 justify-content-center align-items-baseline ">
                <Button variant="info" className="btn-block col-5 mr-3">
                  {question.firstOption.string}
                </Button>

                <Button variant="info" className="btn-block col-5">
                  {question.secondOption.string}
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
