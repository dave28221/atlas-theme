import React from 'react';
import logo from "../Images/logo.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>  <img className="logo" src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/posts" style={{ textDecoration: 'none' }}>Lawyers</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/locations" style={{ textDecoration: 'none' }}>Locations</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default header;