import React from "react";

import "./Header.css";
import Badge from "./Badge";
import Links from "./Links";
import Account from "./Account";
import Cart from "./Cart";

const Header = props => {
  return (
    <div className="header-ctn">
      <h1 className="header-title">Gunners Gear</h1>
      <Badge />
      <Links />
      <div className="icons">
        <Account />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
