import React from "react";

import "./Header.css";
import Badge from "./Badge";
import Links from "./Links";
import Account from "./Account";
import Cart from "./Cart";

const Header = props => {
  return (
    <div className="header-ctn">
      <h1 className="header-title">
        <span className="word-1">Gunners</span> <span className="word-2">Gear</span>
      </h1>
      <Badge />
      <Links />
      <div className="icons">
        <Account />
        <Cart />
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Header;
