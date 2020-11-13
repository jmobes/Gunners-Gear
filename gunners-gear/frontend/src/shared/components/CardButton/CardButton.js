import React from "react";

import ProductDetails from "../ProductDetails/ProductDetails";

import "./CardButton.css";

const CardButton = () => {
  return (
    <button onClick={showDetails} className="card__button">View Details</button>
  );
};

function showDetails() {
  console.log("clicked");
  return <ProductDetails />;
}

export default CardButton;
