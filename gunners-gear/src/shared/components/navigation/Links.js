import React from "react";
import {Link} from "react-router-dom";

import "./Links.css";

const Links = props => {
  return (
    <nav className="nav">
      <ul className="navbar">
        <Link className="link" to="/jerseys">
          <li className="nav-item">
            <p>jerseys</p>
          </li>
        </Link>
        <Link className="link" to="/players">
          <li className="nav-item">
            <p>players</p>
          </li>
        </Link>
        <Link className="link" to="/sweats">
          <li className="nav-item">
            <p>sweats</p>
          </li>
        </Link>
        <Link className="link" to="/shorts">
          <li className="nav-item">
            <p>shorts</p>
          </li>
        </Link>
        <Link className="link" to="/jackets">
          <li className="nav-item">
            <p>jackets</p>
          </li>
        </Link>
        <Link className="link" to="/accessories">
          <li className="nav-item">
            <p>accessories</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Links;
