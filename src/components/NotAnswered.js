import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../actions";
import { Button, Card, Row } from "react-bootstrap";
import "./QuestionCard.css";

function NotAnswered() {
  const questions = useSelector((state) => state.Questions);
  const activeUser = useSelector((state) => state.Users[state.LoggedUser.id]);
  const users = useSelector((state) => state.Users);
  const notAnswered = Object.values(questions).filter(
    (question) => !Object.keys(activeUser.answers).includes(question.id)
  );
  const arr = Object.values(questions);
  const dispatch = useDispatch();

  const clickHandler = (e, questionId) => {
    e.preventDefault();
    const ans = {
      answer: e.target.value,
      authedUser: activeUser.id,
      questionId: questionId,
    };
    console.log(ans);

    dispatch(addAnswer(ans));
  };

  return (
    <div className=" container justify-content-center card-container">
      {notAnswered.map((question) => {
        const creator = Object.values(users).filter(
          (user) => user.id === question.creator
        );
        const questionId = question.id;
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
                Which one do you prefer ?
              </Card.Text>
              <Row className="mb-2 justify-content-center align-items-baseline ">
                <Button
                  variant="info"
                  className="btn-block col-5  mr-3"
                  value="firstOption"
                  onClick={(e) => {
                    clickHandler(e, questionId);
                  }}
                >
                  {question.firstOption.string}
                </Button>

                <Button
                  variant="info"
                  className="btn-block col-5"
                  value="secondOption"
                  onClick={(e) => {
                    clickHandler(e, questionId);
                  }}
                >
                  {question.secondOption.string}
                </Button>
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

export default NotAnswered;
