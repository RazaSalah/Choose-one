import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../actions";
import { Button, Form } from "react-bootstrap";

function QuestionForm() {
  // const question = useSelector((state) => state.Questions);
  const User = useSelector((state) => state.LoggedUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addQuestion());
  }, []);

  // const [input, setInput] = useState("");
  return (
    <div
      className="container justify-content-center"
      style={{ marginTop: "150px", marginBottom: "150px" }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            className="mb-3"
            // value=
            placeholder="Enter Your First Option"
          />
          <Form.Control
            type="text"
            // value=
            placeholder="Enter Your Second Option"
          />
        </Form.Group>
        <Button
          variant="info"
          type="submit"
          onClick={() => {
            dispatch(addQuestion(("razan", "hala"), User));
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default QuestionForm;
