import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

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
          <LinkScroll to="community" smooth={true}>
            Community
          </LinkScroll>
          <LinkScroll to="team" smooth={true}>
            Team
          </LinkScroll>
        </Nav>
        <Navbar.Text>Join us on Slack!</Navbar.Text>
        <Nav.Link
          href="https://join.slack.com/t/nautiluscommunity/shared_invite/zt-deax51kl-PiLLyBiEc0gVFKM_XrwNKQ"
          target="Blank"
        >
          <FontAwesomeIcon
            className="slack-nav-icon"
            size="2x"
            icon={faSlack}
          />
        </Nav.Link>
        <Form inline>
          <LinkScroll to="download-title" smooth={true}>
            <Button>Download</Button>
          </LinkScroll>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
