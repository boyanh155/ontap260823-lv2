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
          <Link to="/completed/">Completed</Link>
        </NavItem>
        <NavItem
          style={{
            marginRight: "20px",
          }}
        >
          <Link to="/uncompleted/">Uncompleted</Link>
        </NavItem>
        <NavItem
          style={{
            marginRight: "20px",
          }}
        >
          <Link to="/todolist/">Full</Link>
        </NavItem>
      </Nav>
      <NavbarText>Simple Text</NavbarText>
    </Navbar>
  );
};

export default NavigateBar;
