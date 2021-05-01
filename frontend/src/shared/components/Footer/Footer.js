import React from "react";

import "./Footer.css";

import sprite from "../../../images/sprites.svg";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; Joseph Moberly
      </div>
      <svg className="icon icon-github">
        <use href={sprite + "#github"}></use>
      </svg>
      <svg className="icon icon-linkedin">
        <use href={sprite + "#linkedin"}></use>
      </svg>
    </footer>
  );
};

export default Footer;
