import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoV2 from "../pages/logos/MCLogoV2.png";


function BasicExample() {
  return (
    <Navbar className="p-1 navbar" variant="dark" expand="lg">
      <Container className="">
        <Navbar.Brand href="/">
        <img
            src={LogoV2}
            className="d-inline-block align-top logov2"
            alt="logo"
            width="70px"
            height="45px"

          />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Methodology</Nav.Link>
            <NavDropdown title="Graphs" id="basic-nav-dropdown">
              <NavDropdown.Item href="/female">Female Students</NavDropdown.Item>
              <NavDropdown.Item href="/male">
                Male Students
              </NavDropdown.Item>
              <NavDropdown.Item href="/age">Transfer by Age</NavDropdown.Item>
              <NavDropdown.Item href="/race">Transfer by Race</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
