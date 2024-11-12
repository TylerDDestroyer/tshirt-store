// src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { FaTshirt } from 'react-icons/fa';
import '../App.css'; // Import App.css for additional styles if needed

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="sticky-top shadow-sm" style={{ background: 'linear-gradient(90deg, #343a40, #3d3f47)' }}>
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/" className="d-flex align-items-center" style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#f8f9fa' }}>
          <FaTshirt className="me-2" style={{ color: '#f8c14b' }} />
          T-Shirt Store
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as="div">
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link as="div">
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              >
                Shop
              </NavLink>
            </Nav.Link>
            <Nav.Link as="div">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link as="div">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
