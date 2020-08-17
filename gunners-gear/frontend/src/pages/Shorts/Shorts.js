import React from "react";

import "./Shorts.css";

import blackShorts from "./images/black.png";
import blackSweats from "./images/black-sweat-shorts.png";
import brownShorts from "./images/brown-sweat-shorts.png";
import golfShorts from "./images/golf-shorts.png";
import homeShorts from "./images/home.png";
import swimmingShorts from "./images/swimming-trunks.png";

const Shorts = () => {
  return (
    <section className="shorts-container">
      <div className="shorts__card">
        <img className="shorts__card__image" src={blackShorts}></img>
        <div className="shorts__card__details">
          <h3 className="shorts__card__title">Mens training black shorts</h3>
          <h4 className="shorts__card__price">$40</h4>
          <button className="shorts__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="shorts__card">
        <img className="shorts__card__image" src={blackSweats}></img>
        <div className="shorts__card__details">
          <h3 className="shorts__card__title">Training warmers black</h3>
          <h4 className="shorts__card__price">$35</h4>
          <button className="shorts__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="shorts__card">
        <img className="shorts__card__image" src={brownShorts}></img>
        <div className="shorts__card__details">
          <h3 className="shorts__card__title">Training warmers brown</h3>
          <h4 className="shorts__card__price">$35</h4>
          <button className="shorts__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="shorts__card">
        <img className="shorts__card__image" src={golfShorts}></img>
        <div className="shorts__card__details">
          <h3 className="shorts__card__title">Mens arsenal golf shorts</h3>
          <h4 className="shorts__card__price">$30</h4>
          <button className="shorts__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="shorts__card">
        <img className="shorts__card__image" src={homeShorts}></img>
        <div className="shorts__card__details">
          <h3 className="shorts__card__title">Mens home color shorts</h3>
          <h4 className="shorts__card__price">$40</h4>
          <button className="shorts__card__button">Add to Cart</button>
        </div>
      </div>
      <div className="shorts__card">
        <img className="shorts__card__image" src={swimmingShorts}></img>
        <div className="shorts__card__details">
          <h3 className="shorts__card__title">Mens arsenal swimming trunks</h3>
          <h4 className="shorts__card__price">$30</h4>
          <button className="shorts__card__button">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Shorts;