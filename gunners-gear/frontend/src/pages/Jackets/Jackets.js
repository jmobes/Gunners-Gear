import React, {useState, useEffect} from "react";

import "./Jackets.css";

import CardButton from "../../shared/components/CardButton/CardButton";
import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";

const Jackets = (props) => {

  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async() => {
      let response, data;
      try {
        response = await fetch("http://localhost:5000/api/products/category/jackets");
        data = await response.json();
      }
      catch(err) {
        return new Error(err);
      }
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  return (
    <section className="jackets-container">
      {products && products.map(product => {
        return (
          <div key={product._id} className="jackets__card">
            <img className="jackets__card__image" src={`http://localhost:5000${product.image}`}></img>
            <div className="jackets__card__details">
              <h3 className="jackets__card__title">{product.title}</h3>
              <h4 className="jackets__card__price">{product.price}</h4>
              {/* <CardButton addItem={props.addItem} className="card__button" /> */}
              <DetailsButton />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Jackets;
