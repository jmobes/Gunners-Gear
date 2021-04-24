import React, { useState } from "react";
import { Link } from "react-router-dom";

import CartCount from "../CartCount/CartCount";
import "./Header.css";

import logo from "./images/logo.png";
import sprite from "../../../images/sprites.svg";

const Header = (props) => {
  const [showLinks, setShowLinks] = useState(false);
  const [userClicked, setUserClicked] = useState(false);

  return (
    <header className="header_container">
      <div className="header">
        <Link className="logo_ctn" to="/">
          <img className="logo__item" src={logo} alt="arsenal logo"></img>
        </Link>
        <h1 className="header__title">
          <span className="first-word">Gunners</span>{" "}
          <span className="second-word">Gear</span>
        </h1>
        <div className="header__icons">
          <Link to="/account">
            <svg className="icon icon-user">
              <use href={sprite + "#user"}></use>
            </svg>
          </Link>
          <svg
            onClick={() => setShowLinks(!showLinks)}
            className="icon icon-menu"
          >
            <use href={sprite + "#menu"}></use>
          </svg>
          <Link to="/cart">
            <div className="cart-container">
              <svg className="icon icon-cart">
                <use href={sprite + "#shopping-cart"}></use>
              </svg>
              <div className="cart__num-ctn">
                <CartCount count={props.count} />
              </div>
            </div>
          </Link>
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
      </div>
      <nav className={`nav__links__mobile ${!showLinks && "hidden"}`}>
        <ul className="nav__list__mobile">
          <Link
            onClick={() => setShowLinks(false)}
            className="nav__list__item__mobile"
            to="/jerseys"
          >
            <li>Jerseys</li>
          </Link>
          <Link
            onClick={() => setShowLinks(false)}
            className="nav__list__item__mobile"
            to="/players"
          >
            <li>Players</li>
          </Link>
          <Link
            onClick={() => setShowLinks(false)}
            className="nav__list__item__mobile"
            to="/shorts"
          >
            <li>Shorts</li>
          </Link>
          <Link
            onClick={() => setShowLinks(false)}
            className="nav__list__item__mobile"
            to="/jackets"
          >
            <li>Jackets</li>
          </Link>
          <Link
            onClick={() => setShowLinks(false)}
            className="nav__list__item__mobile"
            to="/accessories"
          >
            <li>Accessories</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
