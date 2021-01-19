import React from "react";

import "./Accessories.css";

import CardButton from "../../shared/components/CardButton/CardButton";
import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";

import dressSocks from "./images/dress-socks.jpeg";
import mug from "./images/mug.jpeg";
import underwear from "./images/retro-underwear.jpeg";
import scarf from "./images/scarf.jpeg";
import slippers from "./images/slippers.jpeg";
import blackSocks from "./images/socks-black.jpeg";
import redSocks from "./images/socks-red.jpeg";
import tie from "./images/tie.jpeg";



const Accessories = (props) => {
  return (
    <section className="accessories-container">
      <div className="accessories__card">
        <img className="accessories__card__image" src={dressSocks}></img>
        <div className="accessories__card__details">
          <h3 className="accessories__card__title">Men's dress socks</h3>
          <h4 className="accessories__card__price">$40</h4>
          {/* <CardButton addItem={props.addItem} className="card__button" /> */}
          <DetailsButton />
        </div>
      </div>
      <div className="accessories__card">
        <img className="accessories__card__image" src={mug}></img>
        <div className="accessories__card__details">
          <h3 className="accessories__card__title">Red arsenal mug</h3>
          <h4 className="accessories__card__price">$35</h4>
          {/* <CardButton addItem={props.addItem} className="card__button" /> */}
          <DetailsButton />
        </div>
      </div>
      <div className="accessories__card">
        <img className="accessories__card__image" src={underwear}></img>
        <div className="accessories__card__details">
          <h3 className="accessories__card__title">Retro arsenal themed boxers</h3>
          <h4 className="accessories__card__price">$35</h4>
          {/* <CardButton addItem={props.addItem} className="card__button" /> */}
          <DetailsButton />
        </div>
      </div>
      <div className="accessories__card">
        <img className="accessories__card__image" src={scarf}></img>
        <div className="accessories__card__details">
          <h3 className="accessories__card__title">Arsenal winter scarf</h3>
          <h4 className="accessories__card__price">$30</h4>
          {/* <CardButton addItem={props.addItem} className="card__button" /> */}
          <DetailsButton />
        </div>
      </div>
      <div className="accessories__card">
        <img className="accessories__card__image" src={slippers}></img>
        <div className="accessories__card__details">
          <h3 className="accessories__card__title">Red Arsenal slippers</h3>
          <h4 className="accessories__card__price">$40</h4>
          {/* <CardButton addItem={props.addItem} className="card__button" /> */}
          <DetailsButton />
        </div>
      </div>
      <div className="accessories__card">
        <img className="accessories__card__image" src={blackSocks}></img>
        <div className="accessories__card__details">
          <h3 className="accessories__card__title">Black Arsenal football socks</h3>
          <h4 className="accessories__card__price">$30</h4>
          {/* <CardButton addItem={props.addItem} className="card__button" /> */}
          <DetailsButton />
        </div>
      </div>
      <div className="accessories__card">
        <img className="accessories__card__image" src={redSocks}></img>
        <div className="accessories__card__details">
          <h3 className="accessories__card__title">Red Arsenal football socks</h3>
          <h4 className="accessories__card__price">$30</h4>
          {/* <CardButton addItem={props.addItem} className="card__button" /> */}
          <DetailsButton />
        </div>
      </div>
      <div className="accessories__card">
        <img className="accessories__card__image" src={tie}></img>
        <div className="accessories__card__details">
          <h3 className="accessories__card__title">Red Arsenal classy tie</h3>
          <h4 className="accessories__card__price">$30</h4>
          {/* <CardButton addItem={props.addItem} className="card__button" /> */}
          <DetailsButton />
        </div>
      </div>
    </section>
  );
};

export default Accessories;
