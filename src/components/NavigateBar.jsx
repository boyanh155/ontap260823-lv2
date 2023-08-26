import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
} from "reactstrap";

const NavigateBar = () => {
  return (
    <Navbar>
      <NavbarBrand href="/">Mindx</NavbarBrand>

      <Nav
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        className="me-auto"
        navbar
      >
        <NavItem
          style={{
            marginRight: "20px",
          }}
        >
          <Link to="/dashboard/">Components</Link>
        </NavItem>
        <NavItem
          style={{
            marginRight: "20px",
          }}
        >
          <Link to="/cart/">Components</Link>
        </NavItem>
        <NavItem
          style={{
            marginRight: "20px",
          }}
        >
          <Link to="/todolist/">Components</Link>
        </NavItem>
      </Nav>
      <NavbarText>Simple Text</NavbarText>
    </Navbar>
  );
};

export default NavigateBar;
