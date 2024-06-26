import React from 'react';
import { PageIcon } from '../Assets/HeaderIcon/headerIcon';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <PageIcon/>
          <a className='loginho'>ViteJS</a>
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