import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/ask.png";
import { useSelector } from "react-redux";

function NavBar() {
  const user = useSelector((state) => state.LoggedUser);

  return (
    <div className="Nav-bg">
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
            {user.fullname}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/Home" className="Navlink">
                Home
              </NavLink>
              <NavLink to="/AddQuestion" className="Navlink">
                Add Question
              </NavLink>
              <NavLink to="/Home" className="Navlink">
                Leader Board
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
