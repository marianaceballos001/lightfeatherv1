import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar className="p-1 navbar" variant="dark" expand="lg">
      <Container className="">
        <Navbar.Brand href="/">
          {" "}
          <img
            src="/MCLogoV2.png"
            width="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{" "}
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Methodology</Nav.Link>
            <NavDropdown title="Graphs" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Graphs1">Female Students</NavDropdown.Item>
              <NavDropdown.Item href="/Graphs2">
                Male Students
              </NavDropdown.Item>
              <NavDropdown.Item href="/Graphs3">Transfer by Age</NavDropdown.Item>
              <NavDropdown.Item href="/Graphs4">Transfer by Race</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
