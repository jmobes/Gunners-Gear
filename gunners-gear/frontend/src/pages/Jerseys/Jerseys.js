import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Jerseys.css";

import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";

const Jersey = (props) => {
  const [products, setProducts] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response, data;
      try {
        response = await fetch(
          "http://localhost:5000/api/products/category/jerseys"
        );
        data = await response.json();
      } catch (err) {
        setError("A connection error has occured");
        console.error(err);
      }

      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section className="jerseys-container">
      {products ? (
        products.map((product) => {
          return (
            <div key={product._id} className="jersey__card">
              <img
                className="jersey__card__image"
                src={`http://localhost:5000/${product.image}`}
                alt={product.title}
              ></img>
              <div className="jersey__card__details">
                <h3 className="jersey__card__title">{product.title}</h3>
                <h4 className="jersey__card__price">{product.price}</h4>
                <Link
                  className="jersey__card__link"
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
                    }}
                  />
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div>{error}</div>
      )}
    </section>
  );
};

export default Jersey;
