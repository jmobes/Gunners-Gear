import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import "./ProductDetails.css";
import CardButton from "../../shared/components/CardButton/CardButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const ProductDetails = (props) => {
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  const getQuantity = () => {
    return quantity;
  };

  return (
    <div className="product">
      <div onClick={() => history.goBack()} className="back">
        Back to Shop
      </div>
      <div className="product__image__container">
        <img
          src={`${props.details.image}`}
          className="product__image"
          alt="product"
        ></img>
      </div>
      <div className="product__info__container">
        <p className="product__info__description">
          {props.details.description}
        </p>
        <p className="product__info__price">{props.details.price.toFixed(2)}</p>
        <div className="product__info__quantity">
          <p className="product__info__quantity--text">Quantity: </p>
          <div className="product__info__quantity__count">
            <p className="product__info__quantity__count--text">{quantity}</p>
            <div className="product__info__quantity__count__icons">
              <RemoveIcon
                onClick={() =>
                  quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                }
                className="product__info__quantity__count--minus"
                style={{ fontSize: 25 }}
              />
              <AddIcon
                onClick={() => setQuantity(quantity + 1)}
                className="product__info__quantity__count--add"
                style={{ fontSize: 25 }}
              />
            </div>
          </div>
        </div>
        <div className="buttons">
          <CardButton
            addToCart={props.addToCart}
            productId={props.details.id}
            getQuantity={getQuantity}
            viewProduct={props.viewProduct}
          />
          <Link to="/cart">
            <div className="cart">View Cart</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
