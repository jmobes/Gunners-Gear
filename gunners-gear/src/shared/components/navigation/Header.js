import React from "react";

import "./Header.css";
import Badge from "./Badge";
import Links from "./Links";
import Account from "./Account";
import Cart from "./Cart";

const Header = props => {
  return (
    <div>
      <Badge />
      <Links />
      <Account />
      <Cart />
    </div>
  );
};

export default Header;
