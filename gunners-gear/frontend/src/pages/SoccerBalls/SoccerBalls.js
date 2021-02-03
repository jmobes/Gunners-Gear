import React, {useState, useEffect} from "react";

import "./SoccerBalls.css";

import CardButton from "../../shared/components/CardButton/CardButton";
import DetailsButton from "../../shared/components/DetailsButton/DetailsButton";

const SoccerBalls = (props) => {

  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response, data;
      try {
        response = await fetch("http://localhost:5000/api/products/category/balls");
        data = await response.json();
      }
      catch(err) {
        throw new Error(err);
      }
      
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section className="ball-container">
     {products && products.map(product => {
       return (
        <div key={product._id} className="ball__card">
          <img className="ball__card__image" src={`http://localhost:5000${product.image}`} alt={product.title}></img>
          <div className="ball__card__details">
            <h3 className="ball__card__title">{product.title}</h3>
            <h4 className="ball__card__price">{product.price}</h4>
            <DetailsButton />
          </div>
        </div>
       );
     })}
    </section>
  );
};

export default SoccerBalls;
