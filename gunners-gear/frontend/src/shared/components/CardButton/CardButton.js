import React, { useState } from "react";

import CartMessage from "../CartMessage/CartMessage";

import "./CardButton.css";

const CardButton = (props) => {
  const [showMessage, setShowMessage] = useState(false);

  const displayMessage = () => {
    setShowMessage(true);
  };

  return (
    <React.Fragment>
      <button
        onClick={() => {
          props.addToCart({
            item: props.productId,
            quantity: props.getQuantity(),
          });
          displayMessage();
        }}
        className="card__button"
      >
        Add to Cart
      </button>
      {showMessage && <CartMessage />}
    </React.Fragment>
  );
};

export default CardButton;
