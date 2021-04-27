import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Shorts.css";

import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";

const Shorts = (props) => {
  const [products, setProducts] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response, data;
      try {
        response = await fetch(
          "http://localhost:5000/api/products/category/shorts"
        );
        data = await response.json();
      } catch (err) {
        setError("A connection error has occurred");
      }

      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section className="shorts-container">
      {products ? (
        products.map((product) => {
          return (
            <div key={product._id} className="shorts__card">
              <img
                className="shorts__card__image"
                src={`http://localhost:5000${product.image}`}
                alt={product.title}
              ></img>
              <div className="shorts__card__details">
                <h3 className="shorts__card__title">{product.title}</h3>
                <h4 className="shorts__card__price">{product.price}</h4>
                <Link
                  className="shorts__card__link"
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

export default Shorts;
