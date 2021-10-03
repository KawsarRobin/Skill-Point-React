import React from 'react';
import { Form, FormControl, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navStyle = {
    color: '#242645',
    textDecoration: 'none',
    padding: '10px',
    fontWeight: '500',
  };
  return (
    <Navbar bg="light" expand="lg">
      <NavbarBrand style={navStyle} to="/home">
        Navbar scroll
      </NavbarBrand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0 text-decoration-none"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <NavLink style={navStyle} to="/home">
            Home
          </NavLink>
          <NavLink style={navStyle} to="/Service">
            Services
          </NavLink>
          <NavLink style={navStyle} to="/blogs">
            Blogs
          </NavLink>
          <NavLink style={navStyle} to="/about">
            About us
          </NavLink>
          <NavLink style={navStyle} to="/contact">
            Contact us
          </NavLink>
        </Nav>
        <Form className="d-flex w-50 ms-5">
          <FormControl
            type="search"
            placeholder="Search..."
            className="mr-2"
            aria-label="Search"
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
