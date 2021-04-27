import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Accessories.css";

import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";

const Accessories = (props) => {
  const [products, setProducts] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response, data;
      try {
        response = await fetch(
          "http://localhost:5000/api/products/category/accessories"
        );
        data = await response.json();
      } catch (err) {
        setError("A connection error has occurred");
      }
      setProducts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {});

  return (
    <section className="accessories-container">
      {products ? (
        products.map((product) => {
          return (
            <div key={product._id} className="accessories__card">
              <img
                className="accessories__card__image"
                src={`http://localhost:5000${product.image}`}
                alt={product.title}
              ></img>
              <div className="accessories__card__details">
                <h3 className="accessories__card__title">{product.title}</h3>
                <h4 className="accessories__card__price">
                  ${product.price.toFixed(2)}
                </h4>
                <Link
                  className="accessories__card__link"
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

export default Accessories;
