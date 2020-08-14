import React from "react";

import "./Jackets.css";

import blackJacket from "./images/black-jacket.png";
import grayJacket from "./images/jacket-gray.png";
import jacketPadded from "./images/jacket-padded-black.png";
import jacketSleeveless from "./images/jacket-sleeveless.png";
import redJacket from "./images/red-jacket.png";
import windbreaker from "./images/windbreaker.png";

const Jackets = () => {
  return (
    <section className="jackets-container">
      <div className="jackets__card">
        <img className="jackets__card__image" src={blackJacket}></img>
        <div className="jackets__card__details">
          <h3 className="jackets__card__title">Men's black jacket</h3>
          <h4 className="jackets__card__price">$40</h4>
          <button className="jackets__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jackets__card">
        <img className="jackets__card__image" src={grayJacket}></img>
        <div className="jackets__card__details">
          <h3 className="jackets__card__title">Gray jacket</h3>
          <h4 className="jackets__card__price">$35</h4>
          <button className="jackets__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jackets__card">
        <img className="jackets__card__image" src={jacketPadded}></img>
        <div className="jackets__card__details">
          <h3 className="jackets__card__title">Black padded jacket</h3>
          <h4 className="jackets__card__price">$35</h4>
          <button className="jackets__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jackets__card">
        <img className="jackets__card__image" src={jacketSleeveless}></img>
        <div className="jackets__card__details">
          <h3 className="jackets__card__title">Sleeveless black jacket</h3>
          <h4 className="jackets__card__price">$30</h4>
          <button className="jackets__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jackets__card">
        <img className="jackets__card__image" src={redJacket}></img>
        <div className="jackets__card__details">
          <h3 className="jackets__card__title">Mens home colors jacket</h3>
          <h4 className="jackets__card__price">$40</h4>
          <button className="jackets__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jackets__card">
        <img className="jackets__card__image" src={windbreaker}></img>
        <div className="jackets__card__details">
          <h3 className="jackets__card__title">Windbreaker / Training jacket</h3>
          <h4 className="jackets__card__price">$30</h4>
          <button className="jackets__card__button">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Jackets;
