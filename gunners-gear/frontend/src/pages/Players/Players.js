import React from "react";

import "./Players.css";

import aubameyang from "./images/aubameyang.png";
import bellerin from "./images/bellerin.png";
import lacazette from "./images/lacazette.png";
import leno from "./images/leno.png";
import luiz from "./images/luiz.png";
import mustafi from "./images/mustafi.png";
import ozil from "./images/ozil.png";
import pepe from "./images/pepe.png";
import saka from "./images/saka.png";
import tierney from "./images/tierney.png";
import xhaka from "./images/xhaka.png";



const Players = () => {
  return (
    <section className="players__container">
      <div className="player__card card">
        <img className="player__card__image" src={aubameyang}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Pierre-Emerick</span>{" "}
            <span className="last-name">Aubameyang</span>
          </h3>
          <h4 className="player__card__position">Forward</h4>
          <h4 className="player__card__country">Gabon</h4>
          <h4 className="player__card__number">14</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={bellerin}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Hector</span>{" "}
            <span className="last-name">Bellerin</span>
          </h3>
          <h4 className="player__card__position">Defender</h4>
          <h4 className="player__card__country">Spain</h4>
          <h4 className="player__card__number">2</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={lacazette}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Alexandre</span>{" "}
            <span className="last-name">Lacazette</span>
          </h3>
          <h4 className="player__card__position">Forward</h4>
          <h4 className="player__card__country">France</h4>
          <h4 className="player__card__number">9</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={leno}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Bernd</span>{" "}
            <span className="last-name">Leno</span>
          </h3>
          <h4 className="player__card__position">Goalkeeper</h4>
          <h4 className="player__card__country">Germany</h4>
          <h4 className="player__card__number">1</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={luiz}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">David</span>{" "}
            <span className="last-name">Luiz</span>
          </h3>
          <h4 className="player__card__position">Defender</h4>
          <h4 className="player__card__country">Brazil</h4>
          <h4 className="player__card__number">23</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={mustafi}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Shkodran</span>{" "}
            <span className="last-name">Mustafi</span>
          </h3>
          <h4 className="player__card__position">Defender</h4>
          <h4 className="player__card__country">Germany</h4>
          <h4 className="player__card__number">20</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={ozil}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Mesut</span>{" "}
            <span className="last-name">Ozil</span>
          </h3>
          <h4 className="player__card__position">Midfield</h4>
          <h4 className="player__card__country">Germany</h4>
          <h4 className="player__card__number">10</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={pepe}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Nicolas</span>{" "}
            <span className="last-name">Pepe</span>
          </h3>
          <h4 className="player__card__position">Forward</h4>
          <h4 className="player__card__country">France</h4>
          <h4 className="player__card__number">19</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={saka}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Bukayo</span>{" "}
            <span className="last-name">Saka</span>
          </h3>
          <h4 className="player__card__position">Midfield</h4>
          <h4 className="player__card__country">England</h4>
          <h4 className="player__card__number">77</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={tierney}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Kieran</span>{" "}
            <span className="last-name">Tierney</span>
          </h3>
          <h4 className="player__card__position">Defender</h4>
          <h4 className="player__card__country">Scottland</h4>
          <h4 className="player__card__number">3</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
      <div className="player__card card">
        <img className="player__card__image" src={xhaka}></img>
        <div className="player__card__details">
          <h3 className="player__card__name">
            <span className="first-name">Granit</span>{" "}
            <span className="last-name">Xhaka</span>
          </h3>
          <h4 className="player__card__position">Midfield</h4>
          <h4 className="player__card__country">Switzerland</h4>
          <h4 className="player__card__number">34</h4>
          <button className="player__card__button">Add Jersey to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Players;
