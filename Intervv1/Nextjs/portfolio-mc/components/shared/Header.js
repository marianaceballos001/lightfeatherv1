import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
} from "reactstrap";

const LoginLink = () => (
  <span className="nav-link port-navbar-link clickable">Login</span>
);

const LogoutLink = () => (
  <span className="nav-link port-navbar-link clickable">Logout</span>
);

const BsNavLink = (props) => {
  const { href, title } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md"
      >
        <Nav navbar>
          <NavItem className="port-navbar-item">
            {" "}
            <BsNavLink href="/" title="Authenticate" />
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Nav className="ml-auto" navbar>
          <Collapse isOpen={isOpen} navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="WebDev" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/projects/All" title="Programming" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/data" title="Data Sc/Eng" />
            </NavItem>

            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
          </Collapse>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
