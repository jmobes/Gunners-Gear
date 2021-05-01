import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./SoccerBalls.css";

import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";

const SoccerBalls = (props) => {
  const [products, setProducts] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response, data;
      try {
        response = await fetch("/api/products/category/balls");
        data = await response.json();
      } catch (err) {
        setError("A connection error has occurred");
      }

      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section className="ball-container">
      {products ? (
        products.map((product) => {
          return (
            <div key={product._id} className="ball__card">
              <img
                className="ball__card__image"
                src={`${product.image}`}
                alt={product.title}
              ></img>
              <div className="ball__card__details">
                <h3 className="ball__card__title">{product.title}</h3>
                <h4 className="ball__card__price">{product.price}</h4>
                <Link
                  className="ball__card__link"
                  to={`product/${product._id}`}
                >
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
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div className="error">{error}</div>
      )}
    </section>
  );
};

export default SoccerBalls;
