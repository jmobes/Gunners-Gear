import React, { useState, useEffect } from "react";
import "./Cart.css";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Cart = (props) => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [enterShippingInfo, setEnterShippingInfo] = useState(false);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("1");
  const [expirationYear, setExpirationYear] = useState("2021");
  const [cvv, setCvv] = useState("");
  const [placeOrder, setPlaceOrder] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setProducts([]);
    if (props.cart.length) {
      props.cart.forEach((product) => {
        fetch(`http://localhost:5000/api/products/${product.item}`)
          .then((res) => res.json())
          .then((prod) => {
            console.log("PRODUCT: ", prod);
            setProducts((oldArr) => [...oldArr, prod]);
          })
          .catch((err) => console.error(err));
      });
    }
  }, []);

  useEffect(() => {
    let price = 0;
    products.forEach((product) => {
      const item = props.cart.find((item) => item.item === product._id);
      price = price + product.price * item.quantity;
    });
    setTotalPrice(price.toFixed(2));
  }, [products, props.cart]);

  const processPayment = async () => {
    setError("");
    if (
      !fullName ||
      !address ||
      !city ||
      !state ||
      !zip ||
      !cardNumber ||
      !expirationMonth ||
      !expirationYear ||
      !cvv
    ) {
      setError("Please complete delivery and payment information");
      return;
    }
    if (isNaN(zip) || zip.length !== 5) {
      setError("Invalid zip code");
      return;
    }
    if (isNaN(cvv) || cvv.length !== 3) {
      setError("Invalid ccv");
      return;
    }
    if (cardNumber.length !== 16) {
      setError("Invalid card number");
      return;
    }
    const inputDate = new Date();
    inputDate.setFullYear(expirationYear, expirationMonth - 1, 1);
    const today = new Date();
    today.setFullYear(today.getFullYear(), today.getMonth(), 1);
    if (inputDate.getTime() < today.getTime()) {
      setError("Your card is expired");
      return;
    }
    if (!props.id || !props.token) {
      setError("You need to log in before placing an order");
      return;
    }

    try {
      const options = {
        method: "POST",
        headers: { token: props.token, "Content-Type": "application/json" },
        body: JSON.stringify({ products: products }),
      };
      const response = await fetch(
        `http://localhost:5000/api/user/orders/${props.id}`,
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };

  let view;
  if (enterShippingInfo) {
    view = (
      <React.Fragment>
        <div onClick={() => setEnterShippingInfo(false)} className="back-btn">
          Back
        </div>
        <div className="checkout__order">
          <div className="checkout__order__shipment">
            Delivery Address
            <form className="checkout__order__shipment__address">
              <label htmlFor="fname">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Smith"
                id="fname"
              />
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="12345 Gooner Ave"
                id="address"
              />
              <label htmlFor="city">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Los Angeles"
                id="city"
              />
              <label htmlFor="state">State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="California"
                id="state"
              />
              <label htmlFor="zip">Zip Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => {
                  if (isNaN(e.target.value)) {
                    return;
                  }
                  setZip(e.target.value);
                }}
                placeholder="53219"
                id="zip"
                maxLength="5"
              />
            </form>
          </div>
          <div className="checkout__order__payment">
            Payment
            <form className="checkout__order__payment__info">
              <label htmlFor="card">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => {
                  if (isNaN(e.target.value)) {
                    return;
                  }
                  setCardNumber(e.target.value);
                }}
                placeholder="1111 2222 3333 4444"
                id="card"
                maxLength="16"
              />
              <label htmlFor="month">Month</label>
              <select
                value={expirationMonth}
                onChange={(e) => setExpirationMonth(e.target.value)}
                id="month"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <label htmlFor="year">Year</label>
              <select
                value={expirationYear}
                onChange={(e) => setExpirationYear(e.target.value)}
                id="year"
              >
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => {
                  if (isNaN(e.target.value)) {
                    return;
                  }
                  setCvv(e.target.value);
                }}
                placeholder="258"
                id="cvv"
                maxLength="3"
              />
            </form>
          </div>
          {error ? <p className="checkout__order__error">{error}</p> : null}
          <div onClick={processPayment} className="checkout__order__button">
            Place Order <span>${totalPrice}</span>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    view = (
      <React.Fragment>
        <h1 className="checkout__header">My Cart</h1>
        <section
          className={`checkout-container ${
            !products.length && "checkout-container-height"
          }`}
        >
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
                      <p className="checkout__card__quantity--text">
                        Quantity:{" "}
                      </p>
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
              );
            })
          ) : (
            <p className="checkout__empty">There are no items in your cart</p>
          )}
        </section>
        {products.length ? (
          <React.Fragment>
            <p className="checkout__price">
              Total Price:{" "}
              <span className="checkout__price--number">${totalPrice}</span>
            </p>
            <div
              onClick={() => setEnterShippingInfo(true)}
              className="checkout__buy"
            >
              Proceed to checkout
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
  return view;
};

export default Cart;
