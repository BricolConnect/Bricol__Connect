import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavbarCon = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark" 
         style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(5px)' }}>
      <div className="container">
        
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src="images/bricol'connect1.png" alt="Logo" style={{ height: '40px' }} className="me-2"/>
          <h3 className="brand fw-bold " id='brand'>
            Bricol'Connect
          </h3>
        </Link>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavbarCon;