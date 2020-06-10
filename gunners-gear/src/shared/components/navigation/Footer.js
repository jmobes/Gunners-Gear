import React from "react";

import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="flex">
        <div>
          &copy; Joseph Moberly
        </div>
        <div>
          <i class="fab fa-github"></i>
        </div>
        <div>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
