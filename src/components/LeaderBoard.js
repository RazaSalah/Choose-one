import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function LeaderBoard() {
  const userInfo = useSelector((state) => state.Users);

  return (
    <div className=" d-flex justify-content-center user-card">
      {Object.values(userInfo).map((user) => (
        <Card className="shadow mr-3 card-style" key={user.id}>
          <Card.Img variant="top" src={user.imgUrl} className="user-img" />
          <Card.Body>
            <Card.Title className="text-center">{user.fullname}</Card.Title>
            <Card.Text className="text-center">
              Created Questions : {user.questions.length}
            </Card.Text>
            <Card.Text className="text-center">
              Answered Questions : {Object.keys(user.answers).length}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            Total : {user.questions.length + Object.keys(user.answers).length}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default LeaderBoard;
