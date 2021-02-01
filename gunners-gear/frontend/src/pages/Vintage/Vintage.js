import React, {useState, useEffect} from "react";

import "./Vintage.css";

import CardButton from "../../shared/components/CardButton/CardButton";

const Vintage = (props) => {

  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response, data;
      try {
        response = await fetch("http://localhost:5000/api/products/category/vintage");
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
    <section className="vintage-container">
      {products && products.map(product => {
        return (
          <div key={product._id} className="vintage__card">
            <img className="vintage__card__image" src={`http://localhost:5000${product.image}`} alt={product.title}></img>
            <div className="vintage__card__details">
              <h3 className="vintage__card__title">{product.title}</h3>
              <h4 className="vintage__card__price">{product.price}</h4>
              <CardButton addItem={props.addItem} className="card__button" />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Vintage;
