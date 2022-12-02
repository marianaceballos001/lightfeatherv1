import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Footer() {
  return (
   <div className='footer text-center pt-4 swiper-wrapper align-items-center'>
    <Container className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>MCWorks</span></strong>
      </div>
    </Container>
   </div>
  );
}

export default Footer;