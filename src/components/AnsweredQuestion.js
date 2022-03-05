import { React } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Row } from "react-bootstrap";
import "./QuestionCard.css";

function AnsweredQuestion() {
  const questions = useSelector((state) => state.Questions);
  const ActiveUser = useSelector((state) => state.LoggedUser);
  const answersId = Object.keys(ActiveUser.answers);
  const users = useSelector((state) => state.Users);
  const answered = Object.values(questions).filter((question) =>
    answersId.includes(question.id)
  );

  return (
    <div className=" container justify-content-center card-container">
      {answered.map((question) => {
        const creator = Object.values(users).filter(
          (user) => user.id === question.creator
        );
        return (
          <Card
            style={{ borderRadius: "4px", marginBottom: "20px" }}
            className="shadow"
            key={question.id}
          >
            <Card.Header className="d-flex">
              <Card.Img src={creator[0].imgUrl} className="user-avatar" />
              <Card.Title className="lg-2">
                {creator[0].fullname} asks
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-Right">
                Which one do you prefer ? {}
              </Card.Text>
              <Row className="mb-2 justify-content-center align-items-baseline ">
                {question.firstOption.votes.includes(ActiveUser.id) ? (
                  <Button
                    variant="Success"
                    className="btn-block col-5 mr-3 user-answer"
                    style={{ pointerEvents: "none" }}
                  >
                    {question.firstOption.string}
                  </Button>
                ) : (
                  <Button
                    variant="info"
                    className="btn-block col-5 mr-3 "
                    style={{ pointerEvents: "none" }}
                  >
                    {question.firstOption.string}
                  </Button>
                )}
                {question.secondOption.votes.includes(ActiveUser.id) ? (
                  <Button
                    variant="Success"
                    className="btn-block col-5 mr-3 user-answer"
                    style={{ pointerEvents: "none" }}
                  >
                    {question.secondOption.string}
                  </Button>
                ) : (
                  <Button
                    variant="info"
                    className="btn-block col-5 mr-3 "
                    style={{ pointerEvents: "none" }}
                  >
                    {question.secondOption.string}
                  </Button>
                )}
              </Row>
            </Card.Body>
            <Card.Footer className="text-muted ">
              Total Votes :
              {question.firstOption.votes.length +
                question.secondOption.votes.length}
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
}

export default AnsweredQuestion;
