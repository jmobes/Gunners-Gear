import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [viewLogin, setViewLogin] = useState(true);
  const [signupError, setSignupError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const createAccount = async (e) => {
    setIsLoading(true);
    setSignupError("");
    e.preventDefault();
    if (!setSignupEmail || !signupPassword) {
      setSignupError("Enter an email and password");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signupEmail, password: signupPassword }),
      });
      const data = await response.json();
      if (!response.ok) {
        setSignupError(data.error);
        throw new Error();
      }
      history.push("/");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  let view;

  if (viewLogin) {
    view = (
      <React.Fragment>
        {isLoading ? (
          <div className="loader__ctn">
            <div className="loader">Loading...</div>
          </div>
        ) : null}
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
      </React.Fragment>
    );
  } else {
    view = (
      <React.Fragment>
        {isLoading ? (
          <div className="loader__ctn">
            <div className="loader">Loading...</div>
          </div>
        ) : null}
        <div className="register">
          <h3 className="signup__title">Signup</h3>
          {signupError ? <p className="signup__error">{signupError}</p> : null}
          <form onSubmit={createAccount} className="signup">
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
            <button type="submit" className="signup__button">
              Create Account
            </button>
            <h6 onClick={() => setViewLogin(true)} className="signup__back">
              Back to Login
            </h6>
          </form>
        </div>
      </React.Fragment>
    );
  }

  return view;
};

export default Register;
