import React, { useState, useEffect } from "react";
import "./Cart.css";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Cart = (props) => {
  console.log("CART PROPS: ", props);

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("ENTERING USE-EFFECT");
    setProducts([]);
    if (props.cart.length) {
      props.cart.forEach((product) => {
        console.log("PRODUCT IN USE EFFECT: ", product);
        fetch(`http://localhost:5000/api/products/${product.item}`)
          .then((res) => res.json())
          .then((prod) => {
            console.log(prod);
            setProducts((oldArr) => [...oldArr, prod]);
          })
          .catch((err) => console.error(err));
      });
    }
  }, []);

  useEffect(() => {
    console.log("ENTERING PRICE USE EFFECT");
    let price = 0;
    products.forEach((product) => {
      const item = props.cart.find((item) => item.item === product._id);
      console.log("PRICE: ", product.price);
      console.log("QUANTITY: ", item.quantity);
      price = price + product.price * item.quantity;
      console.log("PRICE: ", price);
    });
    setTotalPrice(price.toFixed(2));
  }, [products, props.cart]);

  return (
    <React.Fragment>
      <h1 className="checkout__header">My Cart</h1>
      <section className="checkout-container">
        {products.length ? (
          products.map((product) => {
            const item = props.cart.find((item) => item.item === product._id);
            return (
              <div key={product._id} className="checkout__card">
                <img
                  className="checkout__card__image"
                  src={`http://localhost:5000${product.image}`}
                  alt={product.title}
                ></img>
                <div className="checkout__card__details">
                  <h3 className="checkout__card__title">{product.title}</h3>
                  <h4 className="checkout__card__price">${product.price}</h4>
                  <div className="checkout__card__quantity checkout__card__link">
                    <p className="checkout__card__quantity--text">Quantity: </p>
                    <div className="checkout__card__quantity__count">
                      <p className="checkout__card__quantity__count--text">
                        {item && item.quantity}
                      </p>
                      <div className="checkout__card__quantity__count__icons">
                        <RemoveIcon
                          className="checkout__card__quantity__count--minus"
                          style={{ fontSize: 25 }}
                          onClick={() =>
                            props.updateQuantity(product._id, -1, "subtract")
                          }
                        />
                        <AddIcon
                          className="checkout__card__quantity__count--add"
                          style={{ fontSize: 25 }}
                          onClick={() => props.updateQuantity(product._id, 1)}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      const newArr = products.filter(
                        (prod) => prod._id !== product._id
                      );
                      setProducts(newArr);
                      props.removeItem(product._id);
                    }}
                    className="checkout__card__remove"
                  >
                    Remove
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="checkout__empty">There are no items in your cart</p>
        )}
        {products.length ? (
          <p className="checkout__price">{totalPrice}</p>
        ) : null}
      </section>
    </React.Fragment>
  );
};

export default Cart;
