import "./App.css";
import React, { useEffect } from "react";
import HeHome from "./components/He_Home";
import Checkout from "./components/Checkout";
import Register from "./components/LoginComponents/Register";
import Payment from "./components/Payment_Components/Payment";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/LoginComponents/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/Providers/StateProvider";
import { ToastContainer } from "react-toastify";
import Orders from "./components/Orders_Comp/Orders";


function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will run once the component is mounted
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        console.log("user logged in");
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        console.log("user logged out");
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/registration" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<HeHome />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
