import React from "react";

import "./Links.css";

const Links = props => {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="nav-item">
          <a href="#">jerseys</a>
        </li>
        <li className="nav-item">
          <a href="#">players</a>
        </li>
        <li className="nav-item">
          <a href="#">sweats</a>
        </li>
        <li className="nav-item">
          <a href="#">shorts</a>
        </li>
        <li className="nav-item">
          <a href="#">jackets</a>
        </li>
        <li className="nav-item">
          <a href="#">accessories</a>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
