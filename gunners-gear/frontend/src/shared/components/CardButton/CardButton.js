import React, {useState} from "react";

import CartMessage from "../CartMessage/CartMessage";

import "./CardButton.css";

const CardButton = (props) => {
  const [showMessage, setShowMessage] = useState(false);

  const addItemAndDisplay = () => {
    setShowMessage(true);
    props.addItem();
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  return (
    <React.Fragment>
      <button onClick={addItemAndDisplay} className="card__button">View Details</button>
      {showMessage && <CartMessage />}
    </React.Fragment>
  );
};

export default CardButton;
