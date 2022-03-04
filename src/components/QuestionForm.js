import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../actions";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

function QuestionForm() {
  // const question = useSelector((state) => state.Questions);
  const creator = useSelector((state) => state.LoggedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    const question = {
      creator: creator.id,
      answerOne: e.target.firstInput.value,
      answerTwo: e.target.secondInput.value,
    };
    dispatch(addQuestion(question));
    navigate("/Home");
  };

  return (
    <div
      className="container justify-content-center"
      style={{ marginTop: "150px", marginBottom: "150px" }}
    >
      <Form
        onSubmit={(e) => {
          onSubmitHandle(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Question</Form.Label>
          <Form.Control
            name="firstInput"
            type="text"
            required={true}
            className="mb-3"
            placeholder="Enter Your First Option"
          />
          <Form.Control
            name="secondInput"
            type="text"
            required={true}
            placeholder="Enter Your Second Option"
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default QuestionForm;
