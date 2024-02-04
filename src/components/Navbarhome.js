import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbarhome.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src='/images/Group21.png' alt='logo' className='logo'></img>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li><button className="login-btn">Login</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
