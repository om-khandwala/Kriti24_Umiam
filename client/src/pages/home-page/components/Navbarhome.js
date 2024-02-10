import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbarhome.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handlelogin = (e) => {
    window.location.href =
      "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c/oauth2/v2.0/authorize?client_id=3d6bc04c-160d-49a6-8ffd-d119b9f663d7&scope=user.read%20openid%20profile%20offline_access&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fredirect&client-request-id=8833ef05-cc31-4d3d-82eb-23432aa6a4ec&response_mode=query&response_type=code&x-client-SKU=msal.js.node&x-client-VER=2.6.2&x-client-OS=win32&x-client-CPU=x64&client_info=1";
  };

  const handleaboutus = (e) => {
    const element = document.getElementById("aboutus");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlehome = (e) => {
    const element = document.getElementById("collaborate");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlefeatures = (e) => {
    const element = document.getElementById("features");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar-home">
      <img 
        src={require("./images/Group21.png")}
        alt='logo' 
        className='logo-home'
      ></img>
      <ul className="nav-links-home">
        <li onClick={handlehome}>Home</li>
        <li onClick={handleaboutus}>About</li>
        <li onClick={handlefeatures}>Features</li>
        <li><button className="login-btn-home" onClick={handlelogin}>Login</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
