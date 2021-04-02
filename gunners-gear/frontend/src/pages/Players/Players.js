import React, { useState, useEffect } from "react";

import "./Players.css";

import CardButton from "../../shared/components/CardButton/CardButton";
import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";

const Players = (props) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response, data;
      try {
        response = await fetch(
          "http://localhost:5000/api/products/category/player"
        );
        data = await response.json();
      } catch (err) {
        throw new Error(err);
      }

      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section className="players__container">
      {products &&
        products.map((product) => {
          return (
            <div key={product._id} className="player__card card">
              <img
                className="player__card__image"
                src={`http://localhost:5000${product.image}`}
                alt={product.title}
              ></img>
              <div className="player__card__details">
                <h3 className="player__card__name">
                  <span className="first-name">{product.first}</span>{" "}
                  <span className="last-name">{product.last}</span>
                </h3>
                <h4 className="player__card__position">{product.position}</h4>
                <h4 className="player__card__country">{product.country}</h4>
                <h4 className="player__card__number">{product.number}</h4>
                <DetailsButton
                  addItem={props.addItem}
                  viewProduct={() => {
                    props.itemDetails({
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      description: product.description,
                      id: product._id,
                    });
                    props.viewProduct(true);
                  }}
                />
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Players;
