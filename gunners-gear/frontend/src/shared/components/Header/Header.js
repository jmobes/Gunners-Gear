import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from "./images/logo.png";
import sprite from "../../../images/sprites.svg";

const Header = props => {
  return (
    <header className="header">
      <Link className="logo_ctn" to="/">
        <img className="logo__item" src={logo}></img>
      </Link>
      <h1 className="header__title">
        <span className="first-word">Gunners</span>{" "}
        <span className="second-word">Gear</span>
      </h1>
      <div className="header__icons">
        <svg className="icon icon-user">
          <use href={sprite + "#user"}></use>
        </svg>
        <svg className="icon icon-menu">
          <use href={sprite + "#menu"}></use>
        </svg>
        <svg className="icon icon-cart">
          <use href={sprite + "#shopping-cart"}></use>
        </svg>
      </div>
      <nav className="nav_links">
        <ul className="nav_list">
          <Link className="nav_list__item" to="/jerseys">
            <li>Jerseys</li>
          </Link>
          <Link className="nav_list__item" to="/players">
            <li>Players</li>
          </Link>
          <Link className="nav_list__item" to="/shorts">
            <li>Shorts</li>
          </Link>
          <Link className="nav_list__item" to="/jackets">
            <li>Jackets</li>
          </Link>
          <Link className="nav_list__item" to="/accessories">
            <li>Accessories</li>
          </Link>
        </ul>
      </nav>
      {/* <div className="menu">
        <svg className="icon icon-menu">
          <use href={sprite + "#menu"}></use>
        </svg>
      </div> */}
    </header>
  );
};

export default Header;
