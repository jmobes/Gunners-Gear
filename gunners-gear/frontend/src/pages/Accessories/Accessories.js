import React, {useState, useEffect} from "react";

import "./Accessories.css";

import CardButton from "../../shared/components/CardButton/CardButton";
import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";



const Accessories = (props) => {

  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response, data;
      try {
        response = await fetch("http://localhost:5000/api/products/category/accessories");
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
    <section className="accessories-container">
      {products && products.map(product => {
        return (
          <div key={product._id} className="accessories__card">
            <img className="accessories__card__image" src={`http://localhost:5000${product.image}`} alt={product.title}></img>
            <div className="accessories__card__details">
              <h3 className="accessories__card__title">{product.title}</h3>
              <h4 className="accessories__card__price">${product.price}</h4>
              {/* <CardButton addItem={props.addItem} className="card__button" /> */}
              <DetailsButton />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Accessories;
