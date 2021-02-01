import React, {useState, useEffect} from "react";

import "./Jerseys.css";

import CardButton from "../../shared/components/CardButton/CardButton";
import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";

const Jersey = (props) => {
  const incrementCart = props.incrementCart;

  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response, data;
      try {
        response = await fetch("http://localhost:5000/api/products/category/jerseys");
        data = await response.json();
      }
      catch(err) {
        return new Error(err);
      }
      
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section className="jerseys-container">
      {products && products.map(product => {
        return (
          <div key={product._id} className="jersey__card">
            <img className="jersey__card__image" src={`http://localhost:5000${product.image}`} alt={product.title}></img>
            <div className="jersey__card__details">
              <h3 className="jersey__card__title">{product.title}</h3>
              <h4 className="jersey__card__price">{product.price}</h4>
              {/* <CardButton addItem={props.addItem} className="card__button" /> */}
              <DetailsButton />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Jersey;
