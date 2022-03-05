import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserCards.css";

function UserCards() {
  const userInfo = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  return (
    <div className=" d-flex justify-content-center user-card">
      {Object.values(userInfo).map((user) => (
        <Card className="shadow mr-3 card-style" key={user.id}>
          <Card.Img variant="top" src={user.imgUrl} className="user-img" />
          <Card.Body>
            <Card.Title className="text-center">{user.fullname}</Card.Title>
            <Button
              className="btn-block btn"
              onClick={() => {
                dispatch(getUser(user));
              }}
            >
              <Link to="/Home" className="buttonLink">
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
