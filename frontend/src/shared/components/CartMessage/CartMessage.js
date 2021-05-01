import React from "react";

import "./CartMessage.css";

const CartMessage = (props) => {
    return (
        <div className="cartMessage">
            <p className="cartMessage__text">Item added to cart</p>
        </div>
    );
};

export default CartMessage;