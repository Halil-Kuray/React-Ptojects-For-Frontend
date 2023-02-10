import React from "react";
import logo from "../logo.svg"

export default function Card() {
  return (
    <div className="contact-card">
      <img src={logo} width="100px"/>
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img src={logo} width="100px" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src={logo} width="100px" />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </div>
  );
}
