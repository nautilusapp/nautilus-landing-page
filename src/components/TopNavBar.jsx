import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
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
          <LinkScroll to="features" smooth={true}>
            Features
          </LinkScroll>
          <LinkScroll to="contribute" smooth={true}>
            Contribute
          </LinkScroll>
          <LinkScroll to="team" smooth={true}>
            Team
          </LinkScroll>
        </Nav>
        <Form inline>
          <Button>Download</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
