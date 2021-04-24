import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register">
      <h3 className="login__title">Login</h3>
      <form className="login">
        <label className="login__label--email" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="login__label--password" htmlFor="password">
          Password
        </label>
        <input
          type="text"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__button">Continue</button>
        <h6 className="login__guest">
          Login as <span className="login__guest__link">GUEST</span>
        </h6>
        <h6 className="login__signup">
          Don't have an account? Signup{" "}
          <span className="login__signup__link">HERE</span>
        </h6>
      </form>
    </div>
  );
};

export default Register;
