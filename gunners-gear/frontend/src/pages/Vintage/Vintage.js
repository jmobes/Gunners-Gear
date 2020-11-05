import React from "react";

import "./Vintage.css";

import CardButton from "../../shared/components/CardButton/CardButton";

import retroHat from "./images/retro-hat.jpeg";
import retroJerseyRed from "./images/retro-jersey-red.jpeg";
import retroJerseyYellow from "./images/retro-jersey-yellow.jpeg";
import retroMug from "./images/retro-mug.jpeg";
import retroPolo from "./images/retro-polo.jpeg";
import retroPoloDark from "./images/retro-polo-dark.jpeg";

const Vintage = () => {
  return (
    <section className="vintage-container">
      <div className="vintage__card">
        <img className="vintage__card__image" src={retroHat}></img>
        <div className="vintage__card__details">
          <h3 className="vintage__card__title">Mens training black vintage</h3>
          <h4 className="vintage__card__price">$40</h4>
          <CardButton className="card__button" />
        </div>
      </div>
      <div className="vintage__card">
        <img className="vintage__card__image" src={retroJerseyRed}></img>
        <div className="vintage__card__details">
          <h3 className="vintage__card__title">Training warmers black</h3>
          <h4 className="vintage__card__price">$35</h4>
          <CardButton className="card__button" />
        </div>
      </div>
      <div className="vintage__card">
        <img className="vintage__card__image" src={retroJerseyYellow}></img>
        <div className="vintage__card__details">
          <h3 className="vintage__card__title">Training warmers brown</h3>
          <h4 className="vintage__card__price">$35</h4>
          <CardButton className="card__button" />
        </div>
      </div>
      <div className="vintage__card">
        <img className="vintage__card__image" src={retroMug}></img>
        <div className="vintage__card__details">
          <h3 className="vintage__card__title">Mens arsenal golf vintage</h3>
          <h4 className="vintage__card__price">$30</h4>
          <CardButton className="card__button" />
        </div>
      </div>
      <div className="vintage__card">
        <img className="vintage__card__image" src={retroPolo}></img>
        <div className="vintage__card__details">
          <h3 className="vintage__card__title">Mens home color vintage</h3>
          <h4 className="vintage__card__price">$40</h4>
          <CardButton className="card__button" />
        </div>
      </div>
      <div className="vintage__card">
        <img className="vintage__card__image" src={retroPoloDark}></img>
        <div className="vintage__card__details">
          <h3 className="vintage__card__title">Mens arsenal swimming trunks</h3>
          <h4 className="vintage__card__price">$30</h4>
          <CardButton className="card__button" />
        </div>
      </div>
    </section>
  );
};

export default Vintage;
