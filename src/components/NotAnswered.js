import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, addAnswer } from "../actions";
import { addAnswerToQuestion } from "../DATA";
import { Button, Card, Row } from "react-bootstrap";

function NotAnswered() {
  const questions = useSelector((state) => state.Questions);
  const activeUser = useSelector((state) => state.LoggedUser);

  const answersId = Object.keys(activeUser.answers);
  const users = useSelector((state) => state.Users);
  const notAnswered = Object.values(questions).filter(
    (question) => !answersId.includes(question.id)
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
    // addAnswerToQuestion({
    //   answer: e.target.value,
    //   authedUser: activeUser.id,
    //   questionId: questions.id,
    // });
  };

  return (
    <div
      className=" container justify-content-center"
      style={{ marginTop: "100px", marginBottom: "150px" }}
    >
      <Card.Title className="text-Right">Which one do you prefer ?</Card.Title>
      {notAnswered.map((question) => {
        const userImg = Object.values(users).filter(
          (user) => user.id === question.creator
        )[0].imgUrl;
        const questionId = question.id;
        return (
          <Card
            style={{ borderRadius: "4px", marginBottom: "20px" }}
            className="shadow"
            key={question.id}
          >
            <Card.Body>
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
              <Row className="mb-2 justify-content-center align-items-baseline ">
                <Button
                  variant="info"
                  className="btn-block col-5 mr-3"
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
          </Card>
        );
      })}
    </div>
  );
}

export default NotAnswered;
