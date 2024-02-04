import React from "react";
import { Link } from "react-router-dom";

function index({ socket }) {
  return (
    <div>
      <Link to="http://localhost:5050/login">Login</Link>
    </div>
  );
}

export default index;
