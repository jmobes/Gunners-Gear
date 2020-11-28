import React from "react";

import "./ProductDetails.css";
import CardButton from "../../shared/components/CardButton/CardButton";

const ProductDetails = (props) => {
    return (
        <div className="product">
            <div className="product__image__container">
                <img src="" className="product__image"></img>
            </div>
            <div className="product__info__container">
                <p className="product__info__description"></p>
                <div className="product__info__size">
                    <p className="product__info__size--text">Size</p>
                    <div className="product__info__size--small">S</div>
                    <div className="product__info__size--medium">M</div>
                    <div className="product__info__size--large">L</div>
                </div>
                <div className="product__info__quantity">
                    <p className="product__info__quantity--text">Quantity</p>
                    <div className="product__info__quantity--count">1</div>
                </div>
                <CardButton />
            </div>
        </div>
    );
}

export default ProductDetails;