import React, { useState } from "react";

import CartMessage from "../CartMessage/CartMessage";

import "./CardButton.css";

const CardButton = (props) => {
  const [showMessage, setShowMessage] = useState(false);

  // const addItemAndDisplay = () => {
  //   setShowMessage(true);
  //   props.addItem();
  //   setTimeout(() => {
  //     setShowMessage(false);
  //   }, 3000);
  // };

  return (
    <React.Fragment>
      <button
        onClick={() => {
          props.addToCart({
            item: props.productId,
            quantity: props.getQuantity(),
          });
          props.viewProduct(false);
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
