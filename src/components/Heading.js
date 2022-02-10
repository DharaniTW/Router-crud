import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, NavItem, Container } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        {/* <NavbarBrand href="/">My Team</NavbarBrand>  */}
        <Nav>
          <NavItem>
            <NavbarBrand href="/">My Team</NavbarBrand>
            <Link className="btn btn-primary " to="/add">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
