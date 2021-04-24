import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [viewLogin, setViewLogin] = useState(true);

  let view;

  if (viewLogin) {
    view = (
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
            <span
              onClick={() => setViewLogin(false)}
              className="login__signup__link"
            >
              HERE
            </span>
          </h6>
        </form>
      </div>
    );
  } else {
    view = (
      <div className="register">
        <h3 className="signup__title">Signup</h3>
        <form className="signup">
          <label className="signup__label--email" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={signupEmail}
            id="email"
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <label className="signup__label--password" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            value={signupPassword}
            id="password"
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <button className="signup__button">Create Account</button>
          <h6 onClick={() => setViewLogin(true)} className="signup__back">
            Back to Login
          </h6>
        </form>
      </div>
    );
  }

  return view;
};

export default Register;
