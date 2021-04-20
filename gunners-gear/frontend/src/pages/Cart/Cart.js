import React, { useState, useEffect } from "react";
import "./Cart.css";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Cart = (props) => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [enterShippingInfo, setEnterShippingInfo] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("Month");
  const [expirationYear, setExpirationYear] = useState("Year");
  const [cvv, setCvv] = useState("");
  const [placeOrder, setPlaceOrder] = useState(false);

  useEffect(() => {
    setProducts([]);
    if (props.cart.length) {
      props.cart.forEach((product) => {
        fetch(`http://localhost:5000/api/products/${product.item}`)
          .then((res) => res.json())
          .then((prod) => {
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

  let view;
  if (enterShippingInfo) {
    view = (
      <div className="checkout__order">
        <div className="checkout__order__shipment">
          <form className="checkout__order__shipment__address">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="first name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="last name"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="street name"
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="city"
            />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="state"
            />
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="zip code"
            />
          </form>
        </div>
        <div className="checkout__order__payment">
          <form className="checkout__order__payment__info">
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Card Number"
            />
            <label>
              Month
              <select
                value={expirationMonth}
                onChange={(e) => setExpirationMonth(e.target.value)}
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
            </label>
            <label>
              Year
              <select
                value={expirationYear}
                onChange={(e) => setExpirationYear(e.target.value)}
              >
                <option value="1">21</option>
                <option value="2">22</option>
                <option value="3">23</option>
                <option value="4">24</option>
                <option value="5">25</option>
              </select>
            </label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="cvv"
            />
          </form>
        </div>
      </div>
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
  // return (
  //   <React.Fragment>
  //     <h1 className="checkout__header">My Cart</h1>
  //     <section
  //       className={`checkout-container ${
  //         !products.length && "checkout-container-height"
  //       }`}
  //     >
  //       {products.length ? (
  //         products.map((product) => {
  //           const item = props.cart.find((item) => item.item === product._id);
  //           return (
  //             <div key={product._id} className="checkout__card">
  //               <img
  //                 className="checkout__card__image"
  //                 src={`http://localhost:5000${product.image}`}
  //                 alt={product.title}
  //               ></img>
  //               <div className="checkout__card__details">
  //                 <h3 className="checkout__card__title">{product.title}</h3>
  //                 <h4 className="checkout__card__price">${product.price}</h4>
  //                 <div className="checkout__card__quantity checkout__card__link">
  //                   <p className="checkout__card__quantity--text">Quantity: </p>
  //                   <div className="checkout__card__quantity__count">
  //                     <p className="checkout__card__quantity__count--text">
  //                       {item && item.quantity}
  //                     </p>
  //                     <div className="checkout__card__quantity__count__icons">
  //                       <RemoveIcon
  //                         className="checkout__card__quantity__count--minus"
  //                         style={{ fontSize: 25 }}
  //                         onClick={() =>
  //                           props.updateQuantity(product._id, -1, "subtract")
  //                         }
  //                       />
  //                       <AddIcon
  //                         className="checkout__card__quantity__count--add"
  //                         style={{ fontSize: 25 }}
  //                         onClick={() => props.updateQuantity(product._id, 1)}
  //                       />
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div
  //                 onClick={() => {
  //                   const newArr = products.filter(
  //                     (prod) => prod._id !== product._id
  //                   );
  //                   setProducts(newArr);
  //                   props.removeItem(product._id);
  //                 }}
  //                 className="checkout__card__remove"
  //               >
  //                 Remove
  //               </div>
  //             </div>
  //           );
  //         })
  //       ) : (
  //         <p className="checkout__empty">There are no items in your cart</p>
  //       )}
  //     </section>
  //     {products.length ? (
  //       <React.Fragment>
  //         <p className="checkout__price">
  //           Total Price:{" "}
  //           <span className="checkout__price--number">${totalPrice}</span>
  //         </p>
  //         <div className="checkout__buy">Proceed to checkout</div>
  //       </React.Fragment>
  //     ) : null}
  //   </React.Fragment>
  // );
};

export default Cart;
