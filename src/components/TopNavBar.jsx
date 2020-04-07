import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const TopNavbar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="navbar-custom"
      rel="stylesheet"
      href="../styles/styles.scss"
    >
      <img
        alt="nautilus logo"
        src={process.env.PUBLIC_URL + '/assets/nautilus_logo.svg'}
      />
      <Navbar.Brand>Nautilus</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#contribute">Contribute</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
        </Nav>
        <Form inline>
          <Button>Download</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
