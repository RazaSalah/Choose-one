import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/question.png";
import { useSelector } from "react-redux";

function NavBar() {
  const User = useSelector((state) => state.LoggedUser);
  console.log(User);
  return (
    <div className="bg-info">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top mr-3"
              alt=" logo"
            />
            {User.fullname}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="Navlink">
                Home
              </NavLink>
              <NavLink to="/" className="Navlink">
                Add Questions
              </NavLink>
              <NavLink to="/" className="Navlink">
                Log Out
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
