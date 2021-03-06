import React, { useState } from "react";
import "../../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Register() {
        const history = useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    
      
        const register = (e) => {
          e.preventDefault();
          createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
              console.log(auth);
              if (auth) {
                history("/login");
              }
            })
            .catch((error) => alert(error.message));
          // firebase register
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
          <h1>Registration</h1>
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
          </form>
          <button onClick={register} className="login__registerButton">
            Create your Amazon account
          </button>
          <p>
            By continuing, you agree to Amazon Fake Clone Conditions of Use and
            Privacy Notice.
          </p>
        </div>
      </div>
    );
}

export default Register;
