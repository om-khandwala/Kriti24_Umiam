import React from "react";

function Language(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
      }}
    >
      <div
        style={{
          height: "10px",
          width: "10px",
          borderRadius: "50%",
          backgroundColor: "black",
          marginRight: "5px",
        }}
      ></div>
      <p>{props.name}</p>
    </div>
  );
}

export default Language;
