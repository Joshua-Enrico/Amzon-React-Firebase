import React, { useState } from "react";
import "../../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth.user) {
          history("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });

    // firebase login
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://smart2020.smartgyro.es/img/cms/tiendas/Amazon-Logo.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Fake Clone Conditions of Use and
          Privacy Notice.
        </p>
        <Link to="/registration">
          <button className="login__registerButton">
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
