import React from 'react';
import './Navbar.css'; // Importe o arquivo de estilos da Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">Home</a>
          <a href="#" className="navbar-link">About</a>
          <a href="#" className="navbar-link">Services</a>
          <a href="#" className="navbar-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
