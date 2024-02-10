import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbarhome.css';

const Navbar = () => {
  const navigate = useNavigate();
  const handlelogin = (e)=>{
    window.location.href = "https://localhost:5050/login";
  }

  const handleaboutus = (e)=>{
    const element = document.getElementById('aboutus');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handlehome = (e)=>{
    const element = document.getElementById('collaborate');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handlefeatures = (e)=>{
    const element = document.getElementById('features');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <nav className="navbar-home-page">
      <img src={require('./images/Group21.png')} alt='logo' className='logo'></img>
      <ul className="nav-links">
        <li><button onClick={handlehome}>Home</button></li>
        <li><button onClick={handleaboutus}>About</button></li>
        <li><button onClick={handlefeatures}>Features</button></li>
        <li><button className="login-btn" onClick={handlelogin}>Login</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
