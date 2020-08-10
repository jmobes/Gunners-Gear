import React from "react";

import "./Header.css";

import logo from "./images/logo.png";
import sprite from "../../../images/sprites.svg";
// import Badge from "./Badge";
// import Links from "./Links";
// import Account from "./Account";
// import Cart from "./Cart";

const Header = props => {
  return (
    <header className="header">
      <figure className="logo_ctn">
        <img className="logo__item" src={logo}></img>
      </figure>
      <h1 className="header__title"><span className="first-word">Gunners</span> <span className="second-word">Gear</span></h1>
      <div className="header__icons">
        <svg className="icon icon-user">
          <use href={sprite + "#user"}></use>
        </svg>
        <svg className="icon icon-cart">
          <use href={sprite + "#shopping-cart"}></use>
        </svg>
      </div>
      <nav className="nav_links">
        <ul className="nav_list">
          <li className="nav_list__item">Jerseys</li>
          <li className="nav_list__item">Players</li>
          <li className="nav_list__item">Shorts</li>
          <li className="nav_list__item">Jackets</li>
          <li className="nav_list__item">Sweats</li>
          <li className="nav_list__item">Accessories</li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
