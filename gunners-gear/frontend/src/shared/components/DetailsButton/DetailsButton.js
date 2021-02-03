import React from "react";

import "./DetailsButton.css";
import ProductDetails from "../../../pages/ProductDetails/ProductDetails";

const DetailsButton = (props) => {

  return (
    <React.Fragment>
      <button className="card__button" id="button" onClick={props.viewProduct}>View Details</button>
    </React.Fragment>
  );
};

export default DetailsButton;
