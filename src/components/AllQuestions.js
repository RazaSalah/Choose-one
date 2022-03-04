import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, addAnswer } from "../actions";
import { Button, Card, Row } from "react-bootstrap";

function AllQuestions() {
  const questions = useSelector((state) => state.Questions);
  const users = useSelector((state) => state.Users);
  const user = useSelector((state) => state.LoggedUser);
  const arr = Object.values(questions);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();
    const ans = {
      answer: e.target.value,
      authedUser: user,
      questionId: questions.id,
    };

    dispatch(addAnswer(ans));
  };

  return (
    <div
      className=" container justify-content-center"
      style={{ marginTop: "100px", marginBottom: "150px" }}
    >
      <Card.Title className="text-Right">Which one do you prefer ?</Card.Title>
      {arr.map((question) => {
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
              <Row className="mb-2 mr-4 justify-content-right align-items-baseline ">
                <Button
                  className="btn-block col-5 mr-3"
                  value="firstOption"
                  onClick={clickHandler}
                >
                  {question.firstOption.string}
                </Button>

                <Button
                  className="btn-block col-5"
                  value="secondOption"
                  onClick={clickHandler}
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

export default AllQuestions;
