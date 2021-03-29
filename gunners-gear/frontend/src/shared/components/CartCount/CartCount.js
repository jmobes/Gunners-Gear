import React, { useState } from "react";

import "./CartCount.css";

const CartCount = (props) => {
  return <p className="cart__num-val">{props.count()}</p>;
};

export default CartCount;
