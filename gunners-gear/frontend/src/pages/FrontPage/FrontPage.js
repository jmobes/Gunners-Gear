import React from "react";
import {Link} from "react-router-dom"

import "./FrontPage.css";

import ball from "./images/ball.png";
import jersey from "./images/jersey.png";
import vintage from "./images/old-badge.png";
import mug from "./images/mug.png";
import scarf from "./images/scarf.png";
import hat from "./images/hat.png";

const FrontPage = props => {
  return (
    <main className="content">
      <div className="stadium_ctn">
        <div className="stadium"></div>
        <p className="stadium__paragraph">#1 online store for all things Arsenal</p>
      </div>
      <section className="gallery">
        <h3 className="gallery__heading">
          Top Categories
      </h3>
        <div className="gallery_links">
          <div className="gallery_item_ctn gallery_item_ctn--1">
            <img className="gallery__item gallery__item--1" src={jersey} alt="jersey"></img>
            <Link to="/jerseys">
              <button className="gallery_item__button button">Most Popular</button>
            </Link>
          </div>
          <div className="gallery_item_ctn gallery_item_ctn--2">
            <img className="gallery__item gallery__item--2" src={ball} alt="soccer ball"></img>
            <Link to="/soccerballs">
              <button className="gallery_item__button button">Soccer Balls</button>
            </Link>
          </div>
          <div className="gallery_item_ctn gallery_item_ctn--3">
            <img className="gallery__item gallery__item--3" src={vintage} alt="retro arsenal logo"></img>
            <Link to="/vintage">
              <button className="gallery_item__button button">Vintage</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="story">
        <div className="story__text">
          <h3 className="story__text--header">
            Select from a wide variety of items
          </h3>
          <p className="story__text--paragraph">Check out our new home and away kit for the 2020/2021 season.</p>
          <Link to="/accessories">
            <button className="story__button button">SHOP NOW</button>
          </Link>
        </div>
        <div className="story__photos">
          <img className="story__photos--1" src={mug} alt="mug"></img>
          <img className="story__photos--2" src={scarf} alt="scarf"></img>
          <img className="story__photos--3" src={hat} alt="hat"></img>
        </div>
      </section>
      <div className="wallpaper"></div>
    </main>
  );
};

export default FrontPage;
