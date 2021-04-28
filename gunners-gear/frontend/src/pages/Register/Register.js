import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [viewLogin, setViewLogin] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const createAccount = async (e) => {
    setIsLoading(true);
    setSignupError("");
    e.preventDefault();
    if (!signupEmail || !signupPassword) {
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
        setIsLoading(false);
        return;
      }
      localStorage.setItem(
        "userData",
        JSON.stringify({ id: data.user, token: data.token })
      );
      props.setIsLoggedIn(true);
      history.push("/");
      setIsLoading(false);
    } catch (err) {
      setSignupError("Server error, try again later");
      setIsLoading(false);
    }
  };

  const loginGuest = async () => {
    setIsLoading(true);
    setLoginError("");
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "guest@gmail.com",
          password: "Guest123!",
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setLoginError(data.error);
        setIsLoading(false);
        return;
      }
      localStorage.setItem(
        "userData",
        JSON.stringify({ id: data.user, token: data.token })
      );
      history.goBack();
      setIsLoading(false);
      props.setIsLoggedIn(true);
    } catch (err) {
      setLoginError(err.message);
      setIsLoading(false);
    }
  };

  const login = async (e) => {
    setIsLoading(true);
    setLoginError("");
    e.preventDefault();
    if (!email || !password) {
      setLoginError("Enter an email and password");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setLoginError(data.error);
        setIsLoading(false);
        return;
      }
      localStorage.setItem(
        "userData",
        JSON.stringify({ id: data.user, token: data.token })
      );
      history.goBack();
      setIsLoading(false);
      props.setIsLoggedIn(true);
    } catch (err) {
      setLoginError(err.message);
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("userData");
    props.setIsLoggedIn(false);
  };

  let view;

  if (viewLogin && props.isLoggedIn) {
    view = (
      <div className="account__container">
        <p className="orders__message">See your order history</p>
        <div className="orders__button">
          <Link to="/orders">Past Orders</Link>
        </div>
        <div onClick={logout} className="logout__button">
          Logout
        </div>
      </div>
    );
  } else if (viewLogin && !props.isLoggedIn) {
    view = (
      <React.Fragment>
        {isLoading ? (
          <div className="loader__ctn">
            <div className="loader">Loading...</div>
          </div>
        ) : null}
        <div className="register">
          <h3 className="login__title">Login</h3>
          {loginError ? <p className="login__error">{loginError}</p> : null}
          <form onSubmit={login} className="login">
            <label className="login__label--email" htmlFor="login-email">
              Email
            </label>
            <input
              type="email"
              value={email}
              id="login-email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="login__label--password" htmlFor="login-password">
              Password
            </label>
            <input
              type="password"
              value={password}
              id="login-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login__button">
              Continue
            </button>
            <h6 className="login__guest">
              Login as{" "}
              <span onClick={loginGuest} className="login__guest__link">
                GUEST
              </span>
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
              type="password"
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
