import React from "react";
import { Link } from "react-router-dom";
function Btn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Link to={`/chat?id=${1}`}>
        <button id="1">Join</button>
      </Link>
      <Link to={`/chat?id=${2}`}>
        <button id="1">Join</button>
      </Link>
      <Link to={`/chat?id=${3}`}>
        <button id="1">Join</button>
      </Link>
      <Link to={`/chat?id=${4}`}>
        <button id="1">Join</button>
      </Link>
    </div>
  );
}

export default Btn;
