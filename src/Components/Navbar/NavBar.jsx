import React from "react";
import { Nav } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
// import Button from "../Button/Button";

import {
  Navbar,
  NavLink,
  HomeIcon,
  NavbarToggler,
  HomeButton,
  HireButton,
} from "./NavBar.component.styles";
export default function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand>
          <NavLink $navBrand exact to="/">
            <HomeButton>
              <HomeIcon />
            </HomeButton>
          </NavLink>
        </Navbar.Brand>

        <NavbarToggler aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink $navItem exact to="/resume" className="nav-link">
              Resume
            </NavLink>
            <NavLink $navItem exact to="/portfolio" className="nav-link">
              Portfolio
            </NavLink>
            <NavLink $navItem exact to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
          <Nav>
            <HireButton
              className="hire-me-btn"
              text="Hire Me"
              icon={
                <IconContext.Provider value={{ style: { fontSize: "13px" } }}>
                  <FaTelegramPlane />
                </IconContext.Provider>
              }
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
