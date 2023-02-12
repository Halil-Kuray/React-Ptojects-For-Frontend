import React from "react";
import logo from "../logo.svg"

export default function Card(props) {
  return (
    <div className="contact-card">
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={logo} width="100px" />
        <p>{props.phone} </p>
      </div>
      <div className="info-group">
        <img src={logo} width="100px" />
        <p>{props.email} </p>
      </div>
    </div>
  );
}
