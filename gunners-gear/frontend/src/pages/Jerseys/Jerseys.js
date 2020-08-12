import React from "react";

import "./Jerseys.css";

import blackJersey from "./images/black-long.png";
import blueJersey from "./images/blue.png";
import redJerseyLong from "./images/home-long.png";
import redJerseyShort from "./images/home-short.png";
import redJerseyWomen from "./images/home-women.png";
import yellowJersey from "./images/yellow.png";


const Jersey = () => {
  return (
    <section className="jerseys-container">
      <div className="jersey__card">
        <img className="jersey__card__image" src={blackJersey}></img>
        <div className="jersey__card__details">
          <h3 className="jersey__card__title">Alternate Color Long Sleeve Jersey</h3>
          <h4 className="jersey__card__price">$50</h4>
          <button className="jersey__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jersey__card">
        <img className="jersey__card__image" src={blueJersey}></img>
        <div className="jersey__card__details">
          <h3 className="jersey__card__title">Away Long Sleeve Jersey</h3>
          <h4 className="jersey__card__price">$50</h4>
          <button className="jersey__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jersey__card">
        <img className="jersey__card__image" src={redJerseyLong}></img>
        <div className="jersey__card__details">
          <h3 className="jersey__card__title">Mens Home Jersey Long Sleeve</h3>
          <h4 className="jersey__card__price">$50</h4>
          <button className="jersey__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jersey__card">
        <img className="jersey__card__image" src={redJerseyShort}></img>
        <div className="jersey__card__details">
          <h3 className="jersey__card__title">Mens Home Jersey short sleeve</h3>
          <h4 className="jersey__card__price">$50</h4>
          <button className="jersey__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jersey__card">
        <img className="jersey__card__image" src={redJerseyWomen}></img>
        <div className="jersey__card__details">
          <h3 className="jersey__card__title">Womens Home Jersey</h3>
          <h4 className="jersey__card__price">$50</h4>
          <button className="jersey__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="jersey__card">
        <img className="jersey__card__image" src={yellowJersey}></img>
        <div className="jersey__card__details">
          <h3 className="jersey__card__title">Yellow Away Jersey</h3>
          <h4 className="jersey__card__price">$50</h4>
          <button className="jersey__card__button">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Jersey;
