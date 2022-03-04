import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserCards.css";

function UserCards() {
  const userInfo = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  return (
    <div
      className=" d-flex justify-content-center"
      style={{ marginTop: "150px" }}
    >
      {Object.values(userInfo).map((user) => (
        <Card
          style={{ width: "300px", borderRadius: "4px" }}
          className="shadow mr-3"
          key={user.id}
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
              className="btn-block btn"
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
