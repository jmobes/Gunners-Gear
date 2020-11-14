import React from "react";

import "./SoccerBalls.css";

import CardButton from "../../shared/components/CardButton/CardButton";

import ballBlack from "./images/ball-black.png";
import ballKids from "./images/ball-kids.png";
import ballRed1 from "./images/ball-red-1.jpeg";
import ballRed2 from "./images/ball-red-2.png";
import ballYellow from "./images/ball-yellow.png";

const SoccerBalls = (props) => {
  return (
    <section className="ball-container">
      <div className="ball__card">
        <img className="ball__card__image" src={ballBlack}></img>
        <div className="ball__card__details">
          <h3 className="ball__card__title">Mens training black ball</h3>
          <h4 className="ball__card__price">$40</h4>
          <CardButton addItem={props.addItem} className="card__button" />
        </div>
      </div>
      <div className="ball__card">
        <img className="ball__card__image" src={ballKids}></img>
        <div className="ball__card__details">
          <h3 className="ball__card__title">Training warmers black</h3>
          <h4 className="ball__card__price">$35</h4>
          <CardButton addItem={props.addItem} className="card__button" />
        </div>
      </div>
      <div className="ball__card">
        <img className="ball__card__image" src={ballRed1}></img>
        <div className="ball__card__details">
          <h3 className="ball__card__title">Mens arsenal golf ball</h3>
          <h4 className="ball__card__price">$30</h4>
          <CardButton addItem={props.addItem} className="card__button" />
        </div>
      </div>
      <div className="ball__card">
        <img className="ball__card__image" src={ballRed2}></img>
        <div className="ball__card__details">
          <h3 className="ball__card__title">Mens home color ball</h3>
          <h4 className="ball__card__price">$40</h4>
          <CardButton addItem={props.addItem} className="card__button" />
        </div>
      </div>
      <div className="ball__card">
        <img className="ball__card__image" src={ballYellow}></img>
        <div className="ball__card__details">
          <h3 className="ball__card__title">Mens arsenal swimming trunks</h3>
          <h4 className="ball__card__price">$30</h4>
          <CardButton addItem={props.addItem} className="card__button" />
        </div>
      </div>
    </section>
  );
};

export default SoccerBalls;
