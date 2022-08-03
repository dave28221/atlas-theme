import React from 'react';
import logo from "../Images/logo.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Locations from "../Pages/Locations";



function header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>  <img className="logo" src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/locations">Locations</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default header;