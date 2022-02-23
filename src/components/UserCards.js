import React from "react";
import * as api from "../DATA";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "../actions";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserCards.css";

function UserCards() {
  const userInfo = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  api.getAllUsers().then((users) => dispatch(loadUser(users)));
  return (
    <div
      className=" d-flex justify-content-center"
      style={{ marginTop: "150px" }}
    >
      {Object.values(userInfo).map((user) => (
        <Card
          style={{ width: "300px", borderRadius: "4px" }}
          className="shadow"
        >
          <Card.Img
            variant="top"
            src={user.imgUrl}
            style={{
              borderRadius: "4px",
              width: "100%",
              hight: "100%",
              margin: "auto",
            }}
          />
          <Card.Body>
            <Card.Title className="text-center">{user.fullname}</Card.Title>
            <Button
              variant="info"
              className="btn-block"
              onClick={() => {
                dispatch(getUser(user));
              }}
            >
              <Link to="/Home" className="buttonLink">
                {" "}
                LogIn
              </Link>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default UserCards;
