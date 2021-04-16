import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log("CART: ", props.cart);

  const [cart, setCart] = useState(props.cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("ENTERING USE-EFFECT");
    if (cart.length) {
      cart.forEach((product) => {
        console.log("PRODUCT IN USE EFFECT: ", product);
        fetch(`http://localhost:5000/api/products/${product.item}`)
          .then((res) => res.json())
          .then((prod) => {
            setProducts((oldArr) => [...oldArr, prod]);
          })
          .catch((err) => console.error(err));
      });
    }
    console.log("PRODUCTS: ", products);
  }, []);

  return (
    <React.Fragment>
      <h1 className="checkout__header">Cart</h1>
      <section className="checkout-container">
        {products.length ? (
          products.map((product) => {
            return (
              <div key={product._id} className="checkout__card">
                <img
                  className="checkout__card__image"
                  src={`http://localhost:5000${product.image}`}
                  alt={product.title}
                ></img>
                <div className="checkout__card__details">
                  <h3 className="checkout__card__title">{product.title}</h3>
                  <h4 className="checkout__card__price">{product.price}</h4>
                </div>
              </div>
            );
          })
        ) : (
          <p>There are no items in your cart</p>
        )}
      </section>
    </React.Fragment>
  );
};

export default Cart;
