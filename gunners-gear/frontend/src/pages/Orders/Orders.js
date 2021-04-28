import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState();

  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/user/orders/${userData.id}`
        );
        const data = await response.json();
        setOrders(data.orders);
      } catch (err) {
        setError(err.message);
      }
    };
    if (userData && userData.token && userData.id) {
      fetchData();
    } else {
      history.push("/");
    }
  }, []);

  return (
    <div className="orders">
      <p className="order__title">Order History</p>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="order__history">
          <div className="order__history__labels">
            <p className="order__history__date__label">Date</p>
            <p className="order__history__order__number">Order Number</p>
          </div>
          {orders && orders.length ? (
            <div className="order__history__ctn">
              {orders.map((order) => {
                return (
                  <div key={order._id} className="order__history__order">
                    <div className="order__history__order__date">
                      {order.dateOrdered.split("T")[0]}:
                    </div>
                    <div className="order__history__order__id">{order._id}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="order__error">
              {error
                ? `${error}`
                : `There are no orders associated with this account`}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
