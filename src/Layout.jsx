import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">MyWebsite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/insert">INSERT</Nav.Link>
              <Nav.Link as={Link} to="/Dispaly">DISPLAY</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
